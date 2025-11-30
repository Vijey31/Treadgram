import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import RcmAi from "@/pages/RcmAi";
import SmartBiomarkers from "@/pages/SmartBiomarkers";
import FusionClinic from "@/pages/FusionClinic";
import SmartHospital from "@/pages/SmartHospital";
import Vision from "@/pages/Vision";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rcm-ai" element={<RcmAi />} />
            <Route path="/smart-biomarkers" element={<SmartBiomarkers />} />
            <Route path="/fusion-clinic" element={<FusionClinic />} />
            <Route path="/smart-hospital" element={<SmartHospital />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </TooltipProvider>
  );
}

export default App;
