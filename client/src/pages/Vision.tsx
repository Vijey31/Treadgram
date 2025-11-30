import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, 
  Shield, 
  Microscope, 
  TrendingUp,
  Globe,
  Users,
  Lightbulb,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Prevent Before Treat",
    description: "Shift the healthcare paradigm from late-stage disease management to early detection and prevention. By identifying cardiovascular risks before they become critical, we save lives and reduce healthcare costs.",
    color: "primary"
  },
  {
    icon: Microscope,
    title: "Make Advanced Diagnostics Everyday",
    description: "Bring treadmill tests, biomarker analysis, and AI-powered risk assessment into daily life. Advanced cardiovascular diagnostics shouldn't be reserved for hospitals – they should be accessible everywhere.",
    color: "accent"
  },
  {
    icon: TrendingUp,
    title: "Operational Excellence in Care",
    description: "Ensure hospitals and clinics are financially healthy and operationally efficient. When healthcare organizations thrive, they can focus on what matters most – patient care.",
    color: "primary"
  }
];

const fiveYearHorizon = [
  {
    icon: Globe,
    title: "Global Partnerships",
    description: "Expand to 50+ countries with strategic healthcare and fitness industry partnerships."
  },
  {
    icon: Users,
    title: "Research Collaborations",
    description: "Partner with leading academic institutions for cutting-edge cardiovascular research."
  },
  {
    icon: Lightbulb,
    title: "Real-World Impact",
    description: "Screen 10 million people annually and prevent 100,000+ cardiovascular events."
  }
];

export default function Vision() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        <div className="container-width relative z-10 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              <Target className="h-4 w-4 mr-2" />
              Our Vision
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Building the World's Most Intelligent 
              <span className="text-gradient"> Cardiovascular & Operational Health Layer</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              TREADGRAM aims to create a seamless layer of cardiovascular intelligence that spans 
              across hospitals, gyms, and digital health platforms – making advanced diagnostics 
              accessible to everyone, everywhere.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-800/50">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Three Pillars</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The foundational principles that guide everything we build.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="glass-card card-hover text-center">
                <CardContent className="p-8 space-y-6">
                  <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center ${pillar.color === 'primary' ? 'bg-primary/20 glow-blue' : 'bg-accent/20 glow-red'}`}>
                    <pillar.icon className={`h-10 w-10 ${pillar.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <h3 className="text-2xl font-semibold">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">5-Year Horizon</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our ambitious roadmap for transforming cardiovascular healthcare globally.
              </p>
              
              <div className="space-y-6">
                {fiveYearHorizon.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="glass-card">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-bold">By 2030, We Will:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Deploy AI models in 1,000+ hospitals and clinics worldwide</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Process 100 million+ biomarker readings annually</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Establish FusionClinic presence in 500+ gyms globally</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Publish 50+ peer-reviewed research papers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Reduce cardiovascular event rates in screened populations by 30%</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-800/50">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us on This Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether you're a hospital, gym, investor, or researcher – there's a place for you 
            in the TREADGRAM ecosystem.
          </p>
          <Button size="lg" className="btn-primary">
            Partner With Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
