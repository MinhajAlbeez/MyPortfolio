
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

const Index = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Index;
