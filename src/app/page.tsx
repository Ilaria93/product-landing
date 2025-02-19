"use client";
import "../app/globals.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Pricing from "@/components/pricing";
import BlogSection from "@/components/blog-section";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";
import FAQ from "@/components/faq";
import logo from "../assets/images/logo.png";
import Footer from "@/components/footer";
import Features from "@/components/feature-section";
import CTASection from "@/components/cta";

const sections = [
  { id: "home", label: "Home" },
  { id: "how-it-works", label: "How It Works" },
  { id: "features", label: "Features" },
  { id: "pricing", label: "Pricing" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" },
];

export default function Home() {
  const [currentSection, setCurrentSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-b from-white to-[#b7e5ff] text-black min-h-screen font-sans">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-4 fixed w-full top-0 shadow-lg shadow-[#1299e6]/5 z-50"
      >
        <div className="max-w-[90%] mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src={logo}
              alt="Logo"
              className="w-fit h-16 mr-2 rounded-2xl"
            />
            <h1 className="text-xl font-bold text-black cursor-pointer text-red-500">
              SN24
            </h1>
          </div>
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-4 ">
              {sections.map((section) => (
                <NavigationMenuItem key={section.id}>
                  <button
                    className={`flex items-center gap-2 bg-transparent font-semibold text-md ${currentSection === section.id ? "text-[#1299e6]" : "text-black"}`}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.label}
                  </button>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Button className="border-4 border-[#1299e6] bg-transparent hover:bg-[#1299e6] hover:text-white text-black px-6 py-4 rounded-xl text-2xl shadow-sm shadow-[#1299e6]/100 font-semibold h-fit">
                  Prova Ora!
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </motion.nav>
      {/* Sections */}
      {sections.map((section) => (
        <motion.section
          key={section.id}
          id={section.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-5 py-20 mx-auto text-center"
        >
          {section.id === "home" && <HeroSection />}
          {section.id === "features" && <Features />}
          {section.id === "how-it-works" && <HowItWorks />}
          {section.id === "faq" && <FAQ />}
          {section.id === "pricing" && <Pricing />}
          {section.id === "testimonials" && <BlogSection />}
        </motion.section>
      ))}
      <CTASection />
      <Footer />
    </div>
  );
}
