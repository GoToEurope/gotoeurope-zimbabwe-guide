
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative text-white py-20 px-4 overflow-hidden">
      {/* Image Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(/lovable-uploads/e77b8160-4a16-4c34-be2b-c2cb3522011c.png)'
        }}
      ></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-blue-600/70 to-blue-800/80 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto max-w-6xl relative z-20">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Welcome to <span className="text-yellow-300">GoToEurope.co.zw</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Your trusted Zimbabwean partner in accessing affordable and high-quality education across Europe. 
            Our mission is to guide you through every step of studying and working in the EU, starting with leading universities in Bulgaria.
          </p>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Let us help you unlock new opportunities for a successful international career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3">
              Explore Universities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:text-blue-900 px-8 py-3 bg-lime-600 hover:bg-lime-500">
              Book Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
