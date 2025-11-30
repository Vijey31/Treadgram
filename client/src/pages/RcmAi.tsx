import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ShieldAlert, 
  FileCode, 
  TrendingUp, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Zap
} from "lucide-react";

const capabilities = [
  {
    icon: ShieldAlert,
    title: "Smart Denial Management",
    description: "AI models that predict claim denials before submission, suggest corrections, and prioritize high-impact cases for immediate attention. Reduce denial rates by up to 40% with proactive intervention.",
    features: [
      "Predictive denial scoring",
      "Root cause analysis",
      "Automated correction suggestions",
      "Priority-based worklist management"
    ]
  },
  {
    icon: FileCode,
    title: "Coding & Documentation Intelligence",
    description: "Advanced NLP models analyze visit notes, diagnosis codes, and procedure codes to reduce revenue leakage and improve coding accuracy across all departments.",
    features: [
      "ICD-10 and CPT optimization",
      "Documentation gap detection",
      "Modifier recommendation engine",
      "Compliance risk scoring"
    ]
  },
  {
    icon: TrendingUp,
    title: "Cash Flow & AR Prediction",
    description: "Machine learning forecasting models for collections, AR days, and revenue risk. Get actionable insights to optimize your revenue cycle timing.",
    features: [
      "30/60/90 day AR forecasting",
      "Payment velocity prediction",
      "Bad debt risk assessment",
      "Payer performance analytics"
    ]
  },
  {
    icon: BarChart3,
    title: "Doctor-Friendly Dashboards",
    description: "Simple, visual analytics that summarize financial performance without overwhelming clinicians. Role-based views for different stakeholders.",
    features: [
      "Real-time revenue metrics",
      "Physician-level insights",
      "Department comparisons",
      "Mobile-responsive design"
    ]
  }
];

export default function RcmAi() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        <div className="container-width relative z-10 px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              <TrendingUp className="h-4 w-4 mr-2" />
              Revenue Cycle Management
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              RCM AI – Intelligent Revenue Cycle Automation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Transform your hospital and clinic revenue cycle workflows with AI-powered automation. 
              From claim submission to payment posting, our models optimize every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-primary">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-800/50">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI solutions designed to maximize revenue and minimize administrative burden.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => (
              <Card key={cap.title} className="glass-card card-hover">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${index % 2 === 0 ? 'bg-primary/20 glow-blue' : 'bg-accent/20 glow-red'}`}>
                      <cap.icon className={`h-7 w-7 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">{cap.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {cap.description}
                      </p>
                      <ul className="space-y-2">
                        {cap.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <Card className="bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center glow-blue">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Integrate RCM AI into Your System</h3>
                    <p className="text-muted-foreground">
                      Seamless integration with existing HIS, EMR, and billing systems.
                    </p>
                  </div>
                </div>
                <Button size="lg" className="btn-primary whitespace-nowrap">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
