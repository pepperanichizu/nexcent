import Navbar from "@/components/customs/Navbar";
import Footer from "@/components/customs/Footer";
import HeroSection from "@/components/sections/HeroSection";
import UnseenSection from "@/components/sections/UnseenSection";
import HelpLocal from "@/components/sections/HelpLocal";
import ManageCommunity from "@/components/sections/ManageCommunity";
import OurClient from "@/components/sections/OurClient";
import HowToDesign from "@/components/sections/HowToDesign";
import Testimony from "@/components/sections/Testimony";
import CaringIsMarketing from "@/components/sections/CaringIsMarketing";
import Demo from "@/components/sections/Demo";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurClient />
      <ManageCommunity />
      <UnseenSection />
      <HelpLocal />
      <HowToDesign />
      <Testimony />
      <CaringIsMarketing />
      <Demo />
      <Footer />
    </>
  );
}

export default App;
