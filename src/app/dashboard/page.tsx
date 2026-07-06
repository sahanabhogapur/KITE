"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ChatBot from "@/components/ChatBot"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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

export default function DashboardPage() {
  const services = [
    {
      title: "Education Loan",
      description: "Financial assistance for your studies",
      icon: GraduationCap,
      href: "/services/education-loan",
      color: "text-primary",
      bgColor: "bg-primary/10",
      status: "Available",
    },
    {
      title: "Money Transfer",
      description: "International money transfers",
      icon: Banknote,
      href: "/services/money-transfer",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      status: "Available",
    },
    {
      title: "Forex",
      description: "Best forex rates for students",
      icon: DollarSign,
      href: "/services/forex",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      status: "Available",
    },
    {
      title: "Accommodation",
      description: "Find verified student housing",
      icon: Home,
      href: "/services/accommodation",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      status: "Available",
    },
    {
      title: "Health Insurance",
      description: "Comprehensive health coverage",
      icon: Heart,
      href: "/services/health-insurance",
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      status: "Available",
    },
    {
      title: "Student ID Card",
      description: "International student identity",
      icon: CreditCard,
      href: "/services/student-id-card",
      color: "text-violet-600",
      bgColor: "bg-violet-50",
      status: "Available",
    },
    {
      title: "SIM Card",
      description: "Stay connected internationally",
      icon: Smartphone,
      href: "/services/sim-card",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      status: "Available",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-sunset text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Student Dashboard</h1>
            <p className="text-xl text-sunset-muted">
              Welcome back! Manage all your student services in one convenient place.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Services Grid */}
              <div>
                <h2 className="text-2xl font-bold mb-6">All Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service) => (
                    <Card
                      key={service.href}
                      className="rounded-xl border border-border/80 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/20"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center ring-1 ring-black/5`}>
                            <service.icon className={`h-6 w-6 ${service.color}`} strokeWidth={2} />
                          </div>
                          <span className="text-xs font-medium text-primary bg-primary/15 px-2.5 py-1 rounded-md">
                            {service.status}
                          </span>
                        </div>
                        <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
                        <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button asChild variant="outline" className="w-full rounded-lg">
                          <Link href={service.href}>
                            Explore Service
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Help Card */}
              <Card className="rounded-xl border border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-base font-semibold text-foreground">Need Help?</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">
                    Our support team is here to assist you with any questions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full rounded-lg" variant="default">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  )
}