"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import EnquireForm from "@/components/EnquireForm"
import PartnersSection from "@/components/PartnersSection"
import ChatBot from "@/components/ChatBot"
import { Heart, CheckCircle2 } from "lucide-react"

export default function HealthInsurancePage() {
  const companies = [
    {
      name: "ISO Student Health Insurance",
      description: "Comprehensive health coverage for international students",
      features: ["Worldwide coverage", "Pre-existing conditions", "Mental health support"],
      logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=200&fit=crop",
      countries: ["United States", "Canada", "Australia", "United Kingdom"],
    },
    {
      name: "GeoBlue Student Insurance",
      description: "Global health insurance designed for students",
      features: ["24/7 telemedicine", "Emergency evacuation", "Prescription coverage"],
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=200&h=200&fit=crop",
      countries: ["United States", "Canada", "Australia", "New Zealand", "Ireland"],
    },
    {
      name: "Allianz Care",
      description: "Trusted international health insurance provider",
      features: ["Cashless hospitalization", "Dental coverage", "Multilingual support"],
      logo: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=200&h=200&fit=crop",
      countries: ["United Kingdom", "Australia", "Germany", "Netherlands", "Ireland", "India"],
    },
  ]

  const benefits = [
    "Comprehensive medical coverage",
    "Emergency medical evacuation",
    "Prescription drug coverage",
    "Mental health support",
    "Dental and vision coverage",
    "24/7 global assistance",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-sunset text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20">
                <Heart className="h-8 w-8 text-white" strokeWidth={2} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Health Insurance</h1>
            </div>
            <p className="text-xl text-sunset-muted">
              Stay protected with comprehensive health coverage. Affordable insurance plans designed specifically for international students.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 tracking-tight">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 rounded-lg bg-card px-4 py-3 shadow-sm border border-border/60">
                <CheckCircle2 className="h-5 w-5 text-rose-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span className="text-sm text-foreground leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnersSection
        companies={companies}
        serviceName="Health Insurance"
        servicePath="/services/health-insurance"
      />

      {/* Enquiry Form */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div id="enquiry" className="max-w-2xl mx-auto scroll-mt-4">
            <EnquireForm serviceName="Health Insurance" />
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot currentService="Health Insurance" />
    </div>
  )
}