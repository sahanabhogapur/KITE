import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Privacy Policy - Kite International Services",
  description: "Privacy Policy and personal information collection statement for Kite International Services.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Privacy Policy</CardTitle>
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-IN")}
            </p>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none space-y-4">
            <p className="font-medium">
              Kite International Services takes your privacy seriously. This policy describes how we collect, use, and protect your personal information.
            </p>
            <section>
              <h2 className="text-lg font-semibold mt-4">Personal information we collect</h2>
              <p>
                When you submit an enquiry or use our services, we may collect your name, email address, phone number, destination country, city, state, nearest office preference, and other details you provide in our forms.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold mt-4">How we use your information</h2>
              <p>
                We use your information to respond to your enquiries, share relevant service information, connect you with our partners, and—where you have consented—to contact you by phone, email, or SMS and to send you information about promotions and partner offerings.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold mt-4">Sharing and disclosure</h2>
              <p>
                We may share your information with trusted partners and service providers who assist in delivering our services. We do not sell your personal information to third parties for marketing purposes.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold mt-4">Security</h2>
              <p>
                We take reasonable steps to protect your personal information from unauthorised access, loss, or misuse.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold mt-4">Your choices</h2>
              <p>
                You can choose whether to agree to marketing communications and contact consent when filling our forms. You may request access to or correction of your personal information by contacting us.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold mt-4">Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised &quot;Last updated&quot; date.
              </p>
            </section>
            <p className="pt-4 text-muted-foreground">
              By using our services, you acknowledge that you have read and understood this Privacy Policy. For more details, see our{" "}
              <Link href="/terms" className="text-blue-600 hover:underline">
                Terms and Conditions
              </Link>
              .
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
