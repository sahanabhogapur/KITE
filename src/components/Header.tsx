"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-primary/20 bg-card/95 backdrop-blur-md shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 overflow-hidden rounded-md flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Kite International Services"
                width={200}
                height={200}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            {/* Desktop Title */}
            <span className="hidden sm:block text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Kite International Services
            </span>

            {/* Mobile Title */}
            <span className="block sm:hidden text-base font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              KITE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 xl:gap-10">
            <Link
              href="/"
              className="font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Home
            </Link>

            <Link
              href="/dashboard"
              className="font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Dashboard
            </Link>

            <Button asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-2 transition hover:bg-primary/10 md:hidden"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-primary/10 py-4 md:hidden">
            <nav className="flex flex-col gap-4">

              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-2 py-2 font-medium text-muted-foreground transition hover:bg-primary/10 hover:text-primary"
              >
                Home
              </Link>

              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-2 py-2 font-medium text-muted-foreground transition hover:bg-primary/10 hover:text-primary"
              >
                Dashboard
              </Link>

              <Button asChild className="w-full">
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </Button>

            </nav>
          </div>
        )}
      </div>
    </header>
  )
}