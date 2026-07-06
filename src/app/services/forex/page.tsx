"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import EnquireForm from "@/components/EnquireForm"
import PartnersSection from "@/components/PartnersSection"
import ForexBookingForm from "@/components/ForexBookingForm"
import ChatBot from "@/components/ChatBot"
import { DollarSign, CheckCircle2 } from "lucide-react"
import { partners } from "@/data/partners"

export default function ForexPage() {
  const companies = partners.forex

  const benefits = [
    "Best exchange rates",
    "Zero commission charges",
    "Doorstep delivery available",
    "Multiple currency options",
    "Prepaid forex cards",
    "Easy online booking",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-gradient-sunset text-white py-10 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20 shrink-0">
                <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-white" strokeWidth={2} />
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Forex Services
              </h1>
            </div>
            <p className="text-base sm:text-xl text-sunset-muted leading-relaxed">
              Get the best forex rates for your international education. Transparent pricing and hassle-free currency exchange.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 tracking-tight">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-lg bg-card px-3 sm:px-4 py-3 shadow-sm border border-border/60"
              >
                <CheckCircle2
                  className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0"
                  strokeWidth={2}
                />
                <span className="text-xs sm:text-sm text-foreground leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ForexBookingForm />

      <PartnersSection
        companies={companies}
        serviceName="Forex Services"
        servicePath="/services/forex"
        showCountryFilter={false}
      />

      <section className="py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div id="enquiry" className="max-w-2xl mx-auto scroll-mt-4">
            <EnquireForm serviceName="Forex Services" />
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot currentService="Forex" />
    </div>
  )
}
