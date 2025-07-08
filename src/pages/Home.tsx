
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import TuitionComparisonTable from "@/components/home/TuitionComparisonTable";
import LivingCostComparisonTable from "@/components/home/LivingCostComparisonTable";
import AdvantagesGrid from "@/components/home/AdvantagesGrid";
import CostScenario from "@/components/home/CostScenario";
import WhatsAppButton from "@/components/WhatsAppButton";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <HeroSection />

      {/* Comparison Section - UK vs Bulgaria */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Bulgaria Over the UK?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Discover the incredible cost savings and unique opportunities that make Bulgaria the smarter choice for international education
            </p>
          </div>

          <TuitionComparisonTable />
          <LivingCostComparisonTable />
          <AdvantagesGrid />
          <CostScenario />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
