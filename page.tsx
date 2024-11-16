import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Body from "./components/Body";
import CoreCourses from "./components/CoreCourses";
import AdvancedCourses from "./components/AdvancedCourses";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Body />
      <CoreCourses />
      <AdvancedCourses />
      <Footer />
    </div>
  );
}
