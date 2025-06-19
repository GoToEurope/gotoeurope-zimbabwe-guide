import { Phone, Mail, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const testimonials = [
    {
      text: "Thanks to GoToEurope.co.zw, I'm now studying Medicine at Medical University in Plovdiv. Their service was fast, personal, and life-changing!",
      author: "Tafadzwa M."
    },
    {
      text: "I never thought I could afford medical school in Europe. GoToEurope.co.zw made my dream come true at Sofia University!",
      author: "Chipo R."
    },
    {
      text: "Studying Engineering in Prague has been amazing. The team guided me through every step of the application process.",
      author: "Tendai K."
    },
    {
      text: "Business studies in Vienna opened doors I never imagined. Thank you for believing in my potential!",
      author: "Rutendo S."
    },
    {
      text: "From Harare to Bucharest - studying dentistry in Romania has been the best decision of my life.",
      author: "Blessing N."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">Ready to start your European education journey? Get in touch today!</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Address</h3>
                <p className="text-gray-600">31 Bath Road, Harare, Zimbabwe</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">WhatsApp</h3>
                <p className="text-gray-600">+263 719118661</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Mail className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">info@GoToEurope.co.zw</p>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">What Our Students Say</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-l-primary">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-sm italic text-gray-700 mb-3">
                      "{testimonial.text}"
                    </blockquote>
                    <p className="font-semibold text-gray-900 text-sm">– {testimonial.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">Follow us on social media:</p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                Facebook
              </Button>
              <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                Instagram
              </Button>
              <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white">
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
