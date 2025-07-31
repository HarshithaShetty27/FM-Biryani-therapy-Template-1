import Image from "next/image";
import { ContactCTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { MenuHighlights } from "./components/Menu";
import { OutletInfo } from "./components/Outlet";

export default function Home() {
  return (
    <div>
      <Hero/>
      <MenuHighlights/>
      <OutletInfo/>
      <ContactCTA/>
      <Footer/>
    </div>
  );
}
