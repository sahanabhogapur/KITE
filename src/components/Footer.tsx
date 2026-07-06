import Link from "next/link"
import { GraduationCap } from "lucide-react"

export default function Footer() {
  const services = [
    { name: "Education Loan", href: "/services/education-loan" },
    { name: "Money Transfer", href: "/services/money-transfer" },
    { name: "Forex", href: "/services/forex" },
    { name: "Accommodation", href: "/services/accommodation" },
    { name: "Health Insurance", href: "/services/health-insurance" },
    { name: "Student ID Card", href: "/services/student-id-card" },
    { name: "SIM Card", href: "/services/sim-card" },
  ]

  return (
    <footer className="bg-gradient-to-r from-primary to-accent text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">Kite International Services</span>
            </Link>
            <p className="text-sm text-white/90">
              Your one-stop solution for all student essential services. Making your study abroad journey seamless.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/90 hover:text-white transition-colors font-medium"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-white/90 hover:text-white transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm text-white/90 hover:text-white transition-colors font-medium">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-white/90 hover:text-white transition-colors font-medium">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-white/90 hover:text-white transition-colors font-medium">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80">
          <p>&copy; {new Date().getFullYear()} Kite International Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}