
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            GoToEurope.co.zw
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
            <Link to="/universities" className="text-gray-700 hover:text-primary font-medium">Universities</Link>
            <Link to="/degrees" className="text-gray-700 hover:text-primary font-medium">Degrees</Link>
            <Link to="/services" className="text-gray-700 hover:text-primary font-medium">Services</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-primary font-medium">Pricing</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">Contact</Link>
            <Link to="/apply">
              <Button size="sm" className="bg-primary hover:bg-blue-700 text-white">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <Link to="/" onClick={handleLinkClick} className="text-2xl font-bold text-primary">
                      GoToEurope.co.zw
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-6 mt-8">
                  <Link 
                    to="/" 
                    onClick={handleLinkClick}
                    className="text-lg text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/universities" 
                    onClick={handleLinkClick}
                    className="text-lg text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100"
                  >
                    Universities
                  </Link>
                  <Link 
                    to="/degrees" 
                    onClick={handleLinkClick}
                    className="text-lg text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100"
                  >
                    Degrees
                  </Link>
                  <Link 
                    to="/services" 
                    onClick={handleLinkClick}
                    className="text-lg text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100"
                  >
                    Services
                  </Link>
                  <Link 
                    to="/pricing" 
                    onClick={handleLinkClick}
                    className="text-lg text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100"
                  >
                    Pricing
                  </Link>
                  <Link 
                    to="/contact" 
                    onClick={handleLinkClick}
                    className="text-lg text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100"
                  >
                    Contact
                  </Link>
                  <Link to="/apply" onClick={handleLinkClick} className="mt-4">
                    <Button className="w-full bg-primary hover:bg-blue-700 text-white">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
