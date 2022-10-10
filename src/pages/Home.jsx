import React from "react";
import { useGlobalContext } from "../store/GlobalContext";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Clients from "../components/Clients";

export default function Home() {
  const { isLoggedIn } = useGlobalContext();

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <HeroSection />
      <Clients />
      <Footer />
    </>
  );
}
