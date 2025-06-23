
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, DollarSign, GraduationCap } from "lucide-react";

// University and program data
const universityData = {
  "medical-sofia": {
    name: "Medical University – Sofia",
    programs: {
      "medicine-md": { name: "Medicine (MD)", fee: 9900 },
      "dentistry-dds": { name: "Dentistry (DDS)", fee: 9900 },
      "pharmacy-bpharm": { name: "Pharmacy (BPharm)", fee: 6600 }
    }
  },
  "technical-sofia": {
    name: "Technical University – Sofia",
    programs: {
      "bachelor-engineering": { name: "Bachelor in Engineering", fee: 3300 },
      "master-engineering": { name: "Master in Engineering", fee: 4400 },
      "phd-engineering": { name: "PhD in Engineering", fee: 4950 }
    }
  },
  "nbu": {
    name: "New Bulgarian University (NBU)",
    programs: {
      "bachelor-various": { name: "Bachelor (Various Disciplines)", fee: 3300 },
      "master-various": { name: "Master", fee: 3850 },
      "phd-various": { name: "PhD", fee: 4400 }
    }
  },
  "medical-varna": {
    name: "Medical University – Varna",
    programs: {
      "medicine-md": { name: "Medicine (MD)", fee: 9900 }
    }
  },
  "medical-pleven": {
    name: "Medical University – Pleven",
    programs: {
      "medicine-md": { name: "Medicine (MD)", fee: 9900 }
    }
  },
  "european-poly": {
    name: "European Polytechnical University (Pernik)",
    programs: {
      "engineering-it": { name: "Engineering / IT Programs", fee: 1650 }
    }
  }
};

// Living cost estimates (monthly in USD)
const livingCosts = {
  accommodation: {
    dormitory: 200,
    apartment: 425 // average of 350-500
  },
  food: 300,
  transportation: 30,
  utilities: 80,
  personalExpenses: 150,
  booksSupplies: 50
};

const formSchema = z.object({
  university: z.string().min(1, "Please select a university"),
  program: z.string().min(1, "Please select a program"),
  accommodation: z.enum(["dormitory", "apartment"], { required_error: "Please select accommodation type" })
});

const CostCalculator = () => {
  const [calculations, setCalculations] = useState<{
    tuitionYear: number;
    livingMonth: number;
    livingYear: number;
    totalYear: number;
  } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      university: "",
      program: "",
      accommodation: "dormitory"
    }
  });

  const selectedUniversity = form.watch("university");
  const selectedProgram = form.watch("program");
  const selectedAccommodation = form.watch("accommodation");

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const university = universityData[values.university as keyof typeof universityData];
    const program = university.programs[values.program as keyof typeof university.programs];
    
    const tuitionYear = program.fee;
    const accommodationCost = livingCosts.accommodation[values.accommodation];
    const otherMonthlyCosts = livingCosts.food + livingCosts.transportation + 
                            livingCosts.utilities + livingCosts.personalExpenses + 
                            livingCosts.booksSupplies;
    
    const livingMonth = accommodationCost + otherMonthlyCosts;
    const livingYear = livingMonth * 12;
    const totalYear = tuitionYear + livingYear;

    setCalculations({
      tuitionYear,
      livingMonth,
      livingYear,
      totalYear
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 px-4 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop')`,
          backgroundPosition: 'center 40%'
        }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 flex items-center justify-center gap-3">
            <Calculator className="h-12 w-12 text-yellow-400" />
            Cost Calculator
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Calculate your estimated costs for studying in Bulgaria. Get a detailed breakdown of tuition fees and living expenses.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6" />
                  Calculate Your Costs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="university"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Select University *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Choose a university" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {Object.entries(universityData).map(([key, university]) => (
                                <SelectItem key={key} value={key}>
                                  {university.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {selectedUniversity && (
                      <FormField
                        control={form.control}
                        name="program"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Select Program *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Choose a program" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {Object.entries(universityData[selectedUniversity as keyof typeof universityData].programs).map(([key, program]) => (
                                  <SelectItem key={key} value={key}>
                                    {program.name} - ${program.fee.toLocaleString()}/year
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    <FormField
                      control={form.control}
                      name="accommodation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Accommodation Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="dormitory">University Dormitory ($200/month)</SelectItem>
                              <SelectItem value="apartment">Private Apartment ($350-500/month avg)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full" size="lg">
                      <Calculator className="mr-2 h-4 w-4" />
                      Calculate Costs
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Results */}
            {calculations && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-6 w-6" />
                    Your Cost Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-2">Tuition Fee</h3>
                      <p className="text-2xl font-bold text-blue-600">
                        ${calculations.tuitionYear.toLocaleString()}
                      </p>
                      <p className="text-sm text-blue-600">per year</p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-2">Living Costs</h3>
                      <p className="text-2xl font-bold text-green-600">
                        ${calculations.livingMonth.toLocaleString()}
                      </p>
                      <p className="text-sm text-green-600">per month</p>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-4">Annual Totals</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Tuition Fee (1 year):</span>
                        <span className="font-semibold">${calculations.tuitionYear.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Living Expenses (12 months):</span>
                        <span className="font-semibold">${calculations.livingYear.toLocaleString()}</span>
                      </div>
                      <hr className="my-2" />
                      <div className="flex justify-between text-lg font-bold text-purple-800">
                        <span>Total Annual Cost:</span>
                        <span>${calculations.totalYear.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Living Costs Breakdown (Monthly)</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Accommodation:</span>
                        <span>${livingCosts.accommodation[selectedAccommodation as keyof typeof livingCosts.accommodation]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Food:</span>
                        <span>${livingCosts.food}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Transportation:</span>
                        <span>${livingCosts.transportation}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Utilities:</span>
                        <span>${livingCosts.utilities}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Personal Expenses:</span>
                        <span>${livingCosts.personalExpenses}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Books & Supplies:</span>
                        <span>${livingCosts.booksSupplies}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Apply?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Now that you have an estimate of the costs, take the next step and apply for your program in Bulgaria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/apply" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 font-medium transition-colors"
                >
                  Apply Now
                </a>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/5 font-medium transition-colors"
                >
                  Get More Information
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CostCalculator;
