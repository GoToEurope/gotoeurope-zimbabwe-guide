
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/263719118661", "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
      size="lg"
    >
      <Phone className="h-6 w-6" />
      <span className="sr-only">Contact us on WhatsApp</span>
    </Button>
  );
};

export default WhatsAppButton;
