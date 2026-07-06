"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Label } from "./ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { ArrowRight, ExternalLink } from "lucide-react"
import { getPartnerLink } from "@/lib/partner-links"

const ALL_COUNTRIES_VALUE = "All countries"

const COUNTRY_OPTIONS = [
  ALL_COUNTRIES_VALUE,
  "Australia",
  "Canada",
  "United Kingdom",
  "United States",
  "New Zealand",
  "Ireland",
  "Germany",
  "Netherlands",
  "India",
  "United Arab Emirates",
  "Other",
]

export type WhyChooseItem = {
  title: string
  description: string
}

export type PartnerCompany = {
  id?: number
  slug?: string
  name: string
  logo: string
  description: string
  features: string[]
  countries?: string[]
  bestFor?: string
  interestRate?: string
  website?: string
  utm?: string
  api?: string
  image?: string
  brandStory?: string
  locationsHeading?: string
  locationsText?: string
  amenitiesText?: string
  whyChoose?: WhyChooseItem[]
}

type PartnersSectionProps = {
  companies: PartnerCompany[]
  serviceName: string
  servicePath: string
  showCountryFilter?: boolean
}

export default function PartnersSection({
  companies,
  serviceName,
  servicePath,
  showCountryFilter = true,
}: PartnersSectionProps) {
  const [selectedCountry, setSelectedCountry] = useState<string>(ALL_COUNTRIES_VALUE)

  const filteredCompanies = useMemo(() => {
    if (!selectedCountry || selectedCountry === ALL_COUNTRIES_VALUE) {
      return companies
    }

    return companies.filter((company) =>
      company.countries?.some(
        (country) => country.toLowerCase() === selectedCountry.toLowerCase()
      )
    )
  }, [companies, selectedCountry])

  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 tracking-tight">
          Our Partner Companies
        </h2>

        {showCountryFilter && (
          <div className="mb-6">
            <Label htmlFor="partner-country" className="text-sm font-medium">
              View all partners or select a country to filter
            </Label>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger
                id="partner-country"
                className="mt-2 w-full sm:max-w-xs rounded-lg"
              >
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                {COUNTRY_OPTIONS.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {filteredCompanies.length === 0 ? (
          <p className="text-muted-foreground py-8 rounded-lg bg-muted/30 border border-dashed border-border px-4 text-center text-sm">
            No partners available for this country yet. You can still enquire
            below and we&apos;ll assist you.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {filteredCompanies.map((company, index) =>
              company.whyChoose?.length || company.brandStory ? (
                <Card
                  key={company.slug ?? index}
                  className="rounded-xl border border-border/80 shadow-sm overflow-hidden flex flex-col"
                >
                  <div className="relative h-32 sm:h-36 overflow-hidden bg-muted shrink-0">
                    <img
                      src={company.image || company.logo}
                      alt={company.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="space-y-2 flex-1 flex flex-col p-3 sm:p-4">
                    <h3 className="text-sm sm:text-base font-bold tracking-tight">
                      {company.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {company.description}
                    </p>
                    {company.brandStory && (
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {company.brandStory}
                      </p>
                    )}
                    {company.locationsHeading && company.locationsText && (
                      <div className="pt-1">
                        <h4 className="text-xs sm:text-sm font-semibold text-foreground">
                          {company.locationsHeading}
                        </h4>
                        <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2 mt-1">
                          {company.locationsText}
                        </p>
                      </div>
                    )}
                    {company.features?.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {company.features.slice(0, 4).map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    )}
                    <div className="flex flex-col xs:flex-row flex-wrap gap-2 pt-2 mt-auto">
                      {getPartnerLink(company) ? (
                        <Button asChild className="rounded-lg w-full sm:w-auto" size="sm">
                          <a
                            href={getPartnerLink(company)!}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Book Now
                            <ExternalLink className="h-3 w-3 ml-1.5" />
                          </a>
                        </Button>
                      ) : (
                        <Button asChild className="rounded-lg w-full sm:w-auto" size="sm">
                          <Link href={`${servicePath}#enquiry`}>
                            Enquire now
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </Link>
                        </Button>
                      )}
                      {company.slug && (
                        <Button
                          asChild
                          variant="outline"
                          className="rounded-lg w-full sm:w-auto"
                          size="sm"
                        >
                          <Link href={`${servicePath}/${company.slug}`}>Learn more</Link>
                        </Button>
                      )}
                    </div>
                    {company.whyChoose && company.whyChoose.length > 0 && (
                      <div className="pt-3 border-t border-border/60 space-y-2">
                        <h4 className="text-xs font-semibold text-foreground">
                          Why choose {company.name}:
                        </h4>
                        <ul className="space-y-1.5">
                          {company.whyChoose.map((item, idx) => (
                            <li key={idx} className="flex gap-2 text-xs">
                              <span className="font-medium text-foreground shrink-0">
                                {item.title}:
                              </span>
                              <span className="text-muted-foreground leading-relaxed">
                                {item.description}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardHeader>
                </Card>
              ) : (
                <Card
                  key={company.slug ?? index}
                  className="rounded-xl sm:rounded-2xl border border-border shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl border bg-white p-2 flex items-center justify-center shrink-0">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <CardTitle className="text-base sm:text-xl font-bold truncate">
                          {company.name}
                        </CardTitle>
                        <div className="text-yellow-500 text-xs sm:text-sm mt-0.5">
                          ⭐⭐⭐⭐⭐
                        </div>
                      </div>
                    </div>

                    <CardDescription className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed">
                      {company.description}
                    </CardDescription>

                    <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-xs sm:text-sm">
                      {company.bestFor && (
                        <div>
                          <span className="font-semibold">Best For: </span>
                          <span className="text-muted-foreground">{company.bestFor}</span>
                        </div>
                      )}

                      {company.interestRate && (
                        <div>
                          <span className="font-semibold">Interest Rate: </span>
                          <span className="text-muted-foreground">{company.interestRate}</span>
                        </div>
                      )}

                      {company.countries && company.countries.length > 0 && (
                        <div>
                          <span className="font-semibold">Countries:</span>
                          <div className="flex flex-wrap gap-1.5 mt-1.5">
                            {company.countries.map((country) => (
                              <Badge key={country} variant="outline" className="text-xs">
                                {country}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="flex flex-col flex-1 p-4 sm:p-6 pt-0">
                    {company.features?.length > 0 && (
                      <>
                        <h4 className="font-semibold mb-2 text-sm">Key Features</h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                          {company.features.map((feature, idx) => (
                            <Badge key={idx} className="rounded-full px-2.5 py-0.5 text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </>
                    )}

                    <div className="mt-auto space-y-2 sm:space-y-3">
                      {company.slug && (
                        <Button asChild variant="outline" className="w-full rounded-xl" size="sm">
                          <Link href={`${servicePath}/${company.slug}`}>View Details</Link>
                        </Button>
                      )}
                      {getPartnerLink(company) ? (
                        <Button asChild className="w-full rounded-xl" size="sm">
                          <a
                            href={getPartnerLink(company)!}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visit Partner
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      ) : (
                        <Button asChild className="w-full rounded-xl" size="sm">
                          <Link href={`${servicePath}#enquiry`}>
                            Select Partner
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        )}
      </div>
    </section>
  )
}
