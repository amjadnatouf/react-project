import NavbarComponent from "../components/navbar/NavbarComponent";
import HeroSection from "../components/hero/HeroSection";
import Skills from "../components/skills/Skills";
import TabsSection from "../components/tabs/TabsSection";
import NewsLetters from "../components/newsLetters/NewsLetters";
import Footer from "../components/footer/Footer";

const Home = () => (
  <div>
    <NavbarComponent />
    <HeroSection />
    <Skills />
    <TabsSection />
    <NewsLetters />
    <Footer />
  </div>
);

export default Home;
