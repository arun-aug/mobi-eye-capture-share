import { MapPin, Clock, Palette, Share2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: MapPin,
    title: "Location Tagging",
    description: "Automatically add GPS coordinates and location names to every photo and video you capture.",
  },
  {
    icon: Clock,
    title: "Date & Time Stamps",
    description: "Never forget when a moment happened. Every capture includes precise date and time information.",
  },
  {
    icon: Palette,
    title: "Customizable Themes",
    description: "Choose from multiple stylish themes to personalize how your stamps appear on your media.",
  },
  {
    icon: Share2,
    title: "Instant Sharing",
    description: "Share your location-stamped photos directly to social media and messaging apps with one tap.",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to capture, customize, and share your moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;