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

// Universities and Programs data structure with comprehensive tuition fees
const universitiesData = [
  {
    "university": "Medical University – Sofia",
    "city": "Sofia",
    "programs": [
      { "degree": "Bachelor", "field": "Medicine", "tuition_min": 7500, "tuition_max": 8500 },
      { "degree": "Master", "field": "Medicine", "tuition_min": 7500, "tuition_max": 8500 },
      { "degree": "PhD", "field": "Medicine", "tuition_min": 7500, "tuition_max": 8500 }
    ]
  },
  {
    "university": "Medical University – Varna",
    "city": "Varna",
    "programs": [
      { "degree": "Bachelor", "field": "Medicine", "tuition_min": 7500, "tuition_max": 8500 },
      { "degree": "Master", "field": "Medicine", "tuition_min": 7500, "tuition_max": 8500 },
      { "degree": "PhD", "field": "Medicine", "tuition_min": 7500, "tuition_max": 8500 },
      { "degree": "Bachelor", "field": "Dentistry", "tuition_min": 8000, "tuition_max": 9000 },
      { "degree": "Master", "field": "Dentistry", "tuition_min": 8000, "tuition_max": 9000 },
      { "degree": "PhD", "field": "Dentistry", "tuition_min": 8000, "tuition_max": 9000 },
      { "degree": "Bachelor", "field": "Pharmacy", "tuition_min": 6000, "tuition_max": 7000 },
      { "degree": "Master", "field": "Pharmacy", "tuition_min": 6000, "tuition_max": 7000 },
      { "degree": "PhD", "field": "Pharmacy", "tuition_min": 6000, "tuition_max": 7000 }
    ]
  },
  {
    "university": "Medical University – Pleven",
    "city": "Other",
    "programs": [
      { "degree": "Bachelor", "field": "Medicine", "tuition_min": 7500, "tuition_max": 8500 },
      { "degree": "Master", "field": "Medicine", "tuition_min": 7500, "tuition_max": 8500 },
      { "degree": "PhD", "field": "Medicine", "tuition_min": 7500, "tuition_max": 8500 },
      { "degree": "Bachelor", "field": "Nursing", "tuition_min": 3000, "tuition_max": 4500 },
      { "degree": "Master", "field": "Nursing", "tuition_min": 3000, "tuition_max": 4500 },
      { "degree": "PhD", "field": "Nursing", "tuition_min": 3000, "tuition_max": 4500 }
    ]
  },
  {
    "university": "Technical University – Sofia",
    "city": "Sofia",
    "programs": [
      { "degree": "Bachelor", "field": "Engineering", "tuition_min": 3000, "tuition_max": 4500 },
      { "degree": "Master", "field": "Engineering", "tuition_min": 3000, "tuition_max": 4500 },
      { "degree": "PhD", "field": "Engineering", "tuition_min": 3000, "tuition_max": 4500 }
    ]
  },
  {
    "university": "Technical University – Varna",
    "city": "Varna",
    "programs": [
      { "degree": "Bachelor", "field": "Engineering", "tuition_min": 3000, "tuition_max": 4500 },
      { "degree": "Master", "field": "Engineering", "tuition_min": 3000, "tuition_max": 4500 },
      { "degree": "PhD", "field": "Engineering", "tuition_min": 3000, "tuition_max": 4500 }
    ]
  },
  {
    "university": "New Bulgarian University",
    "city": "Sofia",
    "programs": [
      { "degree": "Bachelor", "field": "Business / Management", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "Master", "field": "Business / Management", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "PhD", "field": "Business / Management", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "Bachelor", "field": "Computer Science / IT", "tuition_min": 3000, "tuition_max": 4500 },
      { "degree": "Master", "field": "Computer Science / IT", "tuition_min": 3000, "tuition_max": 4500 },
      { "degree": "PhD", "field": "Computer Science / IT", "tuition_min": 3000, "tuition_max": 4500 }
    ]
  },
  {
    "university": "American University in Bulgaria",
    "city": "Other",
    "programs": [
      { "degree": "Bachelor", "field": "Business / Management", "tuition_min": 2500, "tuition_max": 4000 }
    ]
  },
  {
    "university": "University of National and World Economy",
    "city": "Sofia",
    "programs": [
      { "degree": "Bachelor", "field": "Business / Management", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "Master", "field": "Business / Management", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "PhD", "field": "Business / Management", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "Bachelor", "field": "Economics", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "Master", "field": "Economics", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "PhD", "field": "Economics", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "Bachelor", "field": "Finance", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "Master", "field": "Finance", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "PhD", "field": "Finance", "tuition_min": 2500, "tuition_max": 4000 }
    ]
  },
  {
    "university": "University of Economics – Varna",
    "city": "Varna",
    "programs": [
      { "degree": "Bachelor", "field": "Business / Management", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "Master", "field": "Business / Management", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "PhD", "field": "Business / Management", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "Bachelor", "field": "Economics", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "Master", "field": "Economics", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "PhD", "field": "Economics", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "Bachelor", "field": "Finance", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "Master", "field": "Finance", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "PhD", "field": "Finance", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "Bachelor", "field": "Computer Science / IT", "tuition_min": 3000, "tuition_max": 4500 },
      { "degree": "Master", "field": "Computer Science / IT", "tuition_min": 3000, "tuition_max": 4500 },
      { "degree": "PhD", "field": "Computer Science / IT", "tuition_min": 3000, "tuition_max": 4500 }
    ]
  },
  {
    "university": "European Polytechnical University",
    "city": "Other",
    "programs": [
      { "degree": "Bachelor", "field": "Engineering", "tuition_min": 3000, "tuition_max": 4500 },
      { "degree": "Master", "field": "Engineering", "tuition_min": 3000, "tuition_max": 4500 },
      { "degree": "PhD", "field": "Engineering", "tuition_min": 3000, "tuition_max": 4500 },
      { "degree": "Bachelor", "field": "Computer Science / IT", "tuition_min": 3000, "tuition_max": 4500 },
      { "degree": "Master", "field": "Computer Science / IT", "tuition_min": 3000, "tuition_max": 4500 },
      { "degree": "PhD", "field": "Computer Science / IT", "tuition_min": 3000, "tuition_max": 4500 }
    ]
  },
  {
    "university": "Varna Free University",
    "city": "Varna",
    "programs": [
      { "degree": "Bachelor", "field": "Business / Management", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "Master", "field": "Business / Management", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "PhD", "field": "Business / Management", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "Bachelor", "field": "Computer Science / IT", "tuition_min": 3000, "tuition_max": 4500 },
      { "degree": "Master", "field": "Computer Science / IT", "tuition_min": 3000, "tuition_max": 4500 },
      { "degree": "PhD", "field": "Computer Science / IT", "tuition_min": 3000, "tuition_max": 4500 },
      { "degree": "Bachelor", "field": "Law", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "Master", "field": "Law", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "PhD", "field": "Law", "tuition_min": 2500, "tuition_max": 4000 },
      { "degree": "Bachelor", "field": "Tourism", "tuition_min": 2000, "tuition_max": 3500 },
      { "degree": "Master", "field": "Tourism", "tuition_min": 2000, "tuition_max": 3500 },
      { "degree": "PhD", "field": "Tourism", "tuition_min": 2000, "tuition_max": 3500 }
    ]
  },
  {
    "university": "University of Ruse",
    "city": "Other",
    "programs": [
      { "degree": "Bachelor", "field": "Engineering", "tuition_min": 3000, "tuition_max": 4500 },
      { "degree": "Master", "field": "Engineering", "tuition_min": 3000, "tuition_max": 4500 },
      { "degree": "PhD", "field": "Engineering", "tuition_min": 3000, "tuition_max": 4500 }
    ]
  },
  {
    "university": "Trakia University",
    "city": "Other",
    "programs": [
      { "degree": "Bachelor", "field": "Engineering", "tuition_min": 3000, "tuition_max": 4500 },
      { "degree": "Master", "field": "Engineering", "tuition_min": 3000, "tuition_max": 4500 },
      { "degree": "PhD", "field": "Engineering", "tuition_min": 3000, "tuition_max": 4500 },
      { "degree": "Bachelor", "field": "Medicine", "tuition_min": 7500, "tuition_max": 8500 },
      { "degree": "Master", "field": "Medicine", "tuition_min": 7500, "tuition_max": 8500 },
      { "degree": "PhD", "field": "Medicine", "tuition_min": 7500, "tuition_max": 8500 }
    ]
  },
  {
    "university": "Veliko Tarnovo University",
    "city": "Other",
    "programs": [
      { "degree": "Bachelor", "field": "Education", "tuition_min": 2000, "tuition_max": 3000 },
      { "degree": "Master", "field": "Education", "tuition_min": 2000, "tuition_max": 3000 },
      { "degree": "PhD", "field": "Education", "tuition_min": 2000, "tuition_max": 3000 }
    ]
  },
  {
    "university": "South-West University \"Neofit Rilski\"",
    "city": "Other",
    "programs": [
      { "degree": "Bachelor", "field": "Education", "tuition_min": 2000, "tuition_max": 3000 },
      { "degree": "Master", "field": "Education", "tuition_min": 2000, "tuition_max": 3000 },
      { "degree": "PhD", "field": "Education", "tuition_min": 2000, "tuition_max": 3000 }
    ]
  },
  {
    "university": "Preslavsky University",
    "city": "Other",
    "programs": [
      { "degree": "Bachelor", "field": "Education", "tuition_min": 2000, "tuition_max": 3000 },
      { "degree": "Master", "field": "Education", "tuition_min": 2000, "tuition_max": 3000 },
      { "degree": "PhD", "field": "Education", "tuition_min": 2000, "tuition_max": 3000 }
    ]
  }
];

