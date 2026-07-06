"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import EnquireForm from "@/components/EnquireForm"
import PartnersSection from "@/components/PartnersSection"
import ChatBot from "@/components/ChatBot"
import { CreditCard, CheckCircle2 } from "lucide-react"

export default function StudentIdCardPage() {
  const companies = [
    {
      name: "ISIC - International Student Identity Card",
      description: "The only internationally recognized student ID card",
      features: ["Global discounts", "Travel insurance", "Valid worldwide"],
      logo: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=200&h=200&fit=crop",
      countries: ["Australia", "Canada", "United Kingdom", "United States", "New Zealand", "Germany", "Netherlands", "India", "Ireland"],
    },
    {
      name: "Student Advantage Card",
      description: "Exclusive discounts on travel, shopping, and dining",
      features: ["15% off Amtrak", "Retail discounts", "Online deals"],
      logo: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=200&h=200&fit=crop",
      countries: ["United States", "Canada"],
    },
    {
      name: "UniDays",
      description: "Digital student verification and discounts platform",
      features: ["Instant verification", "Exclusive brands", "Year-round savings"],
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=200&fit=crop",
      countries: ["United Kingdom", "Australia", "United States", "Canada", "Ireland", "New Zealand", "India"],
    },
  ]

  const benefits = [
    "Access to thousands of discounts",
    "International recognition",
    "Travel and accommodation deals",
    "Entertainment and dining offers",
    "Technology and software discounts",
    "Valid for 12 months",
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
                <CreditCard className="h-8 w-8 text-white" strokeWidth={2} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Student ID Card</h1>
            </div>
            <p className="text-xl text-sunset-muted">
              Unlock exclusive student discounts worldwide. Get your international student identity card and start saving today.
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
                <CheckCircle2 className="h-5 w-5 text-violet-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span className="text-sm text-foreground leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnersSection
        companies={companies}
        serviceName="Student ID Card"
        servicePath="/services/student-id-card"
      />

      {/* Enquiry Form */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div id="enquiry" className="max-w-2xl mx-auto scroll-mt-4">
            <EnquireForm serviceName="Student ID Card" />
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot currentService="Student ID Card" />
    </div>
  )
}