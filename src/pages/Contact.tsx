
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
    },
    {
      text: "The affordability of studying in Bulgaria compared to UK universities is incredible. Highly recommend!",
      author: "Takudzwa P."
    },
    {
      text: "Pharmacy studies in Warsaw, Poland - couldn't be happier with the quality of education and support received.",
      author: "Nyasha T."
    },
    {
      text: "Engineering in Budapest has exceeded all my expectations. The European experience is priceless!",
      author: "Farai L."
    },
    {
      text: "Medical studies in Varna, Bulgaria - amazing professors, great facilities, and affordable tuition fees!",
      author: "Tariro C."
    },
    {
      text: "Business Administration in Berlin has opened global opportunities. Forever grateful to the team!",
      author: "Munyaradzi D."
    },
    {
      text: "Studying veterinary medicine in Slovakia was made possible by GoToEurope.co.zw's excellent guidance.",
      author: "Chiedza M."
    },
    {
      text: "Computer Science in Krakow, Poland - the perfect blend of quality education and European culture!",
      author: "Trust Z."
    },
    {
      text: "Architecture studies in Prague have been transformative. The application process was seamless!",
      author: "Anesu B."
    },
    {
      text: "Nursing in Romania - excellent training and much more affordable than studying in South Africa.",
      author: "Kumbirai G."
    },
    {
      text: "Law studies in Hungary have given me international perspective. Thank you for making it possible!",
      author: "Tadiwanashe F."
    },
    {
      text: "Studying psychology in Czech Republic - the multicultural environment is incredible for personal growth.",
      author: "Shamiso H."
    },
    {
      text: "Medicine in Stara Zagora, Bulgaria - high-quality education at a fraction of UK costs!",
      author: "Tawanda J."
    },
    {
      text: "Biomedical Engineering in Vienna - cutting-edge research opportunities and amazing student life!",
      author: "Rejoice V."
    },
    {
      text: "Dentistry in Plovdiv has been an amazing journey. The support from day one was exceptional!",
      author: "Panashe W."
    },
    {
      text: "Economics in Warsaw - excellent professors and great job prospects in the European market!",
      author: "Lloyd A."
    },
    {
      text: "Pharmacy in Prague offers world-class education. The team made the transition so smooth!",
      author: "Charmaine O."
    },
    {
      text: "Studying physiotherapy in Slovakia - practical training is excellent and much more affordable!",
      author: "Tinashe Q."
    },
    {
      text: "International Business in Budapest - networking opportunities across Europe are fantastic!",
      author: "Vimbai E."
    },
    {
      text: "Medical studies in Romania have exceeded expectations. European standard education at great value!",
      author: "Simbarashe U."
    },
    {
      text: "Computer Engineering in Poland - state-of-the-art labs and amazing research opportunities!",
      author: "Chengetai I."
    },
    {
      text: "Studying optometry in Bulgaria - practical experience and theoretical knowledge perfectly balanced!",
      author: "Tanaka Y."
    },
    {
      text: "Marketing in Vienna has opened doors to multinational companies. Forever grateful!",
      author: "Ngoni X."
    },
    {
      text: "Civil Engineering in Prague - working on real European infrastructure projects as a student!",
      author: "Chipo L."
    },
    {
      text: "Medicine in Sofia - the clinical exposure and European healthcare system experience is invaluable!",
      author: "Artwell R."
    },
    {
      text: "Finance studies in Hungary - internship opportunities with major European banks are amazing!",
      author: "Yeukai N."
    },
    {
      text: "Radiology studies in Romania - latest technology and equipment for hands-on learning!",
      author: "Tongai M."
    },
    {
      text: "Information Technology in Poland - startup ecosystem and tech opportunities are incredible!",
      author: "Ashley S."
    },
    {
      text: "Studying agriculture in Slovakia - sustainable farming techniques and EU agricultural policies!",
      author: "Memory T."
    },
    {
      text: "Graphic Design in Prague - European art scene exposure has elevated my creative skills!",
      author: "Perseverance K."
    },
    {
      text: "Mechanical Engineering in Vienna - industry connections and internships with leading companies!",
      author: "Justice P."
    },
    {
      text: "Studying journalism in Budapest - covering European politics and international affairs firsthand!",
      author: "Charity B."
    },
    {
      text: "Environmental Science in Poland - research on climate change solutions across European countries!",
      author: "Mathew D."
    },
    {
      text: "Hotel Management in Bulgaria - tourism industry exposure across the Balkans is fantastic!",
      author: "Privilege C."
    },
    {
      text: "Electrical Engineering in Czech Republic - renewable energy projects and smart city initiatives!",
      author: "Washington F."
    },
    {
      text: "Social Work in Romania - understanding European social systems and multicultural communities!",
      author: "Tsitsi G."
    },
    {
      text: "Sports Science in Hungary - working with Olympic training facilities and professional athletes!",
      author: "Brighton H."
    },
    {
      text: "Food Technology in Slovakia - European food safety standards and innovative preservation methods!",
      author: "Netsai J."
    },
    {
      text: "Fashion Design in Vienna - access to European fashion weeks and luxury brand workshops!",
      author: "Stephanie L."
    },
    {
      text: "Mining Engineering in Poland - modern extraction techniques and environmental sustainability focus!",
      author: "Courage A."
    },
    {
      text: "International Relations in Prague - EU institutions internships and diplomatic career opportunities!",
      author: "Michelle E."
    },
    {
      text: "Biomedical Sciences in Bulgaria - research collaborations with top European medical institutions!",
      author: "Mudiwa O."
    },
    {
      text: "Renewable Energy Engineering in Germany - cutting-edge green technology and climate solutions!",
      author: "Progress Q."
    },
    {
      text: "Digital Marketing in Hungary - e-commerce boom and social media strategy development!",
      author: "Belinda I."
    },
    {
      text: "Chemical Engineering in Romania - pharmaceutical industry exposure and process optimization!",
      author: "Kudakwashe U."
    },
    {
      text: "Public Health in Poland - healthcare policy development and pandemic response strategies!",
      author: "Faith Y."
    },
    {
      text: "Data Science in Czech Republic - AI development and big data analytics in European companies!",
      author: "Godfrey V."
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
