import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/hero/Hero";
import EcosystemGrid from "@/components/ecosystem/EcosystemGrid";
import Marketplace from "@/components/marketplace/Marketplace";
import DashboardWidget from "@/components/dashboard/DashboardWidget";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EcosystemGrid />
        <Marketplace />
        <DashboardWidget />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
