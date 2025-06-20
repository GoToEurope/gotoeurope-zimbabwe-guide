import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, Check, Info } from "lucide-react";
import { toast } from "sonner";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Define form schema with Zod
const formSchema = z.object({
  // Personal Information
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  dateOfBirth: z.date({ required_error: "Date of birth is required." }),
  gender: z.enum(["male", "female", "other"], { required_error: "Please select a gender." }),
  nationality: z.string().min(2, { message: "Nationality is required." }),
  passportNumber: z.string().min(2, { message: "Passport number is required." }),
  nationalId: z.string().optional(),
  maritalStatus: z.enum(["single", "married", "divorced", "widowed"]),
  contactNumber: z.string().min(10, { message: "Valid contact number is required." }),
  emailAddress: z.string().email({ message: "Invalid email address." }),
  currentAddress: z.string().min(5, { message: "Current address is required." }),
  
  // Program Information
  studyLevel: z.enum(["bachelors", "masters", "phd", "language"]),
  fieldOfStudy: z.string().min(2, { message: "Field of study is required." }),
  preferredUniversity: z.string().optional(),
  intakePeriod: z.enum(["september", "february", "other"]),
  otherIntakePeriod: z.string().optional(),
  
  // Academic Background (simplified for form state - we'll handle this as a separate component)
  qualifications: z.array(z.object({
    qualification: z.string(),
    institution: z.string(),
    country: z.string(),
    yearCompleted: z.string(),
    result: z.string(),
  })).optional(),
  
  // English Language Proficiency
  hasEnglishCertificate: z.enum(["yes", "no"], { required_error: "Please select yes or no." }),
  englishCertificateType: z.enum(["ielts", "toefl", "other"]).optional(),
  otherCertificateType: z.string().optional(),
  englishScore: z.string().optional(),
  
  // Travel History
  traveledAbroad: z.boolean(),
  countriesVisited: z.string().optional(),
  visaRejections: z.string().optional(),
  
  // Financial Information
  sponsor: z.enum(["self", "parent", "company"]),
  budget: z.string(),
  hasFinancialProof: z.boolean(),
  
  // Accommodation Preference
  accommodationPreference: z.enum(["dormitory", "apartment", "self"]),
  
  // Declaration and Documents
  declaration: z.boolean().refine(val => val === true, {
    message: "You must agree to the declaration to proceed."
  }),
  documents: z.object({
    passport: z.boolean(),
    certificates: z.boolean(),
    transcripts: z.boolean(),
    englishCertificate: z.boolean().optional(),
    photo: z.boolean(),
    birthCertificate: z.boolean(),
    referenceLetter: z.boolean().optional(),
    motivationLetter: z.boolean().optional(),
    policeClearance: z.boolean().optional(),
  }),
});

