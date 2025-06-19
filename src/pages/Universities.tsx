
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Universities = () => {
  const universities = [
    { name: "Sofia University 'St. Kliment Ohridski'", url: "https://www.uni-sofia.bg/" },
    { name: "Medical University – Sofia", url: "https://www.mu-sofia.bg/" },
    { name: "Technical University of Sofia", url: "https://www.tu-sofia.bg/" },
    { name: "University of National and World Economy (UNWE)", url: "https://www.unwe.bg/" },
    { name: "American University in Bulgaria (AUBG)", url: "https://www.aubg.edu/" },
    { name: "Medical University – Plovdiv", url: "https://www.mu-plovdiv.bg/" },
    { name: "Medical University – Varna", url: "https://www.mu-varna.bg/" },
    { name: "Plovdiv University 'Paisii Hilendarski'", url: "https://uni-plovdiv.bg/" },
    { name: "Varna University of Economics", url: "https://www.ue-varna.bg/" },
    { name: "South-West University 'Neofit Rilski'", url: "https://www.swu.bg/" },
    { name: "University of Architecture, Civil Engineering and Geodesy (UACEG)", url: "https://www.uacg.bg/" },
    { name: "University of Chemical Technology and Metallurgy (UCTM)", url: "https://uctm.edu/" },
    { name: "Agricultural University – Plovdiv", url: "https://www.au-plovdiv.bg/" },
    { name: "University of Forestry – Sofia", url: "https://www.ltu.bg/" },
    { name: "University of Food Technologies – Plovdiv", url: "https://uft-plovdiv.bg/" },
    { name: "New Bulgarian University (NBU)", url: "https://www.nbu.bg/" },
    { name: "Burgas Free University (BFU)", url: "https://www.bfu.bg/" },
    { name: "University of Ruse 'Angel Kanchev'", url: "https://www.uni-ruse.bg/" },
    { name: "Naval Academy 'Nikola Vaptsarov'", url: "https://www.naval-acad.bg/" },
    { name: "Trakia University – Stara Zagora", url: "https://www.uni-sz.bg/" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Background */}
      <section 
        className="relative py-32 px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2000&auto=format&fit=crop')`
        }}
      >
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Top Universities in Bulgaria
          </h1>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            GoToEurope.co.zw proudly partners with Bulgaria's top 20 universities. 
            Discover world-class education opportunities that will shape your future.
          </p>
        </div>
      </section>
      
      {/* Universities Grid Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Partner Universities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Click on each university below to learn more about their programs, admission process, tuition fees, and student life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((university, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">{university.name}</h3>
                  <a 
                    href={university.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-primary hover:text-blue-700 font-medium"
                  >
                    Visit Website
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Universities;
