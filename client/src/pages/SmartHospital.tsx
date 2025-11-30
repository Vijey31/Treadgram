import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  Clock, 
  ClipboardList, 
  FileText,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Bot,
  Send
} from "lucide-react";

const hospitalFeatures = [
  {
    icon: Clock,
    title: "OPD Flow Optimization",
    description: "AI-powered suggestions for scheduling, slot allocation, and patient wait-time reduction to maximize outpatient efficiency.",
    features: [
      "Smart appointment scheduling",
      "Dynamic slot allocation",
      "Wait-time prediction",
      "Queue management",
      "Peak hour optimization"
    ]
  },
  {
    icon: ClipboardList,
    title: "Triage & Pre-Visit Questionnaires",
    description: "Digital intake forms that pre-structure patient data for doctors, enabling faster and more focused consultations.",
    features: [
      "Symptom-based triage",
      "Medical history collection",
      "Pre-visit assessment forms",
      "Allergy and medication tracking",
      "Priority-based routing"
    ]
  },
  {
    icon: FileText,
    title: "Clinical Note Assistance",
    description: "AI-powered tools for summarizing visits, suggesting codes, and structuring data for seamless HIS/EMR integration.",
    features: [
      "Automated visit summaries",
      "ICD code suggestions",
      "SOAP note generation",
      "Voice-to-text transcription",
      "EMR auto-population"
    ]
  },
  {
    icon: BarChart3,
    title: "Real-Time OPD Analytics",
    description: "Comprehensive dashboards showing patient load, bottlenecks, and feedback for data-driven operational decisions.",
    features: [
      "Live patient flow metrics",
      "Department utilization",
      "Staff performance tracking",
      "Patient satisfaction scores",
      "Trend analysis reports"
    ]
  }
];

const chatMessages = [
  { role: "assistant", text: "Good morning! Today's OPD load is high between 10-12 AM. Consider adding extra slots." },
  { role: "assistant", text: "Dr. Sharma's clinic has 15-minute avg wait time. Patients are satisfied." },
  { role: "user", text: "What's the current queue status for cardiology?" },
  { role: "assistant", text: "Cardiology OPD: 12 patients waiting, avg wait time 22 mins. Next available slot: 11:45 AM." }
];

export default function SmartHospital() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
        
        <div className="container-width relative z-10 px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-6">
              <Building2 className="h-4 w-4 mr-2" />
              Hospital Intelligence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              SmartHospital – OPD Efficiency AI Agent
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              An intelligent AI agent that transforms outpatient department operations with smart scheduling, 
              automated documentation, and real-time analytics for optimal patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-accent">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-accent/50 text-accent hover:bg-accent/10">
                View Case Study
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-800/50">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered OPD Management</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools to streamline every aspect of outpatient care delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hospitalFeatures.map((feature, index) => (
              <Card key={feature.title} className="glass-card card-hover">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${index % 2 === 0 ? 'bg-accent/20 glow-red' : 'bg-primary/20 glow-blue'}`}>
                      <feature.icon className={`h-7 w-7 ${index % 2 === 0 ? 'text-accent' : 'text-primary'}`} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.features.map((item) => (
                          <li key={item} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Meet Your OPD AI Agent</h2>
              <p className="text-muted-foreground leading-relaxed">
                A conversational AI assistant that provides real-time insights and recommendations 
                to help hospital staff make informed decisions throughout the day.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Proactive alerts for capacity issues
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Natural language queries about OPD status
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Integration with hospital systems
                </li>
              </ul>
            </div>
            
            <Card className="glass-card overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-secondary/50 p-4 border-b border-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">OPD AI Agent</p>
                    <p className="text-xs text-muted-foreground">Online • Always available</p>
                  </div>
                </div>
                
                <div className="p-4 space-y-4 h-80 overflow-y-auto">
                  {chatMessages.map((msg, index) => (
                    <div 
                      key={index}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                          msg.role === 'user' 
                            ? 'bg-primary text-primary-foreground rounded-br-sm' 
                            : 'bg-secondary text-foreground rounded-bl-sm'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <input 
                      type="text" 
                      placeholder="Ask about OPD status..." 
                      className="flex-1 bg-secondary rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      disabled
                    />
                    <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Send className="h-5 w-5 text-primary-foreground" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-800/50">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Hospital Operations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join leading healthcare facilities using SmartHospital to improve patient satisfaction 
            and operational efficiency.
          </p>
          <Button size="lg" className="btn-accent">
            Schedule a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
