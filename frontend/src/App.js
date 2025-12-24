import React from "react";
import "./App.css";
import "./styles/kidzee.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import EarlyYears from "./pages/academics/EarlyYears";
import PrimaryLearning from "./pages/academics/PrimaryLearning";
import Abacus from "./pages/academics/Abacus";
import ArtDance from "./pages/academics/ArtDance";
import Campus from "./pages/infrastructure/Campus";
import Achievements from "./pages/Achievements";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import EnquiryForm from "./pages/admissions/EnquiryForm";
import AdmissionProcess from "./pages/admissions/AdmissionProcess";
import FeeStructure from "./pages/admissions/FeeStructure";
import Prospectus from "./pages/admissions/Prospectus";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics/early-years" element={<EarlyYears />} />
            <Route path="/academics/primary" element={<PrimaryLearning />} />
            <Route path="/academics/abacus" element={<Abacus />} />
            <Route path="/academics/art-dance" element={<ArtDance />} />
            <Route path="/infrastructure/campus" element={<Campus />} />
            <Route path="/infrastructure/smart-classrooms" element={<Campus />} />
            <Route path="/infrastructure/activity-labs" element={<Campus />} />
            <Route path="/infrastructure/day-boarding" element={<Campus />} />
            <Route path="/infrastructure/safety" element={<Campus />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/admissions/process" element={<AdmissionProcess />} />
            <Route path="/admissions/fee-structure" element={<FeeStructure />} />
            <Route path="/admissions/prospectus" element={<Prospectus />} />
            <Route path="/admissions/enquiry" element={<EnquiryForm />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
