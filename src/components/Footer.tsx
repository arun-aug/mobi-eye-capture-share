import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import logo from "@/assets/mobi-eye-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <img 
            src={logo} 
            alt="Mobi Eye Logo" 
            className="w-20 h-20 mx-auto mb-6 opacity-90"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Capturing?
          </h2>
          <p className="text-background/80 text-lg mb-8 max-w-2xl mx-auto">
            Download Mobi Eye today and never miss the context of your special moments
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105 text-lg px-8 py-6"
          >
            <Download className="mr-2 h-5 w-5" />
            Get it on Google Play
          </Button>
        </div>

        <div className="border-t border-background/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm">
              © 2024 Mobi Eye. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-background/70">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-background transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;