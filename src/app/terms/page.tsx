import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Terms and Conditions - Kite International Services",
  description: "Terms and Conditions for using Kite International Services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Terms and Conditions</CardTitle>
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-IN")}
            </p>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none space-y-4">
            <section>
              <h2 className="text-lg font-semibold mt-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using Kite International Services (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold mt-4">2. Services</h2>
              <p>
                Kite International Services provides information and assistance for education loans, money transfer, forex, accommodation, health insurance, student ID cards, SIM cards, and related student essential services. We act as an intermediary and do not guarantee outcomes from third-party providers.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold mt-4">3. User Obligations</h2>
              <p>
                You agree to provide accurate and complete information when using our enquiry forms and services. You are responsible for maintaining the confidentiality of your account details and for all activity under your account.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold mt-4">4. Privacy</h2>
              <p>
                Your use of our services is also governed by our{" "}
                <Link href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
                . By submitting an enquiry, you consent to the collection and use of your information as described therein.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold mt-4">5. Limitation of Liability</h2>
              <p>
                Kite International Services shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services or reliance on information provided. We do not guarantee approval of loans, visas, or other third-party services.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold mt-4">6. Changes</h2>
              <p>
                We may update these Terms and Conditions from time to time. Continued use of our services after changes constitutes acceptance of the updated terms.
              </p>
            </section>
            <p className="pt-4 text-muted-foreground">
              For questions, contact us through the enquiry forms on our service pages.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
