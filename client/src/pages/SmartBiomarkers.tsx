import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Activity, 
  Heart, 
  Wind, 
  Gauge,
  Timer,
  ArrowRight,
  Watch,
  Cpu,
  Monitor,
  Smartphone
} from "lucide-react";

const biomarkerSections = [
  {
    icon: Heart,
    title: "ECG & Arrhythmia Flags",
    description: "Advanced algorithms analyze ECG waveforms from wearable devices and trigger early alerts for cardiac abnormalities.",
    details: [
      "Real-time ECG waveform analysis",
      "Atrial fibrillation detection",
      "Premature beat classification",
      "ST segment monitoring",
      "QT interval tracking"
    ]
  },
  {
    icon: Wind,
    title: "SpO₂ & Respiratory Stress Monitoring",
    description: "Continuous oxygen saturation and breathing pattern insights for early detection of respiratory issues.",
    details: [
      "Continuous SpO₂ tracking",
      "Sleep apnea screening",
      "Breathing rate analysis",
      "Oxygen desaturation alerts",
      "Respiratory stress patterns"
    ]
  },
  {
    icon: Gauge,
    title: "Blood Pressure & Vascular Load Trends",
    description: "Longitudinal tracking of blood pressure patterns and vascular load for comprehensive cardiovascular risk assessment.",
    details: [
      "24-hour BP profiling",
      "Morning surge detection",
      "Nocturnal dipping patterns",
      "Pulse wave velocity",
      "Arterial stiffness indicators"
    ]
  },
  {
    icon: Timer,
    title: "Activity & Recovery Analytics",
    description: "Comprehensive fitness metrics including step count, heart-rate recovery, HRV and training load analytics.",
    details: [
      "Heart rate variability (HRV)",
      "Training load optimization",
      "Recovery score calculation",
      "Sleep quality analysis",
      "Stress level monitoring"
    ]
  }
];

const flowSteps = [
  { icon: Watch, label: "Wearable Devices", description: "Smartwatches, fitness bands, medical-grade monitors" },
  { icon: Activity, label: "Data Stream", description: "Continuous vital signs and activity data" },
  { icon: Cpu, label: "AI Engine", description: "Machine learning models for pattern recognition" },
  { icon: Monitor, label: "Clinician Dashboard", description: "Professional-grade analytics and alerts" },
  { icon: Smartphone, label: "User App", description: "Personal health insights and recommendations" }
];

export default function SmartBiomarkers() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
        
        <div className="container-width relative z-10 px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-6">
              <Activity className="h-4 w-4 mr-2" />
              Wearable Intelligence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              SmartBiomarkers – Turning Wearables into Clinical Signals
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              TREADGRAM builds algorithms to harness biomarkers such as ECG, SpO₂, heart rate, 
              blood pressure, and activity data through wearables and continuous monitoring systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-accent">
                Explore Capabilities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-accent/50 text-accent hover:bg-accent/10">
                Integration Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-800/50">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Biomarker Analytics</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transform raw sensor data into clinically meaningful insights with our AI-powered analysis engine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {biomarkerSections.map((section, index) => (
              <Card key={section.title} className="glass-card card-hover">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${index % 2 === 0 ? 'bg-accent/20 glow-red' : 'bg-primary/20 glow-blue'}`}>
                      <section.icon className={`h-7 w-7 ${index % 2 === 0 ? 'text-accent' : 'text-primary'}`} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">{section.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {section.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {section.details.map((detail) => (
                          <span 
                            key={detail} 
                            className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Data Flow Architecture</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From wearable devices to actionable insights for clinicians and users.
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-accent via-primary to-accent -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {flowSteps.map((step, index) => (
                <div key={step.label} className="relative text-center">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-card border border-border flex items-center justify-center relative z-10 card-hover">
                    <step.icon className={`h-10 w-10 ${index % 2 === 0 ? 'text-accent' : 'text-primary'}`} />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Integrate with Your Platform</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            SmartBiomarkers integrates seamlessly with gyms, clinics, and digital health platforms 
            to provide comprehensive cardiovascular monitoring.
          </p>
          <Button size="lg" className="btn-primary">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
