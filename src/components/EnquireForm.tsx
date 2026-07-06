"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Checkbox } from "./ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"

const DESTINATIONS = [
  "Australia",
  "Canada",
  "United Kingdom",
  "United States",
  "New Zealand",
  "Ireland",
  "Germany",
  "Netherlands",
  "Other",
]

const COUNTRY_CODES = [
  { code: "+91", country: "IN", label: "IN (+91)" },
  { code: "+1", country: "US", label: "US (+1)" },
  { code: "+44", country: "GB", label: "GB (+44)" },
  { code: "+61", country: "AU", label: "AU (+61)" },
  { code: "+81", country: "JP", label: "JP (+81)" },
  { code: "+971", country: "AE", label: "AE (+971)" },
  { code: "+65", country: "SG", label: "SG (+65)" },
  { code: "+49", country: "DE", label: "DE (+49)" },
]

const STATES = [
  "Andhra Pradesh",
  "Karnataka",
  "Kerala",
  "Tamil Nadu",
  "Maharashtra",
  "Delhi",
  "Gujarat",
  "West Bengal",
  "Rajasthan",
  "Other",
]

interface EnquireFormProps {
  serviceName?: string
}

export default function EnquireForm({ serviceName }: EnquireFormProps) {
  const [formData, setFormData] = useState({
    destination: "",
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "IN (+91)",
    mobile: "",
    city: "",
    state: "",
    agreeTerms: false,
    contactConsent: false,
    promotionsConsent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    const newErrors: Record<string, string> = {}
    if (!formData.destination?.trim()) newErrors.destination = "Please select a destination"
    if (!formData.firstName?.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName?.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email?.trim()) newErrors.email = "Email address is required"
    if (!formData.mobile?.trim()) newErrors.mobile = "Mobile number is required"
    if (!formData.city?.trim()) newErrors.city = "City is required"
    if (!formData.state?.trim()) newErrors.state = "Please select a state"
    if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to the Terms and Conditions and Privacy Policy"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    const form = document.createElement("form")
    form.method = "POST"
    form.action = "https://crm.zoho.in/crm/WebToLeadForm"
    form.acceptCharset = "UTF-8"

    const zohoFields: Record<string, string> = {
      xnQsjsdp: "19ae669193dc4ebd97b3b94c5f636a476fbc0a842fabe4d527008af7b9534c56",
      xmIwtLD:
        "bd28133c1b3e3a444a14b4f405c0949e193fa2916d4908c43ba08cd78090b39650a1bdff8c383cf8c9f3912cbc82ca70",
      actionType: "TGVhZHM=",
      Company: `${formData.firstName} ${formData.lastName}`,
      "Last Name": formData.email,
      Phone: `${formData.countryCode} ${formData.mobile}`,
      Designation: formData.destination,
      Service: serviceName || "",
      Description: `${formData.city}, ${formData.state}`,
      returnURL: typeof window !== "undefined" ? `${window.location.origin}/thank-you` : "",
    }

    Object.entries(zohoFields).forEach(([name, value]) => {
      const input = document.createElement("input")
      input.type = "hidden"
      input.name = name
      input.value = value
      form.appendChild(input)
    })

    document.body.appendChild(form)
    form.submit()
  }

  return (
    <Card className="rounded-xl border border-border/80 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold tracking-tight">Provide your details</CardTitle>
        <CardDescription>
          This will help us share information on how to get started.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="destination">Select destination <span className="text-destructive">*</span></Label>
            <Select
              value={formData.destination}
              onValueChange={(value) => {
                setFormData({ ...formData, destination: value })
                if (errors.destination) setErrors({ ...errors, destination: "" })
              }}
              required
            >
              <SelectTrigger id="destination" className={`rounded-md ${errors.destination ? "border-destructive" : ""}`}>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {DESTINATIONS.map((d) => (
                  <SelectItem key={d} value={d}>
                    {d}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.destination && <p className="text-sm text-destructive mt-1">{errors.destination}</p>}
          </div>

          <div>
            <Label htmlFor="firstName">First name <span className="text-destructive">*</span></Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className={`rounded-md ${errors.firstName ? "border-destructive" : ""}`}
              required
            />
            {errors.firstName && <p className="text-sm text-destructive mt-1">{errors.firstName}</p>}
          </div>

          <div>
            <Label htmlFor="lastName">Last name <span className="text-destructive">*</span></Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className={`rounded-md ${errors.lastName ? "border-destructive" : ""}`}
              required
            />
            {errors.lastName && <p className="text-sm text-destructive mt-1">{errors.lastName}</p>}
          </div>

          <div>
            <Label htmlFor="email">Email address <span className="text-destructive">*</span></Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={`rounded-md ${errors.email ? "border-destructive" : ""}`}
              required
            />
            {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
          </div>

          <div>
            <Label>Mobile number <span className="text-destructive">*</span></Label>
            <div className="flex gap-2">
              <Select
                value={formData.countryCode}
                onValueChange={(value) =>
                  setFormData({ ...formData, countryCode: value })
                }
              >
                <SelectTrigger className="w-[120px] rounded-md shrink-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {COUNTRY_CODES.map((c) => (
                    <SelectItem key={c.country} value={c.label}>
                      {c.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                name="mobile"
                placeholder="Mobile number"
                value={formData.mobile}
                onChange={handleChange}
                className={`rounded-md flex-1 ${errors.mobile ? "border-destructive" : ""}`}
                required
              />
            </div>
            {errors.mobile && <p className="text-sm text-destructive mt-1">{errors.mobile}</p>}
          </div>

          <div>
            <Label htmlFor="city">City <span className="text-destructive">*</span></Label>
            <Input
              id="city"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className={`rounded-md ${errors.city ? "border-destructive" : ""}`}
              required
            />
            {errors.city && <p className="text-sm text-destructive mt-1">{errors.city}</p>}
          </div>

          <div>
            <Label htmlFor="state">State <span className="text-destructive">*</span></Label>
            <Select
              value={formData.state}
              onValueChange={(value) => {
                setFormData({ ...formData, state: value })
                if (errors.state) setErrors({ ...errors, state: "" })
              }}
              required
            >
              <SelectTrigger id="state" className={`rounded-md ${errors.state ? "border-destructive" : ""}`}>
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                {STATES.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.state && <p className="text-sm text-destructive mt-1">{errors.state}</p>}
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3">
              <Checkbox
                id="agreeTerms"
                checked={formData.agreeTerms}
                onCheckedChange={(checked) => {
                  setFormData({ ...formData, agreeTerms: checked === true })
                  if (errors.agreeTerms) setErrors({ ...errors, agreeTerms: "" })
                }}
                required
                className={`mt-0.5 ${errors.agreeTerms ? "border-destructive" : ""}`}
              />
              <Label
                htmlFor="agreeTerms"
                className="text-sm font-normal cursor-pointer leading-tight"
              >
                I agree to Kite International Services{" "}
                <Link
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Privacy Policy
                </Link>
                <span className="text-destructive"> *</span>
              </Label>
              {errors.agreeTerms && <p className="text-sm text-destructive mt-1">{errors.agreeTerms}</p>}
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="contactConsent"
                checked={formData.contactConsent}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, contactConsent: checked === true })
                }
                className="mt-0.5"
              />
              <Label
                htmlFor="contactConsent"
                className="text-sm font-normal cursor-pointer"
              >
                Please contact me by phone, email or SMS to assist with my
                enquiry.
              </Label>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="promotionsConsent"
                checked={formData.promotionsConsent}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, promotionsConsent: checked === true })
                }
                className="mt-0.5"
              />
              <Label
                htmlFor="promotionsConsent"
                className="text-sm font-normal cursor-pointer"
              >
                I&apos;d love to hear about special promotions and trusted
                partner offerings from Kite International Services.
              </Label>
            </div>
          </div>

          <p className="text-xs text-muted-foreground pt-1">
            Kite International Services takes your privacy seriously. Please read
            our{" "}
            <Link
              href="/privacy"
              className="text-primary hover:underline"
            >
              personal information collection statement
            </Link>{" "}
            to find out more.
          </p>

          <Button
            type="submit"
            className="w-full rounded-md bg-primary text-primary-foreground hover:opacity-90"
            disabled={isSubmitting || !formData.agreeTerms}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
