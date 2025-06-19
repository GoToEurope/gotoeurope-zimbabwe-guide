import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Stethoscope, Wrench, Computer, Briefcase, Scale, PlaneTakeoff, BookOpen } from "lucide-react";

const ChooseYourDegree = () => {
  const degreePrograms = [
    {
      icon: <Stethoscope className="h-6 w-6" />,
      field: "Medicine",
      emoji: "🩺",
      bachelor: "MD (Medical Doctor equivalent)",
      master: "Clinical Specializations",
      doctorate: "PhD in Medical Sciences",
      universities: [
        "Medical University – Sofia",
        "Medical University – Varna", 
        "Medical University – Pleven",
        "Trakia University"
      ]
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      field: "Dentistry",
      emoji: "🦷",
      bachelor: "DDS (Dental Surgery)",
      master: "Orthodontics, Prosthodontics",
      doctorate: "Dental Sciences",
      universities: ["Medical University – Varna"]
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      field: "Pharmacy",
      emoji: "💊",
      bachelor: "BPharm",
      master: "Clinical Pharmacy, Pharmacology",
      doctorate: "Pharmaceutical Sciences",
      universities: ["Medical University – Varna"]
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      field: "Nursing",
      emoji: "🧑‍⚕️",
      bachelor: "BSc in Nursing",
      master: "Advanced Clinical Practice",
      doctorate: "PhD in Health Sciences",
      universities: ["Medical University – Pleven"]
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      field: "Engineering",
      emoji: "🏗️",
      bachelor: "BEng (Mechanical, Electrical, Civil, etc.)",
      master: "MEng, Renewable Energies, Civil Planning",
      doctorate: "PhD in Engineering",
      universities: [
        "Technical University – Sofia",
        "Technical University – Varna",
        "University of Ruse",
        "Trakia University",
        "European Polytechnical University"
      ]
    },
    {
      icon: <Computer className="h-6 w-6" />,
      field: "Computer Science / IT",
      emoji: "💻",
      bachelor: "BSc in Computer Science, Informatics",
      master: "Software Engineering, Cybersecurity",
      doctorate: "Computer Science",
      universities: [
        "New Bulgarian University",
        "University of Economics – Varna",
        "European Polytechnical University",
        "Varna Free University"
      ]
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      field: "Business / Management",
      emoji: "💼",
      bachelor: "BBA or BSc in Business Admin",
      master: "MBA, MSc in Marketing, Strategy",
      doctorate: "Business Administration",
      universities: [
        "New Bulgarian University",
        "American University in Bulgaria",
        "University of National and World Economy",
        "University of Economics – Varna",
        "Varna Free University"
      ]
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      field: "Economics",
      emoji: "📊",
      bachelor: "BSc in Economics",
      master: "Economic Policy, Finance",
      doctorate: "Economics",
      universities: [
        "University of National and World Economy",
        "University of Economics – Varna"
      ]
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      field: "Finance",
      emoji: "💰",
      bachelor: "Finance & Accounting",
      master: "Investment, Banking",
      doctorate: "Financial Economics",
      universities: [
        "University of National and World Economy",
        "University of Economics – Varna"
      ]
    },
    {
      icon: <Scale className="h-6 w-6" />,
      field: "Law",
      emoji: "⚖️",
      bachelor: "LLB",
      master: "LLM (EU, Corporate Law)",
      doctorate: "PhD in Legal Studies",
      universities: ["Varna Free University"]
    },
    {
      icon: <PlaneTakeoff className="h-6 w-6" />,
      field: "Tourism",
      emoji: "🧳",
      bachelor: "Tourism & Hospitality Management",
      master: "Sustainable Tourism, Event Management",
      doctorate: "Tourism Development",
      universities: ["Varna Free University"]
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      field: "Education",
      emoji: "📚",
      bachelor: "BEd, Pedagogy",
      master: "Educational Leadership",
      doctorate: "Instructional Design, Curriculum Studies",
      universities: [
        "Veliko Tarnovo University",
        "South-West University \"Neofit Rilski\"",
        "Konstantin Preslavsky University of Shumen"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Background */}
      <section 
        className="relative py-32 px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop')`
        }}
      >
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 flex items-center justify-center gap-3">
            <GraduationCap className="h-12 w-12 text-yellow-400" />
            YES, YOU!
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-4">
            Choose Your Degree
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Your future starts here. Explore comprehensive study options in Bulgaria across Bachelor's, Master's, and Doctorate levels 
            at top Bulgarian universities. The opportunity is calling you!
          </p>
        </div>
      </section>
      
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {degreePrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <span className="text-2xl">{program.emoji}</span>
                    <span>{program.field}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Degree Levels */}
                  <div className="space-y-4">
                    <div>
                      <Badge variant="secondary" className="mb-2">Bachelor's</Badge>
                      <p className="text-sm text-gray-700">{program.bachelor}</p>
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">Master's</Badge>
                      <p className="text-sm text-gray-700">{program.master}</p>
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">Doctorate</Badge>
                      <p className="text-sm text-gray-700">{program.doctorate}</p>
                    </div>
                  </div>
                  
                  {/* Universities */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      Universities
                    </h4>
                    <ul className="space-y-2">
                      {program.universities.map((university, uniIndex) => (
                        <li key={uniIndex} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {university}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Found your ideal program? Let GoToEurope.co.zw guide you through the application process 
                and make your dream of studying in Bulgaria a reality.
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

export default ChooseYourDegree;
