import { GraduationCap, Plane, Users, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "University Matching & Admission Support",
      description: "Find the perfect university match for your academic goals and career aspirations."
    },
    {
      icon: <Plane className="h-8 w-8 text-primary" />,
      title: "Visa & Migration Assistance",
      description: "Complete support through the visa application and migration process."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Pre-Departure Language & Cultural Training",
      description: "Prepare yourself for life in Europe with language and cultural orientation."
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Accommodation & Airport Pickup",
      description: "Secure housing and smooth arrival assistance in your destination country."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support in all areas of your European education journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-blue-50 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Additional Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li>• Part-Time Job Search Assistance</li>
                  <li>• Post-Study Internship Support</li>
                  <li>• EU Blue Card Pathway Guidance</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-6 w-6 text-primary" />
                  Why Choose Us?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li>• Local Zimbabwean expertise</li>
                  <li>• Partnerships with top EU universities</li>
                  <li>• End-to-end support services</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
