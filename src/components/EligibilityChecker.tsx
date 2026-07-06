"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { CheckCircle2, XCircle, AlertCircle, Download } from "lucide-react"

interface EligibilityCheckerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentService?: string
}

const services = [
  { id: "education-loan", name: "Education Loan", icon: "🎓" },
  { id: "money-transfer", name: "Money Transfer", icon: "💰" },
  { id: "forex", name: "Forex", icon: "💱" },
  { id: "accommodation", name: "Accommodation", icon: "🏠" },
  { id: "health-insurance", name: "Health Insurance", icon: "❤️" },
  { id: "student-id-card", name: "Student ID Card", icon: "🆔" },
  { id: "sim-card", name: "SIM Card", icon: "📱" },
]

export default function EligibilityChecker({
  open,
  onOpenChange,
  currentService,
}: EligibilityCheckerProps) {
  const [step, setStep] = useState<"form" | "results">("form")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    nationality: "",
    destinationCountry: "",
    courseLevel: "",
    annualIncome: "",
    selectedServices: currentService ? [currentService] : [] as string[],
  })
  const [eligibilityResults, setEligibilityResults] = useState<any[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Calculate eligibility for each selected service
    const results = formData.selectedServices.map((serviceName) => {
      const result = calculateEligibility(serviceName)
      return result
    })
    
    setEligibilityResults(results)
    setStep("results")
  }

  const calculateEligibility = (serviceName: string) => {
    const age = parseInt(formData.age)
    const income = parseInt(formData.annualIncome)
    
    let eligible = true
    let status: "eligible" | "partially-eligible" | "not-eligible" = "eligible"
    let reasons: string[] = []
    let requirements: string[] = []

    switch (serviceName) {
      case "Education Loan":
        requirements = [
          "Age between 18-35 years",
          "Valid admission letter",
          "Co-applicant (parent/guardian)",
          "Annual family income > ₹2 lakhs",
        ]
        
        if (age < 18 || age > 35) {
          eligible = false
          reasons.push("Age must be between 18-35 years")
        }
        if (income < 200000) {
          status = "partially-eligible"
          reasons.push("Lower income may require collateral")
        }
        if (eligible && reasons.length === 0) {
          reasons.push("You meet the basic eligibility criteria!")
        }
        break

      case "Money Transfer":
        requirements = [
          "Valid ID proof",
          "Purpose of transfer document",
          "Age 18+ years",
          "Valid email and phone number",
        ]
        
        if (age < 18) {
          eligible = false
          reasons.push("Must be 18 years or older")
        } else {
          reasons.push("You are eligible for money transfer services!")
        }
        break

      case "Forex":
        requirements = [
          "Valid passport",
          "Visa/admission letter",
          "Age 18+ years",
          "Pan card",
        ]
        
        if (age < 18) {
          eligible = false
          reasons.push("Must be 18 years or older")
        } else {
          reasons.push("You are eligible for forex services!")
        }
        break

      case "Accommodation":
        requirements = [
          "Valid student status",
          "Age 18+ years",
          "University admission letter",
          "Valid ID proof",
        ]
        
        if (age < 18) {
          status = "partially-eligible"
          reasons.push("Guardian approval required for under 18")
        } else {
          reasons.push("You are eligible for accommodation assistance!")
        }
        break

      case "Health Insurance":
        requirements = [
          "Age between 18-65 years",
          "Valid passport",
          "Student visa",
          "No pre-existing critical conditions",
        ]
        
        if (age < 18 || age > 65) {
          eligible = false
          reasons.push("Age must be between 18-65 years")
        } else {
          reasons.push("You are eligible for health insurance!")
        }
        break

      case "Student ID Card":
        requirements = [
          "Valid student status",
          "Age 12+ years",
          "Proof of enrollment",
          "Valid photo ID",
        ]
        
        if (age < 12) {
          eligible = false
          reasons.push("Must be 12 years or older")
        } else {
          reasons.push("You are eligible for student ID card!")
        }
        break

      case "SIM Card":
        requirements = [
          "Valid passport",
          "Age 18+ years",
          "Valid address proof",
          "Passport size photo",
        ]
        
        if (age < 18) {
          eligible = false
          reasons.push("Must be 18 years or older")
        } else {
          reasons.push("You are eligible for international SIM card!")
        }
        break

      default:
        reasons.push("Service information not available")
    }

    if (!eligible) {
      status = "not-eligible"
    }

    return {
      serviceName,
      eligible,
      status,
      reasons,
      requirements,
    }
  }

  const downloadResults = () => {
    const content = `
ELIGIBILITY CHECK RESULTS
========================
Generated: ${new Date().toLocaleString()}

APPLICANT INFORMATION
---------------------
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Age: ${formData.age}
Nationality: ${formData.nationality}
Destination Country: ${formData.destinationCountry}
Course Level: ${formData.courseLevel}
Annual Income: ₹${formData.annualIncome}

SERVICES CHECKED
----------------
${eligibilityResults.map((result, index) => `
${index + 1}. ${result.serviceName}
   Status: ${result.status.toUpperCase()}
   
   Requirements:
   ${result.requirements.map((req: string) => `   - ${req}`).join('\n')}
   
   Eligibility Notes:
   ${result.reasons.map((reason: string) => `   - ${reason}`).join('\n')}
`).join('\n')}

NEXT STEPS
----------
- Visit our service pages for more detailed information
- Contact our support team for personalized assistance
- Submit enquiry forms on specific service pages

Thank you for using Kite International Services!
`

    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `eligibility-check-${formData.fullName.replace(/\s+/g, '-')}-${Date.now()}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const resetForm = () => {
    setStep("form")
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      age: "",
      nationality: "",
      destinationCountry: "",
      courseLevel: "",
      annualIncome: "",
      selectedServices: currentService ? [currentService] : [],
    })
    setEligibilityResults([])
  }

  const handleServiceToggle = (serviceName: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(serviceName)
        ? prev.selectedServices.filter((s) => s !== serviceName)
        : [...prev.selectedServices, serviceName],
    }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {step === "form" ? "Check Your Eligibility" : "Your Eligibility Results"}
          </DialogTitle>
          <DialogDescription>
            {step === "form"
              ? "Fill in your details to check eligibility for our services"
              : "Here are your personalized eligibility results"}
          </DialogDescription>
        </DialogHeader>

        {step === "form" ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Personal Information</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age">Age *</Label>
                  <Input
                    id="age"
                    type="number"
                    required
                    min="1"
                    max="100"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nationality">Nationality *</Label>
                  <Input
                    id="nationality"
                    required
                    value={formData.nationality}
                    onChange={(e) =>
                      setFormData({ ...formData, nationality: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="destinationCountry">Destination Country</Label>
                  <Input
                    id="destinationCountry"
                    value={formData.destinationCountry}
                    onChange={(e) =>
                      setFormData({ ...formData, destinationCountry: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="courseLevel">Course Level</Label>
                  <Select
                    value={formData.courseLevel}
                    onValueChange={(value) =>
                      setFormData({ ...formData, courseLevel: value })
                    }
                  >
                    <SelectTrigger id="courseLevel">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="undergraduate">Undergraduate</SelectItem>
                      <SelectItem value="postgraduate">Postgraduate</SelectItem>
                      <SelectItem value="diploma">Diploma</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="annualIncome">Annual Family Income (₹) *</Label>
                  <Input
                    id="annualIncome"
                    type="number"
                    required
                    min="0"
                    value={formData.annualIncome}
                    onChange={(e) =>
                      setFormData({ ...formData, annualIncome: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Services Selection */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">
                Select Services to Check *
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service) => (
                  <Card
                    key={service.id}
                    className={`cursor-pointer transition-all ${
                      formData.selectedServices.includes(service.name)
                        ? "border-primary bg-primary/10"
                        : "hover:border-muted-foreground"
                    }`}
                    onClick={() => handleServiceToggle(service.name)}
                  >
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{service.icon}</span>
                        <CardTitle className="text-sm">{service.name}</CardTitle>
                        {formData.selectedServices.includes(service.name) && (
                          <CheckCircle2 className="h-4 w-4 text-primary ml-auto" />
                        )}
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              {formData.selectedServices.length === 0 && (
                <p className="text-sm text-red-600">
                  Please select at least one service
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={formData.selectedServices.length === 0}
            >
              Check Eligibility
            </Button>
          </form>
        ) : (
          <div className="space-y-6">
            {eligibilityResults.map((result, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader
                  className={`${
                    result.status === "eligible"
                      ? "bg-green-50 border-b border-green-200"
                      : result.status === "partially-eligible"
                      ? "bg-yellow-50 border-b border-yellow-200"
                      : "bg-red-50 border-b border-red-200"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {result.serviceName}
                        {result.status === "eligible" && (
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                        )}
                        {result.status === "partially-eligible" && (
                          <AlertCircle className="h-5 w-5 text-yellow-600" />
                        )}
                        {result.status === "not-eligible" && (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        <Badge
                          variant={
                            result.status === "eligible"
                              ? "default"
                              : result.status === "partially-eligible"
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {result.status === "eligible"
                            ? "Eligible"
                            : result.status === "partially-eligible"
                            ? "Partially Eligible"
                            : "Not Eligible"}
                        </Badge>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-4 space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {result.requirements.map((req: string, idx: number) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Notes:</h4>
                    <ul className="space-y-1">
                      {result.reasons.map((reason: string, idx: number) => (
                        <li
                          key={idx}
                          className={`text-sm flex items-start gap-2 ${
                            result.status === "eligible"
                              ? "text-green-700"
                              : result.status === "partially-eligible"
                              ? "text-yellow-700"
                              : "text-red-700"
                          }`}
                        >
                          <span>•</span>
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex gap-3">
              <Button onClick={downloadResults} variant="outline" className="flex-1">
                <Download className="h-4 w-4 mr-2" />
                Download Results
              </Button>
              <Button onClick={resetForm} className="flex-1">
                Check Again
              </Button>
            </div>

            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-sm text-foreground">
                  <strong>Next Steps:</strong> Visit our service pages for more details or
                  submit an enquiry form to get personalized assistance from our team.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
