
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            GoToEurope.co.zw
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
            <Link to="/universities" className="text-gray-700 hover:text-primary font-medium">Universities</Link>
            <Link to="/services" className="text-gray-700 hover:text-primary font-medium">Services</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-primary font-medium">Pricing</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">Contact</Link>
            <Button size="sm" className="bg-primary hover:bg-blue-700 text-white">
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