// Cost of Living by Area (monthly in USD)
const livingCostsByCity = {
  Sofia: {
    university_accommodation: 200,
    private_accommodation: { min: 350, max: 500 },
    food_and_misc: 400
  },
  Varna: {
    university_accommodation: 200,
    private_accommodation: { min: 300, max: 450 },
    food_and_misc: 375
  },
  Other: {
    university_accommodation: 200,
    private_accommodation: { min: 280, max: 400 },
    food_and_misc: 350
  }
};

const formSchema = z.object({
  university: z.string().min(1, "Please select a university"),
  program: z.string().min(1, "Please select a program"),
  accommodation: z.enum(["university", "private"], { required_error: "Please select accommodation type" })
});

const CostCalculator = () => {
  const [calculations, setCalculations] = useState<{
    tuitionMin: number;
    tuitionMax: number;
    tuitionAvg: number;
    livingMonth: number;
    livingYear: number;
    totalYearMin: number;
    totalYearMax: number;
    totalYearAvg: number;
    city: string;
    universityName: string;
    programName: string;
  } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      university: "",
      program: "",
      accommodation: "university"
    }
  });

  const selectedUniversity = form.watch("university");
  const selectedProgram = form.watch("program");
  const selectedAccommodation = form.watch("accommodation");

  const getSelectedUniversityData = () => {
    return universitiesData.find(uni => uni.university === selectedUniversity);
  };

  const getSelectedProgramData = () => {
    const university = getSelectedUniversityData();
    if (!university) return null;
    return university.programs.find(program => `${program.degree}-${program.field}` === selectedProgram);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const university = universitiesData.find(uni => uni.university === values.university);
    const program = university?.programs.find(prog => `${prog.degree}-${prog.field}` === values.program);
    
    if (!university || !program) {
      console.error("University or program not found");
      return;
    }
    
    const city = university.city as keyof typeof livingCostsByCity;
    const cityData = livingCostsByCity[city];
    
    const tuitionMin = program.tuition_min;
    const tuitionMax = program.tuition_max;
    const tuitionAvg = (tuitionMin + tuitionMax) / 2;
    
    const accommodationCost = values.accommodation === "university" 
      ? cityData.university_accommodation
      : (cityData.private_accommodation.min + cityData.private_accommodation.max) / 2;
    
    const livingMonth = accommodationCost + cityData.food_and_misc;
    const livingYear = livingMonth * 12;
    const totalYearMin = tuitionMin + livingYear;
    const totalYearMax = tuitionMax + livingYear;
    const totalYearAvg = tuitionAvg + livingYear;

    setCalculations({
      tuitionMin,
      tuitionMax,
      tuitionAvg,
      livingMonth,
      livingYear,
      totalYearMin,
      totalYearMax,
      totalYearAvg,
      city: university.city,
      universityName: university.university,
      programName: `${program.degree} in ${program.field}`
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
                              {universitiesData.map((university) => (
                                <SelectItem key={university.university} value={university.university}>
                                  {university.university}
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
                                {getSelectedUniversityData()?.programs.map((program) => (
                                  <SelectItem 
                                    key={`${program.degree}-${program.field}`} 
                                    value={`${program.degree}-${program.field}`}
                                  >
                                    {program.degree} in {program.field} - ${program.tuition_min.toLocaleString()} - ${program.tuition_max.toLocaleString()}/year
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
                              <SelectItem value="university">University Dormitory ($200/month)</SelectItem>
                              <SelectItem value="private">Private Apartment ($350-500/month avg)</SelectItem>
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
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-blue-800 mb-2">Selected Program</h3>
                    <p className="text-blue-700">{calculations.universityName}</p>
                    <p className="text-blue-600">{calculations.programName}</p>
                    <p className="text-sm text-blue-600">Location: {calculations.city}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-2">Tuition Fee Range</h3>
                      <p className="text-lg font-bold text-green-600">
                        ${calculations.tuitionMin.toLocaleString()} - ${calculations.tuitionMax.toLocaleString()}
                      </p>
                      <p className="text-sm text-green-600">per year</p>
                      <p className="text-sm text-green-500 mt-1">
                        Avg: ${calculations.tuitionAvg.toLocaleString()}
                      </p>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-orange-800 mb-2">Living Costs</h3>
                      <p className="text-2xl font-bold text-orange-600">
                        ${calculations.livingMonth.toLocaleString()}
                      </p>
                      <p className="text-sm text-orange-600">per month</p>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-4">Annual Total Cost Range</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Minimum Total:</span>
                        <span className="font-bold text-lg text-purple-600">${calculations.totalYearMin.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Maximum Total:</span>
                        <span className="font-bold text-lg text-purple-600">${calculations.totalYearMax.toLocaleString()}</span>
                      </div>
                      <hr className="my-2" />
                      <div className="flex justify-between items-center text-lg font-bold text-purple-800 bg-purple-100 p-3 rounded">
                        <span>Average Total:</span>
                        <span>${calculations.totalYearAvg.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Cost Breakdown Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Tuition (Min - Max):</span>
                        <span>${calculations.tuitionMin.toLocaleString()} - ${calculations.tuitionMax.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Living Expenses (12 months):</span>
                        <span>${calculations.livingYear.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Accommodation (monthly):</span>
                        <span>${
                          selectedAccommodation === "university" 
                            ? livingCostsByCity[calculations.city as keyof typeof livingCostsByCity].university_accommodation
                            : Math.round((livingCostsByCity[calculations.city as keyof typeof livingCostsByCity].private_accommodation.min + 
                                        livingCostsByCity[calculations.city as keyof typeof livingCostsByCity].private_accommodation.max) / 2)
                        }</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Food & Miscellaneous (monthly):</span>
                        <span>${livingCostsByCity[calculations.city as keyof typeof livingCostsByCity].food_and_misc}</span>
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
