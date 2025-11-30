import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-border/30">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-primary">TREAD</span>
                <span className="text-accent">GRAM</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI-Powered Cardiovascular & Revenue Intelligence for hospitals, clinics, and fitness centers.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/rcm-ai" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  RCM AI
                </Link>
              </li>
              <li>
                <Link to="/smart-biomarkers" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  SmartBiomarkers
                </Link>
              </li>
              <li>
                <Link to="/fusion-clinic" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  FusionClinic
                </Link>
              </li>
              <li>
                <Link to="/smart-hospital" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  SmartHospital
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/vision" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Vision
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-muted-foreground text-sm">
                <Mail size={16} className="text-primary" />
                <span>hello@treadgram.com</span>
              </li>
              <li className="flex items-start space-x-3 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span>Healthcare Innovation Hub<br />San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} TREADGRAM. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
