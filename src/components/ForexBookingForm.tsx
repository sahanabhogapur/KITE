"use client"

import { useMemo, useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Badge } from "./ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { ArrowRight, BookOpen, ExternalLink, Info } from "lucide-react"
import { FOREX_CURRENCIES, partners } from "@/data/partners"
import { appendQueryParams, getPartnerLink } from "@/lib/partner-links"

export default function ForexBookingForm() {
  const forexPartners = partners.forex
  const [selectedPartnerSlug, setSelectedPartnerSlug] = useState(forexPartners[0]?.slug ?? "")
  const [currency, setCurrency] = useState("")
  const [quantity, setQuantity] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const selectedPartner = useMemo(
    () => forexPartners.find((p) => p.slug === selectedPartnerSlug) ?? forexPartners[0],
    [selectedPartnerSlug, forexPartners]
  )

  const availableCurrencies = useMemo(() => {
    if (!selectedPartner?.supportedCurrencies?.length) return FOREX_CURRENCIES
    return FOREX_CURRENCIES.filter((c) =>
      selectedPartner.supportedCurrencies!.includes(c.code)
    )
  }, [selectedPartner])

  const handleBook = () => {
    const newErrors: Record<string, string> = {}
    if (!currency) newErrors.currency = "Please select a currency"
    if (!quantity || Number(quantity) <= 0) newErrors.quantity = "Enter a valid amount"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    const baseLink = getPartnerLink(selectedPartner)
    if (!baseLink) {
      document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" })
      return
    }

    const bookingUrl = appendQueryParams(baseLink, {
      currency,
      amount: quantity,
      product: "forex",
    })
    window.open(bookingUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="py-8 sm:py-12 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Book Your Forex
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2">
              Choose your currency, enter the amount you need, and book with our trusted forex partners.
            </p>
          </div>

          <Card className="rounded-xl border border-border/80 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary shrink-0" />
                Forex Booking
              </CardTitle>
              <CardDescription className="text-sm">
                Select a partner, pick your currency, and enter how much you need.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5">
              <div>
                <Label htmlFor="forex-partner" className="text-sm font-medium">
                  Forex Partner
                </Label>
                <Select
                  value={selectedPartnerSlug}
                  onValueChange={(value) => {
                    setSelectedPartnerSlug(value)
                    setCurrency("")
                  }}
                >
                  <SelectTrigger id="forex-partner" className="mt-2 w-full rounded-lg">
                    <SelectValue placeholder="Select partner" />
                  </SelectTrigger>
                  <SelectContent>
                    {forexPartners.map((partner) => (
                      <SelectItem key={partner.slug} value={partner.slug!}>
                        {partner.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedPartner && (
                <div className="rounded-lg border border-border/60 bg-muted/30 p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg border bg-white p-2 flex items-center justify-center shrink-0">
                      <img
                        src={selectedPartner.logo}
                        alt={selectedPartner.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-sm sm:text-base">{selectedPartner.name}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                        {selectedPartner.description}
                      </p>
                    </div>
                  </div>

                  {selectedPartner.bestFor && (
                    <div className="flex items-start gap-2 text-xs sm:text-sm">
                      <Info className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <p>
                        <span className="font-medium">Best for: </span>
                        <span className="text-muted-foreground">{selectedPartner.bestFor}</span>
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {selectedPartner.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="forex-currency" className="text-sm font-medium">
                    Currency Needed <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={currency}
                    onValueChange={(value) => {
                      setCurrency(value)
                      if (errors.currency) setErrors({ ...errors, currency: "" })
                    }}
                  >
                    <SelectTrigger
                      id="forex-currency"
                      className={`mt-2 w-full rounded-lg ${errors.currency ? "border-destructive" : ""}`}
                    >
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableCurrencies.map((c) => (
                        <SelectItem key={c.code} value={c.code}>
                          {c.flag} {c.code} — {c.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.currency && (
                    <p className="text-xs text-destructive mt-1">{errors.currency}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="forex-quantity" className="text-sm font-medium">
                    Amount Needed <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="forex-quantity"
                    type="number"
                    min="1"
                    placeholder="e.g. 5000"
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value)
                      if (errors.quantity) setErrors({ ...errors, quantity: "" })
                    }}
                    className={`mt-2 rounded-lg ${errors.quantity ? "border-destructive" : ""}`}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Enter the foreign currency amount you need (not INR).
                  </p>
                  {errors.quantity && (
                    <p className="text-xs text-destructive mt-1">{errors.quantity}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  onClick={handleBook}
                  className="w-full sm:flex-1 rounded-xl"
                  size="lg"
                >
                  Book Forex
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:flex-1 rounded-xl"
                  size="lg"
                >
                  <a href="#enquiry">
                    Need Help? Enquire
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
