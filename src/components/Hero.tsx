import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import logo from "@/assets/mobi-eye-logo.png";
import heroImage from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 via-foreground/80 to-foreground/90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <div className="animate-fade-in">
          <img 
            src={logo} 
            alt="Mobi Eye Logo" 
            className="w-32 h-32 mx-auto mb-8 drop-shadow-2xl animate-scale-in"
          />
          <h1 className="mb-6 text-5xl md:text-7xl font-bold text-background">
            Mobi Eye
          </h1>
          <p className="mb-8 text-xl md:text-2xl text-background/90 max-w-3xl mx-auto leading-relaxed">
            Capture stunning photos and videos with automatic location, date, and time stamps. 
            Customize with beautiful themes and share instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105 text-lg px-8 py-6"
              asChild
            >
              <a href="https://play.google.com/store/apps/details?id=com.demo.mobieye" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download for Android
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-background/10 border-background text-background hover:bg-background hover:text-foreground backdrop-blur-sm text-lg px-8 py-6 transition-all hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-background rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;