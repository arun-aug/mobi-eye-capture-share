import appPreview from "@/assets/app-preview.jpg";

const AppShowcase = () => {
  return (
    <section className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              See It In Action
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Mobi Eye makes it effortless to capture and share your experiences with context. 
              Every photo tells a complete story with location and time automatically embedded.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Capture</h3>
                  <p className="text-muted-foreground">Take photos or record videos with your camera</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-secondary-foreground font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Customize</h3>
                  <p className="text-muted-foreground">Choose your preferred theme and style</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Share</h3>
                  <p className="text-muted-foreground">Post directly to your favorite platforms</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10">
              <img 
                src={appPreview} 
                alt="Mobi Eye App Interface" 
                className="rounded-3xl shadow-2xl w-full max-w-md mx-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl -z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;