import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ChatBot from "@/components/ChatBot"
import {
  GraduationCap,
  Banknote,
  DollarSign,
  Home,
  Heart,
  CreditCard,
  Smartphone,
  ArrowRight,
} from "lucide-react"

export default function HomePage() {
  const services = [
    {
      title: "Education Loan",
      description: "Get financial assistance for your studies abroad with competitive interest rates",
      icon: GraduationCap,
      href: "/services/education-loan",
      color: "text-white",
      bgColor: "bg-gradient-to-br from-primary to-blue-700",
      },
    {
      title: "Money Transfer",
      description: "Safe and secure international money transfers with low fees",
      icon: Banknote,
      href: "/services/money-transfer",
      color: "text-white",
      bgColor: "bg-gradient-to-br from-accent to-teal-700",
    },
    {
      title: "Forex",
      description: "Best forex rates for students with transparent pricing",
      icon: DollarSign,
      href: "/services/forex",
      color: "text-white",
      bgColor: "bg-gradient-to-br from-purple-600 to-indigo-700",
    },
    {
      title: "Accommodation",
      description: "Find verified student accommodation near your university",
      icon: Home,
      href: "/services/accommodation",
      color: "text-white",
      bgColor: "bg-gradient-to-br from-primary to-blue-700",
    },
    {
      title: "Health Insurance",
      description: "Comprehensive health coverage for international students",
      icon: Heart,
      href: "/services/health-insurance",
      color: "text-white",
      bgColor: "bg-gradient-to-br from-accent to-teal-700",
    },
    {
      title: "Student ID Card",
      description: "International student identity card with exclusive discounts",
      icon: CreditCard,
      href: "/services/student-id-card",
      color: "text-white",
      bgColor: "bg-gradient-to-br from-purple-600 to-indigo-700",
    },
    {
      title: "SIM Card",
      description: "Stay connected with affordable international SIM cards",
      icon: Smartphone,
      href: "/services/sim-card",
      color: "text-white",
      bgColor: "bg-gradient-to-br from-primary to-blue-700",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-blue-500 to-accent text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Your Study Abroad Journey Starts Here
            </h1>
            <p className="text-lg md:text-2xl mb-8 text-white/90 drop-shadow-md">
              One-stop solution for all your student essential services. From education loans to accommodation, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link href="/dashboard">Explore Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg bg-white/10 text-white hover:bg-white/20 border-white/30">
                <Link href="#services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              Comprehensive solutions tailored for international students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.href}
                className="group rounded-2xl border-0 bg-card shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-32 ${service.bgColor} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10"/>
                  <div className="absolute top-4 right-4 opacity-20">
                    <service.icon className="h-16 w-16 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <CardHeader className="pb-2 pt-6">
                  <div
                    className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-4 shadow-lg transition-transform duration-200 group-hover:scale-105 -mt-12 relative z-10`}
                  >
                    <service.icon className={`h-8 w-8 ${service.color}`} strokeWidth={2} />
                  </div>
                  <CardTitle className="text-lg font-semibold tracking-tight">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <Button
                      asChild
                      className="w-full justify-between rounded-lg font-medium shadow-sm"
                    >
                      <Link href={`${service.href}#enquiry`}>
                        Enquire now
                        <ArrowRight className="h-4 w-4 opacity-90" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-between rounded-lg border-border/80 hover:bg-muted/50"
                    >
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight drop-shadow-lg">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Access your personalized dashboard and manage all your student services in one place
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all font-semibold px-8">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  )
}