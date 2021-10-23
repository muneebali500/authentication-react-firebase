import { useGlobalContext } from "../store/GlobalContext";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

export default function Home() {
  const { loggedIn } = useGlobalContext();

  return (
    <>
      <Navbar loggedIn={loggedIn} />
      <hr />
      <HeroSection />
      <Footer />
    </>
  );
}
