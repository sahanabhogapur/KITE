import Link from "next/link"
import { notFound } from "next/navigation"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { partners } from "@/data/partners"
import { getPartnerLink } from "@/lib/partner-links"
import { ExternalLink } from "lucide-react"

type Props = {
  params: Promise<{ partner: string }>
}

export default async function ForexPartnerPage({ params }: Props) {
  const { partner: slug } = await params
  const partner = partners.forex.find((item) => item.slug === slug)

  if (!partner) {
    notFound()
  }

  const outboundLink = getPartnerLink(partner)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/services/forex"
            className="text-primary font-medium text-sm sm:text-base"
          >
            ← Back to Forex
          </Link>

          <div className="mt-6 sm:mt-8 flex flex-col md:flex-row gap-6 sm:gap-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl border bg-white p-4 flex items-center justify-center shrink-0 mx-auto md:mx-0">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl sm:text-4xl font-bold">{partner.name}</h1>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {partner.description}
              </p>

              {partner.bestFor && (
                <div className="mt-6">
                  <h3 className="font-semibold text-sm sm:text-base">Best For</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{partner.bestFor}</p>
                </div>
              )}

              {partner.supportedCurrencies && partner.supportedCurrencies.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-semibold text-sm sm:text-base">Supported Currencies</h3>
                  <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                    {partner.supportedCurrencies.map((currency) => (
                      <Badge key={currency}>{currency}</Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6">
                <h3 className="font-semibold text-sm sm:text-base">Features</h3>
                <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                  {partner.features?.map((feature) => (
                    <Badge key={feature} variant="secondary">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                {outboundLink ? (
                  <Button asChild className="w-full sm:w-auto">
                    <a href={outboundLink} target="_blank" rel="noopener noreferrer">
                      Book Forex
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                ) : (
                  <Button asChild className="w-full sm:w-auto">
                    <Link href="/services/forex#enquiry">Enquire Now</Link>
                  </Button>
                )}
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link href="/services/forex">Use Booking Form</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
