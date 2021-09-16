import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

export default function Home({ loggedIn }) {
  return (
    <>
      <Navbar loggedIn={loggedIn} />
      <hr />
      <HeroSection />
    </>
  );
}
