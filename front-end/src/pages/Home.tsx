import Hero from "../components/Home/Hero";
import Featured from "../components/Home/Featured";
import HowItWorks from "../components/Home/HowItWorks";
import FAQ from "../components/Home/FAQ";
import CTA from "../components/Home/CTA";
import Footer from "../components/Home/Footer";

function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

export default Home;