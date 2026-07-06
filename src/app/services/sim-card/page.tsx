"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import EnquireForm from "@/components/EnquireForm"
import PartnersSection from "@/components/PartnersSection"
import ChatBot from "@/components/ChatBot"
import { Smartphone, CheckCircle2 } from "lucide-react"

export default function SimCardPage() {
  const companies = [
    {
      name: "Airalo",
      description: "Global eSIM marketplace with instant connectivity",
      features: ["eSIM technology", "190+ countries", "Instant activation"],
      logo: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=200&h=200&fit=crop",
      countries: ["Australia", "Canada", "United Kingdom", "United States", "New Zealand", "Germany", "Netherlands", "Ireland", "India"],
    },
    {
      name: "KnowRoaming",
      description: "International SIM with no roaming charges",
      features: ["Keep your number", "Data plans", "Free incoming calls"],
      logo: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=200&h=200&fit=crop",
      countries: ["United States", "Canada", "United Kingdom", "Australia"],
    },
    {
      name: "Lebara Mobile",
      description: "Affordable international calling and data plans",
      features: ["Student discounts", "Flexible plans", "International calls"],
      logo: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=200&h=200&fit=crop",
      countries: ["United Kingdom", "Australia", "Germany", "Netherlands", "Ireland"],
    },
  ]

  const benefits = [
    "Affordable international rates",
    "No roaming charges",
    "Easy activation process",
    "Flexible data plans",
    "Multiple country coverage",
    "Student-friendly pricing",
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
                <Smartphone className="h-8 w-8 text-white" strokeWidth={2} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">SIM Card Services</h1>
            </div>
            <p className="text-xl text-sunset-muted">
              Stay connected wherever you study. Get affordable international SIM cards with flexible plans and no hidden fees.
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
                <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span className="text-sm text-foreground leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnersSection
        companies={companies}
        serviceName="SIM Card Services"
        servicePath="/services/sim-card"
      />

      {/* Enquiry Form */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div id="enquiry" className="max-w-2xl mx-auto scroll-mt-4">
            <EnquireForm serviceName="SIM Card Services" />
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot currentService="SIM Card" />
    </div>
  )
}