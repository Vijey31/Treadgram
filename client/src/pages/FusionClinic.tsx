import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Dumbbell, 
  HeartPulse, 
  Brain, 
  FileText,
  Users,
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  Stethoscope,
  MessageCircle,
  Calendar
} from "lucide-react";

const clinicFeatures = [
  {
    icon: HeartPulse,
    title: "Cardio-Fitness Screening Zone",
    description: "State-of-the-art treadmill and ergometer testing combined with real-time ECG, heart rate, and comprehensive physiological metrics.",
    features: [
      "Treadmill stress testing",
      "Ergometer assessments",
      "12-lead ECG monitoring",
      "VO2 max estimation",
      "Blood pressure tracking"
    ]
  },
  {
    icon: Brain,
    title: "AI Risk Stratification",
    description: "Advanced machine learning models that classify cardiovascular risk levels and recommend appropriate next steps.",
    features: [
      "Low/moderate/high risk classification",
      "Personalized recommendations",
      "Risk factor analysis",
      "Trend-based predictions",
      "Early warning indicators"
    ]
  },
  {
    icon: FileText,
    title: "Performance + Health Reports",
    description: "Easy-to-read PDF and app-based reports combining fitness metrics with medical markers for comprehensive health assessment.",
    features: [
      "Dual fitness-medical reports",
      "Visual performance charts",
      "Progress tracking over time",
      "Mobile app integration",
      "Shareable health summaries"
    ]
  },
  {
    icon: Users,
    title: "For Coaches & Doctors",
    description: "A shared dashboard enabling seamless collaboration between trainers, physiotherapists, and cardiologists.",
    features: [
      "Role-based access control",
      "Real-time data sharing",
      "Collaborative care notes",
      "Referral management",
      "Communication tools"
    ]
  }
];

const dayAtClinic = [
  { icon: ClipboardCheck, label: "Check-in", description: "Quick registration and health questionnaire" },
  { icon: HeartPulse, label: "Test", description: "Treadmill test with comprehensive monitoring" },
  { icon: Brain, label: "AI Report", description: "Instant AI-generated health assessment" },
  { icon: Stethoscope, label: "Counselling", description: "Expert guidance from medical professionals" },
  { icon: Calendar, label: "Follow-up", description: "Scheduled progress review and training plan" }
];

export default function FusionClinic() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        <div className="container-width relative z-10 px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              <Dumbbell className="h-4 w-4 mr-2" />
              Gym-Integrated Healthcare
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              FusionClinic – The Gym-Based Cardiovascular Screening Clinic
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              A revolutionary gym-integrated clinic model where people can undergo treadmill tests, 
              CPET, and cardiovascular screening while they train – bridging fitness and healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-primary">
                Find a Location
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-800/50">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Clinic Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cardiovascular screening in a fitness-friendly environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {clinicFeatures.map((feature, index) => (
              <Card key={feature.title} className="glass-card card-hover">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${index % 2 === 0 ? 'bg-primary/20 glow-blue' : 'bg-accent/20 glow-red'}`}>
                      <feature.icon className={`h-7 w-7 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.features.map((item) => (
                          <li key={item} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            {item}
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Day at FusionClinic</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your journey from check-in to personalized health insights in just one visit.
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-primary via-accent to-primary -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {dayAtClinic.map((step, index) => (
                <div key={step.label} className="relative text-center">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-card border border-border flex items-center justify-center relative z-10 card-hover">
                    <step.icon className={`h-10 w-10 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold lg:left-1/2 lg:-translate-x-1/2 lg:right-auto z-20">
                    {index + 1}
                  </div>
                  <h3 className="mt-4 font-semibold">{step.label}</h3>
                  <p className="text-muted-foreground text-sm mt-2">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-800/50">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Gym Into a Health Hub</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Partner with TREADGRAM to offer cardiovascular screening services that set your facility apart 
            and provide real value to your members.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-primary">
              Become a Partner
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
