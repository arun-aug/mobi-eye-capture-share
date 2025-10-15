import { Facebook, Instagram, MessageCircle, Twitter } from "lucide-react";

const platforms = [
  { name: "Facebook", icon: Facebook, color: "text-[#1877F2]", url: "https://www.facebook.com/mobieye" },
  { name: "Instagram", icon: Instagram, color: "text-[#E4405F]", url: "#" },
  { name: "WhatsApp", icon: MessageCircle, color: "text-[#25D366]", url: "https://wa.me/919350751751" },
  { name: "Twitter", icon: Twitter, color: "text-[#1DA1F2]", url: "#" },
];

const SocialShare = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Share Everywhere
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Connect with friends and family by sharing your location-stamped memories 
            across all your favorite social platforms and messengers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group animate-fade-in hover-scale block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card border-2 border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 hover:shadow-xl">
                <platform.icon className={`h-16 w-16 mx-auto mb-4 ${platform.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="font-semibold text-foreground">{platform.name}</h3>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-12 text-muted-foreground">
          ...and many more messaging and social apps
        </p>
      </div>
    </section>
  );
};

export default SocialShare;