import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  Users, 
  Lightbulb, 
  BookOpen,
  Heart,
  Globe,
  ArrowRight,
  Linkedin
} from "lucide-react";

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Co-Founder & CEO",
    bio: "Former Director of Cardiology Research at Stanford. 15+ years in cardiovascular diagnostics and AI applications in healthcare.",
    image: null
  },
  {
    name: "Raj Patel",
    role: "Co-Founder & CTO",
    bio: "Ex-Google Health engineer. Deep expertise in machine learning, medical imaging, and scalable health platforms.",
    image: null
  },
  {
    name: "Dr. Michael Torres",
    role: "Chief Medical Officer",
    bio: "Board-certified cardiologist with specialization in preventive cardiology and sports medicine.",
    image: null
  },
  {
    name: "Emily Zhang",
    role: "VP of Product",
    bio: "Previously led product at Fitbit Health Solutions. Expert in consumer health technology and user experience.",
    image: null
  }
];

const workWith = [
  { icon: Building2, label: "Hospitals & Health Systems" },
  { icon: Heart, label: "Diagnostic Centers" },
  { icon: Users, label: "Gyms & Fitness Centers" },
  { icon: Globe, label: "Digital Health Platforms" }
];

const drivesUs = [
  {
    icon: Lightbulb,
    title: "Curiosity",
    description: "We're constantly exploring new ways to apply AI and data science to cardiovascular health challenges."
  },
  {
    icon: BookOpen,
    title: "Scientific Rigor",
    description: "Every algorithm we build is grounded in peer-reviewed research and validated with clinical data."
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Making high-end diagnostics accessible for people in developing as well as developed regions."
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        <div className="container-width relative z-10 px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              <Users className="h-4 w-4 mr-2" />
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About TREADGRAM
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              TREADGRAM was born at the intersection of biomedical engineering, cardiology, 
              and data science. We're focused on turning treadmill tests and biomarker data 
              into actionable intelligence that saves lives and improves healthcare operations.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-800/50">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Work With</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building partnerships across the healthcare and fitness ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {workWith.map((item) => (
              <Card key={item.label} className="glass-card card-hover text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/20 flex items-center justify-center">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <p className="font-medium text-sm">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Drives Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The values and principles that guide our work every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {drivesUs.map((item, index) => (
              <div key={item.title} className="text-center space-y-4">
                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${index % 2 === 0 ? 'bg-primary/20 glow-blue' : 'bg-accent/20 glow-red'}`}>
                  <item.icon className={`h-8 w-8 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-800/50">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Research & Innovation</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Continuous R&D in cardiovascular risk scoring, CPET analytics, and revenue cycle optimization.
            </p>
          </div>
          
          <Card className="glass-card">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-primary">50+</p>
                  <p className="text-muted-foreground mt-2">Research Publications</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-accent">15</p>
                  <p className="text-muted-foreground mt-2">Patents Filed</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-primary">8</p>
                  <p className="text-muted-foreground mt-2">Academic Partners</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Founding Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A diverse team of clinicians, engineers, and entrepreneurs passionate about transforming healthcare.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="glass-card card-hover">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-primary text-sm">{member.role}</p>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  <a href="#" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-800/50">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Join Our Team?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals who share our passion for improving healthcare through technology.
          </p>
          <Button size="lg" className="btn-primary">
            View Open Positions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
