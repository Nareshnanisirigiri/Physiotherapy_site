// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, IconButton, Toolbar } from "@mui/material";
import { useState, useEffect } from "react";
import { lightTheme, darkTheme } from "./theme";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import WhatsAppFloat from "./components/WhatsAppFloat"; // ✅ add this

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import TreatmentPage from "./pages/TreatmentPage";
import AboutPage from "./pages/AboutPage";
import TreatmentDetail from "./components/TreatmentDetail";
import AboutTreatmentDetail from "./components/AboutTreatmentDetail";
import PhysioDetails from "./pages/PhysioDetail";
import ServiceDetails from "./pages/ServiceDetails";


import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function App() {
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show preloader for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <CssBaseline />

      {/* Preloader */}
      {loading && <Preloader />}

      {!loading && (
        <BrowserRouter>
          <Navbar />

          {/* Floating WhatsApp Icon */}
          <WhatsAppFloat />

          {/* Dark Mode Button */}
          <IconButton
            onClick={() => setDark(!dark)}
            sx={{ position: "fixed", top: 80, right: 20, zIndex: 1000 }}
          >
            <DarkModeIcon />
          </IconButton>

          {/* Spacer for fixed Navbar */}
          <Toolbar sx={{ minHeight: "90px !important" }} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/Treatment" element={<TreatmentPage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/treatment/:treatmentName" element={<TreatmentDetail />} />
            <Route path="/physio-treatment/:treatmentName" element={<AboutTreatmentDetail />} />
            <Route path="/physiotherapy/:slug" element={<PhysioDetails />} />
            <Route path="/service/:id" element={<ServiceDetails />} />




          </Routes>

          <Footer />
        </BrowserRouter>
      )}
    </ThemeProvider>
  );
}
