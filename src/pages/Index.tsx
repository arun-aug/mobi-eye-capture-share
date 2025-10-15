import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AppShowcase from "@/components/AppShowcase";
import SocialShare from "@/components/SocialShare";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <AppShowcase />
      <SocialShare />
      <Footer />
    </main>
  );
};

export default Index;