const ApplyNow = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [academicEntries, setAcademicEntries] = useState([{ id: 1 }]);
  
  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      gender: "male",
      nationality: "",
      passportNumber: "",
      nationalId: "",
      maritalStatus: "single",
      contactNumber: "",
      emailAddress: "",
      currentAddress: "",
      studyLevel: "bachelors",
      fieldOfStudy: "",
      preferredUniversity: "",
      intakePeriod: "september",
      otherIntakePeriod: "",
      hasEnglishCertificate: "no",
      traveledAbroad: false,
      countriesVisited: "",
      visaRejections: "",
      sponsor: "self",
      budget: "",
      hasFinancialProof: false,
      accommodationPreference: "dormitory",
      declaration: false,
      documents: {
        passport: false,
        certificates: false,
        transcripts: false,
        englishCertificate: false,
        photo: false,
        birthCertificate: false,
        referenceLetter: false,
        motivationLetter: false,
        policeClearance: false,
      },
    },
  });

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    console.log("Form values:", values);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Application submitted successfully! We will contact you soon.", {
        description: "Your application reference number: " + generateReferenceNumber(),
      });
      setIsSubmitting(false);
      
      // Optionally reset form
      // form.reset();
    }, 2000);
  }
  
  // Generate a random reference number for the application
  const generateReferenceNumber = () => {
    return 'GO' + Math.floor(100000 + Math.random() * 900000).toString();
  };
  
  // Handle adding more academic qualifications
  const addAcademicEntry = () => {
    const nextId = academicEntries.length > 0 
      ? Math.max(...academicEntries.map(entry => entry.id)) + 1 
      : 1;
    setAcademicEntries([...academicEntries, { id: nextId }]);
  };
  
  // Handle removing academic qualifications
  const removeAcademicEntry = (id: number) => {
    if (academicEntries.length > 1) {
      setAcademicEntries(academicEntries.filter(entry => entry.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="container mx-auto py-12 px-4 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Application for Studies in Bulgaria
        </h1>
        <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
          Complete the form below to apply for your educational journey in Bulgaria. 
          Our team will review your application and contact you within 48 hours.
        </p>

        <Card className="mb-8 border-t-4 border-t-primary shadow-lg">
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle className="flex items-center gap-2">
              <Info size={20} className="text-primary" />
              Application Guidelines
            </CardTitle>
            <CardDescription>Please read before completing the form</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4 text-gray-600">
              <p>
                <span className="font-semibold text-primary">Complete all sections:</span> All mandatory fields are marked with an asterisk (*).
              </p>
              <p>
                <span className="font-semibold text-primary">Academic documents:</span> You will need to upload scanned copies of your academic documents after submission.
              </p>
              <p>
                <span className="font-semibold text-primary">Application fee:</span> A non-refundable application processing fee of $50 is payable after form submission.
              </p>
              <p>
                <span className="font-semibold text-primary">Processing time:</span> Applications typically take 2-4 weeks to process with partner universities.
              </p>
            </div>
          </CardContent>
        </Card>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
            {/* Personal Information Section */}
            <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">1. Personal Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name (as per passport) *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date of Birth *</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                            disabled={(date) => date > new Date() || date < new Date('1940-01-01')}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
  
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender *</FormLabel>
                      <FormControl>
                        <RadioGroup 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                          className="flex space-x-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="male" id="gender-male" />
                            <label htmlFor="gender-male">Male</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="female" id="gender-female" />
                            <label htmlFor="gender-female">Female</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="gender-other" />
                            <label htmlFor="gender-other">Other</label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="nationality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nationality *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Zimbabwean" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="passportNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Passport Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. AB1234567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="nationalId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>National ID (optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. 12-345678-X-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="maritalStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Marital Status *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select marital status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="single">Single</SelectItem>
                          <SelectItem value="married">Married</SelectItem>
                          <SelectItem value="divorced">Divorced</SelectItem>
                          <SelectItem value="widowed">Widowed</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="contactNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Number (WhatsApp preferred) *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. +263 77 123 4567" {...field} />
                      </FormControl>
                      <FormDescription>
                        Include country code (e.g. +263 for Zimbabwe)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="emailAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. your.name@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="currentAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Address (incl. city, province) *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="e.g. 123 Example Street, Harare, Zimbabwe"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            {/* Program Information Section */}
            <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">2. Program Information</h2>
              
              <FormField
                control={form.control}
                name="studyLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Desired Level of Study *</FormLabel>
                    <FormControl>
                      <RadioGroup 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                        className="flex flex-wrap gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="bachelors" id="level-bachelors" />
                          <label htmlFor="level-bachelors">Bachelor's</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="masters" id="level-masters" />
                          <label htmlFor="level-masters">Master's</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phd" id="level-phd" />
                          <label htmlFor="level-phd">PhD</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="language" id="level-language" />
                          <label htmlFor="level-language">Language Course</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fieldOfStudy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Field of Study *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Medicine, Business, IT" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="preferredUniversity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred University (optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Medical University of Sofia" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="intakePeriod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Intake Period *</FormLabel>
                    <FormControl>
                      <RadioGroup 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                        className="flex flex-wrap gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="september" id="intake-september" />
                          <label htmlFor="intake-september">September</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="february" id="intake-february" />
                          <label htmlFor="intake-february">February</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="intake-other" />
                          <label htmlFor="intake-other">Other</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {form.watch("intakePeriod") === "other" && (
                <FormField
                  control={form.control}
                  name="otherIntakePeriod"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Specify Other Intake Period</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Summer term, January" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>
            
            {/* Academic Background Section */}
            <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">3. Academic Background</h2>
              <p className="text-gray-600">Start with most recent qualification</p>
              
              {academicEntries.map((entry, index) => (
                <div key={entry.id} className="p-4 border rounded-md relative">
                  {academicEntries.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeAcademicEntry(entry.id)}
                      className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  )}
                  <h3 className="font-semibold mb-4">Qualification {index + 1}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Qualification</label>
                      <Input 
                        placeholder="e.g. Bachelor's Degree, A-levels" 
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Institution Name</label>
                      <Input 
                        placeholder="e.g. University of Zimbabwe" 
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Country</label>
                      <Input 
                        placeholder="e.g. Zimbabwe" 
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Year Completed</label>
                      <Input 
                        placeholder="e.g. 2022" 
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Result/Grade</label>
                      <Input 
                        placeholder="e.g. 2.1, B, 75%" 
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              <Button
                type="button"
                variant="outline"
                onClick={addAcademicEntry}
                className="mt-2"
              >
                Add Another Qualification
              </Button>
              
              <div className="mt-4 text-gray-600 italic">
                <p>* You will need to attach copies of certificates and transcripts after submitting this form.</p>
              </div>
            </div>
            
            {/* English Language Proficiency Section */}
            <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">4. English Language Proficiency</h2>
              
              <FormField
                control={form.control}
                name="hasEnglishCertificate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Do you have an English Certificate? *</FormLabel>
                    <FormControl>
                      <RadioGroup 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                        className="flex space-x-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="english-cert-yes" />
                          <label htmlFor="english-cert-yes">Yes</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="english-cert-no" />
                          <label htmlFor="english-cert-no">No</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {form.watch("hasEnglishCertificate") === "yes" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-7">
                  <FormField
                    control={form.control}
                    name="englishCertificateType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Certificate Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ielts">IELTS</SelectItem>
                            <SelectItem value="toefl">TOEFL</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {form.watch("englishCertificateType") === "other" && (
                    <FormField
                      control={form.control}
                      name="otherCertificateType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Other Certificate</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Cambridge English" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  
                  <FormField
                    control={form.control}
                    name="englishScore"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Score</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. 6.5, 90" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </div>
            
            {/* Travel History Section */}
            <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">5. Travel History</h2>
              
              <FormField
                control={form.control}
                name="traveledAbroad"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox 
                        checked={field.value} 
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Have you ever traveled outside Zimbabwe?
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              
              {form.watch("traveledAbroad") && (
                <FormField
                  control={form.control}
                  name="countriesVisited"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>List countries visited</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. South Africa, Botswana, UK" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              
              <FormField
                control={form.control}
                name="visaRejections"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Visa rejections (if any)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. UK student visa 2022, or 'None'" {...field} />
                    </FormControl>
                    <FormDescription>
                      Please be honest - this helps us prepare better for your application
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            {/* Financial Information Section */}
            <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">6. Financial Information</h2>
              
              <FormField
                control={form.control}
                name="sponsor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Who will sponsor your studies? *</FormLabel>
                    <FormControl>
                      <RadioGroup 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                        className="flex flex-wrap gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="self" id="sponsor-self" />
                          <label htmlFor="sponsor-self">Self</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="parent" id="sponsor-parent" />
                          <label htmlFor="sponsor-parent">Parent/Guardian</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="company" id="sponsor-company" />
                          <label htmlFor="sponsor-company">Sponsor/Company</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estimated annual tuition & living budget (USD) *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 10000" {...field} />
                    </FormControl>
                    <FormDescription>
                      Please note: Bulgaria typically requires $5,000 - $15,000 per year depending on program
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="hasFinancialProof"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox 
                        checked={field.value} 
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Do you have proof of financial support? (bank statements, sponsor letter)
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            
            {/* Accommodation Preference Section */}
            <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">7. Accommodation Preference</h2>
              
              <FormField
                control={form.control}
                name="accommodationPreference"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Accommodation Preference *</FormLabel>
                    <FormControl>
                      <RadioGroup 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="dormitory" id="accommodation-dormitory" />
                          <label htmlFor="accommodation-dormitory">University Dormitory ($200/month)</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="apartment" id="accommodation-apartment" />
                          <label htmlFor="accommodation-apartment">Private Apartment ($350-500/month)</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="self" id="accommodation-self" />
                          <label htmlFor="accommodation-self">Will arrange myself</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormDescription>
                      We can assist with all accommodation arrangements
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            {/* Declaration Section */}
            <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">8. Declaration</h2>
              
              <FormField
                control={form.control}
                name="declaration"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox 
                        checked={field.value} 
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-medium">
                        I confirm that the information provided is accurate and complete to the best of my knowledge.
                        I understand that false information may lead to application rejection.
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              
              <div className="border-t pt-4 mt-4">
                <p className="font-medium">Signature: Electronic signature via form submission</p>
                <p className="font-medium">Date: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
            
            {/* Document Checklist Section */}
            <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">9. Document Checklist</h2>
              <p className="text-gray-600 mb-4">Please indicate which documents you currently have available:</p>
              
              <div className="space-y-3">
                <FormField
                  control={form.control}
                  name="documents.passport"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Passport Copy</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="documents.certificates"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>O/A-Level, Diploma or Degree Certificates</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="documents.transcripts"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Academic Transcripts</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="documents.englishCertificate"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>English Certificate (if available)</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="documents.photo"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Passport-size Photo</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="documents.birthCertificate"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Birth Certificate</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="documents.referenceLetter"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Reference Letter (if required)</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="documents.motivationLetter"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Motivation Letter (if required)</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="documents.policeClearance"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Police Clearance (upon visa application)</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="mt-4 text-gray-600 italic">
                <p>* You will need to provide these documents during the application process.</p>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="flex justify-center">
              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting} 
                className="px-8 py-6 text-lg bg-primary hover:bg-primary/90 transition-colors"
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    Submit Application <Check className="ml-2" />
                  </>
                )}
              </Button>
            </div>
            
            <p className="text-center text-gray-500 text-sm">
              By submitting this form, you agree to our Terms of Service and Privacy Policy.
              Your data will be processed in accordance with relevant data protection laws.
            </p>
          </form>
        </Form>
      </div>
      
      <Footer />
    </div>
  );
};

export default ApplyNow;
