import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  Activity, 
  Building2, 
  Dumbbell,
  Heart,
  TrendingUp,
  Shield,
  Zap,
  ArrowRight,
  Database,
  Cpu,
  LineChart,
  Stethoscope
} from "lucide-react";

const features = [
  {
    title: "RCM AI",
    description: "Intelligent revenue cycle automation with AI-powered denial management and coding optimization.",
    icon: TrendingUp,
    path: "/rcm-ai",
    color: "text-primary",
  },
  {
    title: "SmartBiomarkers",
    description: "Turn wearable data into clinical signals with ECG, SpO₂, and vital sign analytics.",
    icon: Activity,
    path: "/smart-biomarkers",
    color: "text-accent",
  },
  {
    title: "FusionClinic",
    description: "Gym-integrated cardiovascular screening combining fitness with medical diagnostics.",
    icon: Dumbbell,
    path: "/fusion-clinic",
    color: "text-primary",
  },
  {
    title: "SmartHospital",
    description: "AI agent for OPD efficiency, triage optimization, and real-time clinic analytics.",
    icon: Building2,
    path: "/smart-hospital",
    color: "text-accent",
  },
];

const whyTreadgram = [
  {
    icon: Heart,
    title: "Cardiology Expertise",
    description: "Deep domain knowledge in cardiovascular diagnostics and risk assessment.",
  },
  {
    icon: Dumbbell,
    title: "Fitness Integration",
    description: "Bridge the gap between clinical care and fitness performance tracking.",
  },
  {
    icon: Brain,
    title: "AI-First Approach",
    description: "Cutting-edge machine learning models for predictive analytics and automation.",
  },
  {
    icon: Shield,
    title: "Revenue Optimization",
    description: "Ensure financial health of healthcare organizations with intelligent RCM.",
  },
];

const pipelineSteps = [
  { icon: Database, label: "Data", description: "Wearables, EMR, Claims" },
  { icon: Cpu, label: "AI Models", description: "ML & Deep Learning" },
  { icon: LineChart, label: "Insights", description: "Risk Scores & Analytics" },
  { icon: Stethoscope, label: "Action", description: "Clinics, Hospitals, Gyms" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="container-width relative z-10 px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground">AI-Powered </span>
              <span className="text-gradient">Cardiovascular</span>
              <br />
              <span className="text-foreground">& </span>
              <span className="text-gradient">Revenue Intelligence</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transform healthcare operations with intelligent diagnostics, wearable analytics, 
              and revenue cycle optimization for hospitals, clinics, and fitness centers.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="btn-primary text-lg px-8 py-6 h-auto">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 text-lg px-8 py-6 h-auto">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
            <div className="w-1.5 h-2.5 bg-primary rounded-full mx-auto animate-pulse" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-800/50">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI-powered solutions for cardiovascular care and healthcare operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link key={feature.path} to={feature.path}>
                <Card 
                  className="glass-card card-hover h-full cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center`}>
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                    <div className={`flex items-center ${feature.color} text-sm font-medium`}>
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why TREADGRAM?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At the intersection of cardiology, fitness, diagnostics, and hospital revenue optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyTreadgram.map((item, index) => (
              <div 
                key={item.title}
                className="text-center space-y-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center glow-blue">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From raw data to actionable insights in clinics, hospitals, and gyms.
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pipelineSteps.map((step, index) => (
                <div key={step.label} className="relative text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-card border border-border flex items-center justify-center relative z-10">
                    <step.icon className={`h-10 w-10 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold lg:left-1/2 lg:-translate-x-1/2 lg:right-auto">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold">{step.label}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <Card className="glass-card overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 md:p-12 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Ready to Transform Your Healthcare Operations?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Join leading hospitals, clinics, and fitness centers using TREADGRAM's 
                    AI-powered solutions to improve patient outcomes and operational efficiency.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="btn-primary">
                      Book a Demo
                    </Button>
                    <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                      Talk to Us
                    </Button>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />
                  <Zap className="h-32 w-32 text-primary/50" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
