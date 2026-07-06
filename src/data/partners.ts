export type PartnerBase = {
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
  whyChoose?: { title: string; description: string }[]
  supportedCurrencies?: string[]
}

export const partners = {
  educationLoan: [
    {
      id: 1,
      slug: "credila",
      name: "Credila Financial Services",
      logo: "/partners/credila.png",
      description:
        "Specialized education loan provider focused on helping students study abroad.",
      features: [
        "Higher Loan Amount",
        "Doorstep Documentation",
        "Fast Sanction",
        "Flexible Repayment",
      ],
      countries: ["Australia", "Canada", "USA", "UK", "Ireland"],
      bestFor: "Students requiring higher education loan amounts",
      interestRate: "As per Credila's prevailing education loan rates",
      website: "https://www.credila.com",
      utm: "",
      api: "",
    },
    {
      id: 2,
      slug: "axis-bank",
      name: "Axis Bank",
      logo: "/partners/axis.png",
      description:
        "Education loans for Indian students planning higher studies abroad with flexible repayment options.",
      features: [
        "Competitive Interest Rates",
        "Quick Loan Processing",
        "Flexible EMI Options",
        "Tax Benefits under Section 80E",
      ],
      countries: ["Australia", "Canada", "United States", "United Kingdom", "Germany"],
      bestFor: "Students seeking faster loan approval",
      interestRate: "As per Axis Bank's prevailing education loan rates",
      website: "https://www.axisbank.com/retail/loans/education-loan",
      utm: "",
      api: "",
    },
    {
      id: 3,
      slug: "icici-bank",
      name: "ICICI Bank",
      logo: "/partners/icici.png",
      description:
        "Education loans for undergraduate and postgraduate students studying at top universities worldwide.",
      features: [
        "Easy Documentation",
        "Fast Approval",
        "Flexible EMI",
        "Collateral-free options available",
      ],
      countries: ["Australia", "Canada", "United Kingdom", "United States", "Germany"],
      bestFor: "Students who want a trusted national bank with wide branch network",
      interestRate: "As per ICICI Bank's prevailing education loan rates",
      website: "https://www.icicibank.com/personal-banking/loans/education-loan",
      utm: "",
      api: "",
    },
    {
      id: 4,
      slug: "avanse",
      name: "Avanse Financial Services",
      logo: "/partners/avanse.png",
      description:
        "Dedicated education finance company offering loans for study abroad with minimal paperwork.",
      features: [
        "100% Finance Available",
        "Quick Disbursement",
        "No Margin Money Options",
        "Co-applicant Flexibility",
      ],
      countries: ["Australia", "Canada", "United Kingdom", "United States", "Ireland"],
      bestFor: "Students needing higher loan amounts with flexible co-applicant options",
      interestRate: "As per Avanse's prevailing education loan rates",
      website: "https://www.avanse.com",
      utm: "",
      api: "",
    },
    {
      id: 5,
      slug: "poonawalla-fincorp",
      name: "Poonawalla Fincorp",
      logo: "/partners/poonawalla.png",
      description:
        "Education loans designed for students pursuing degrees at recognized international institutions.",
      features: [
        "Competitive Rates",
        "Simple Application",
        "Flexible Tenure",
        "Pre-admission Loans",
      ],
      countries: ["Australia", "Canada", "United Kingdom", "United States"],
      bestFor: "Students looking for pre-admission loan support",
      interestRate: "As per Poonawalla Fincorp's prevailing rates",
      website: "https://poonawallafincorp.com",
      utm: "",
      api: "",
    },
    {
      id: 6,
      slug: "union-bank",
      name: "Union Bank of India",
      logo: "/partners/unionbank.png",
      description:
        "Government-backed education loans with attractive interest rates for study abroad programs.",
      features: [
        "Low Interest Rates",
        "Wide Branch Network",
        "Moratorium Period",
        "Section 80E Tax Benefits",
      ],
      countries: ["Australia", "Canada", "United Kingdom", "United States", "Germany"],
      bestFor: "Cost-conscious students preferring public sector bank rates",
      interestRate: "As per Union Bank's prevailing education loan rates",
      website: "https://www.unionbankofindia.co.in/english/loans.aspx",
      utm: "",
      api: "",
    },
    {
      id: 7,
      slug: "yes-bank",
      name: "YES Bank",
      logo: "/partners/yesbank.png",
      description:
        "Education loans with streamlined processing for students heading to top global destinations.",
      features: [
        "Quick Processing",
        "Competitive Rates",
        "Flexible Repayment",
        "Online Application",
      ],
      countries: ["Australia", "Canada", "United Kingdom", "United States"],
      bestFor: "Students who prefer digital-first loan application",
      interestRate: "As per YES Bank's prevailing education loan rates",
      website: "https://www.yesbank.in/personal-banking/yes-individual/loans/education-loan",
      utm: "",
      api: "",
    },
    {
      id: 8,
      slug: "sbi",
      name: "State Bank of India",
      logo: "/partners/sbi.png",
      description:
        "India's largest bank offering global education loans with extensive branch support nationwide.",
      features: [
        "Lowest Interest Rates",
        "Largest Branch Network",
        "Moratorium During Study",
        "Government Scheme Benefits",
      ],
      countries: ["Australia", "Canada", "United Kingdom", "United States", "Germany", "Ireland"],
      bestFor: "Students seeking the most affordable public sector bank loan",
      interestRate: "As per SBI's prevailing education loan rates",
      website: "https://sbi.co.in/web/personal-banking/loans/education-loans",
      utm: "",
      api: "",
    },
    {
      id: 9,
      slug: "prodigy-finance",
      name: "Prodigy Finance",
      logo: "/partners/prodigy.png",
      description:
        "International lender offering collateral-free loans based on future earning potential — no co-signer required.",
      features: [
        "No Collateral Required",
        "No Co-signer Needed",
        "Future Income Based",
        "Global University Network",
      ],
      countries: ["United Kingdom", "United States", "Canada", "Australia", "Germany"],
      bestFor: "International students without Indian co-applicants or collateral",
      interestRate: "Variable rates based on profile and destination",
      website: "https://prodigyfinance.com",
      utm: "",
      api: "",
    },
    {
      id: 10,
      slug: "canara-bank",
      name: "Canara Bank",
      logo: "/partners/canara.png",
      description:
        "Affordable education loans for study abroad with flexible repayment and government-backed schemes.",
      features: [
        "Attractive Interest Rates",
        "Wide Coverage",
        "Moratorium Period",
        "Simple Documentation",
      ],
      countries: ["Australia", "Canada", "United Kingdom", "United States"],
      bestFor: "Students seeking reliable public sector bank financing",
      interestRate: "As per Canara Bank's prevailing education loan rates",
      website: "https://canarabank.com",
      utm: "",
      api: "",
    },
    {
      id: 11,
      slug: "bank-of-baroda",
      name: "Bank of Baroda",
      logo: "/partners/bob.png",
      description:
        "Comprehensive education loans covering tuition, living expenses, and travel for overseas study.",
      features: [
        "Competitive Rates",
        "Flexible Tenure",
        "Tax Benefits",
        "Nationwide Branch Access",
      ],
      countries: ["Australia", "Canada", "United Kingdom", "United States", "Germany"],
      bestFor: "Students who want a trusted PSU bank with full expense coverage",
      interestRate: "As per Bank of Baroda's prevailing education loan rates",
      website: "https://bankofbaroda.in/personal-banking/loans/education-loan",
      utm: "",
      api: "",
    },
    {
      id: 12,
      slug: "idfc-first-bank",
      name: "IDFC FIRST Bank",
      logo: "/partners/idfc.png",
      description:
        "Education loans with customer-friendly terms and quick digital processing for study abroad.",
      features: [
        "Quick Digital Process",
        "Competitive Rates",
        "Flexible EMI",
        "Dedicated Relationship Manager",
      ],
      countries: ["Australia", "Canada", "United Kingdom", "United States"],
      bestFor: "Students who value personalized service and fast processing",
      interestRate: "As per IDFC FIRST Bank's prevailing education loan rates",
      website: "https://www.idfcfirstbank.com/personal-banking/loans/education-loan",
      utm: "",
      api: "",
    },
  ] satisfies PartnerBase[],

  accommodation: [
    {
      id: 1,
      slug: "casita",
      name: "Casita",
      logo: "/partners/casita.png",
      description: "Your gateway to seamless student living worldwide",
      features: ["Quality assurance", "Easy booking", "24/7 support", "Community atmosphere"],
      countries: ["Australia", "United Kingdom", "United States", "Canada", "Ireland", "Germany"],
      website: "https://www.casita.com",
      utm: "https://www.casita.com/student-accommodation?utm_source=kite_international&utm_medium=referral&utm_campaign=student_portal",
      api: "",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=400&fit=crop",
      brandStory:
        "Casita is your trusted partner in finding the perfect home away from home. With accommodation options tailored to student needs, Casita ensures a smooth transition into student life with quality, safety, and convenience at every step.",
      locationsHeading: "Popular Student Cities",
      locationsText:
        "Casita offers student housing in Melbourne, Sydney, London, Manchester, New York, Toronto, Dublin, Berlin, and more — close to major universities with flexible lease terms.",
      amenitiesText:
        "Fully furnished rooms, high-speed internet, laundry facilities, communal areas, and 24/7 security. Options range from private studios to shared apartments.",
      whyChoose: [
        { title: "Quality Assurance", description: "Every property is handpicked to meet rigorous standards for safety and comfort." },
        { title: "Easy Booking", description: "Browse, compare, and book accommodation online in minutes." },
        { title: "24/7 Support", description: "Dedicated support team available throughout your stay." },
        { title: "Community", description: "Connect with fellow international students and build lasting friendships." },
      ],
    },
    {
      id: 2,
      slug: "amber",
      name: "Amber",
      logo: "/partners/amber.png",
      description: "Find your perfect student home near university — no booking fees",
      features: ["No booking fees", "Virtual tours", "Price match guarantee", "Verified listings"],
      countries: ["United Kingdom", "Australia", "United States", "Canada", "Germany", "Netherlands"],
      website: "https://amberstudent.com",
      utm: "https://amberstudent.com/?utm_source=kite_international&utm_medium=referral&utm_campaign=student_portal",
      api: "",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=400&fit=crop",
      brandStory:
        "Amber Student helps you find and book verified accommodation near your university with transparent pricing and no hidden booking fees.",
      locationsHeading: "Explore Locations",
      locationsText:
        "London, Birmingham, Sydney, Melbourne, Berlin, Amsterdam, Toronto, and more — all close to universities and transport links.",
      amenitiesText:
        "Furnished rooms, Wi-Fi, utilities, common spaces, and virtual tours available for most listings.",
      whyChoose: [
        { title: "No Booking Fees", description: "Book without extra charges — transparent student-friendly pricing." },
        { title: "Virtual Tours", description: "Explore properties online before you commit." },
        { title: "Price Match", description: "Found it cheaper elsewhere? Amber will match the price." },
      ],
    },
    {
      id: 3,
      slug: "uniacco",
      name: "UniAcco",
      logo: "/partners/uniacco.png",
      description: "Global student accommodation platform with exclusive deals and instant booking",
      features: ["Exclusive deals", "Instant booking", "Price guarantee", "Free cancellation"],
      countries: ["United Kingdom", "Australia", "United States", "Canada", "Ireland"],
      website: "https://uniacco.com",
      utm: "https://uniacco.com/?utm_source=kite_international&utm_medium=referral&utm_campaign=student_portal",
      api: "",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=400&fit=crop",
      brandStory:
        "UniAcco connects students with verified housing worldwide, offering exclusive discounts and a hassle-free booking experience.",
      locationsHeading: "Global Coverage",
      locationsText:
        "Properties across the UK, Australia, USA, Canada, and Ireland in major university cities.",
      amenitiesText:
        "All-inclusive bills, furnished rooms, Wi-Fi, and secure access at partner properties.",
      whyChoose: [
        { title: "Exclusive Deals", description: "Student-only discounts not available on other platforms." },
        { title: "Instant Booking", description: "Secure your room with immediate confirmation." },
        { title: "Free Cancellation", description: "Flexible cancellation on eligible bookings." },
      ],
    },
    {
      id: 4,
      slug: "university-living",
      name: "University Living",
      logo: "/partners/universityliving.png",
      description: "Premium student housing with personalized assistance for international students",
      features: ["Personal advisor", "Verified properties", "Best price guarantee", "Flexible terms"],
      countries: ["United Kingdom", "Australia", "United States", "Canada", "Ireland", "Germany"],
      website: "https://www.universityliving.com",
      utm: "https://www.universityliving.com/?utm_source=kite_international&utm_medium=referral&utm_campaign=student_portal",
      api: "",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=400&fit=crop",
      brandStory:
        "University Living provides end-to-end support for international students — from property search to move-in — with a dedicated advisor at every step.",
      locationsHeading: "Study Destinations",
      locationsText:
        "Accommodation in 250+ cities including London, Sydney, New York, Toronto, Dublin, and Berlin.",
      amenitiesText:
        "Purpose-built student residences and private apartments with modern amenities and all-inclusive options.",
      whyChoose: [
        { title: "Personal Advisor", description: "A dedicated expert guides you through the entire booking process." },
        { title: "Verified Properties", description: "Every listing is checked for quality, safety, and legitimacy." },
        { title: "Best Price", description: "Price match guarantee on comparable properties." },
      ],
    },
    {
      id: 5,
      slug: "unilodgers",
      name: "UniLodgers",
      logo: "/partners/unilodgers.png",
      description: "World's largest student accommodation booking platform",
      features: ["Verified properties", "Instant booking", "24/7 support", "Wide selection"],
      countries: ["United Kingdom", "Australia", "United States", "Canada", "Ireland"],
      website: "https://www.unilodgers.com",
      utm: "https://www.unilodgers.com/?utm_source=kite_international&utm_medium=referral&utm_campaign=student_portal",
      api: "",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=400&fit=crop",
      brandStory:
        "UniLodgers is the world's largest student accommodation platform, helping international students find verified, safe housing with instant online booking.",
      locationsHeading: "Explore Locations",
      locationsText:
        "London, Manchester, Sydney, Melbourne, Dublin, New York, Toronto, and Vancouver with flexible lease terms.",
      amenitiesText:
        "Fully furnished rooms, high-speed Wi-Fi, secure access, common areas, and on-site support.",
      whyChoose: [
        { title: "Verified Properties", description: "Every listing meets strict quality and safety standards." },
        { title: "Instant Booking", description: "Secure your room online with instant confirmation." },
        { title: "24/7 Support", description: "Round-the-clock assistance for bookings and stay issues." },
      ],
    },
    {
      id: 6,
      slug: "uhomes",
      name: "Uhomes",
      logo: "/partners/uhomes.png",
      description: "Smart student housing search with AI-powered recommendations",
      features: ["AI recommendations", "Price comparison", "Virtual viewings", "Secure payments"],
      countries: ["United Kingdom", "Australia", "United States", "Canada"],
      website: "https://en.uhomes.com",
      utm: "https://en.uhomes.com/?utm_source=kite_international&utm_medium=referral&utm_campaign=student_portal",
      api: "",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
      brandStory:
        "Uhomes uses smart technology to match students with the best accommodation options based on budget, location, and preferences.",
      locationsHeading: "Key Markets",
      locationsText:
        "Student housing across the UK, Australia, USA, and Canada near top-ranked universities.",
      amenitiesText:
        "Compare listings side-by-side with transparent pricing, photos, and virtual viewings.",
      whyChoose: [
        { title: "Smart Matching", description: "AI-powered recommendations based on your preferences and budget." },
        { title: "Price Comparison", description: "Compare multiple properties to find the best value." },
        { title: "Secure Payments", description: "Book safely with protected payment processing." },
      ],
    },
  ] satisfies PartnerBase[],

  moneyTransfer: [
    {
      id: 1,
      slug: "flywire",
      name: "Flywire",
      logo: "/partners/flywire.png",
      description: "Trusted by universities worldwide for tuition and fee payments",
      features: ["University partnerships", "Multi-currency", "Real-time tracking", "Competitive rates"],
      countries: ["United Kingdom", "Australia", "United States", "Canada", "Germany", "Ireland"],
      bestFor: "Paying university tuition and official fees directly",
      website: "https://www.flywire.com",
      utm: "https://www.flywire.com/?utm_source=kite_international&utm_medium=referral&utm_campaign=student_portal",
      api: "",
    },
    {
      id: 2,
      slug: "convera",
      name: "Convera",
      logo: "/partners/convera.png",
      description: "Global payments platform for education and living expense transfers",
      features: ["Bulk payments", "Competitive FX rates", "Regulatory compliance", "Dedicated support"],
      countries: ["United Kingdom", "Australia", "United States", "Canada", "Ireland", "New Zealand"],
      bestFor: "Large tuition payments and recurring living expense transfers",
      website: "https://www.convera.com",
      utm: "https://www.convera.com/?utm_source=kite_international&utm_medium=referral&utm_campaign=student_portal",
      api: "",
    },
    {
      id: 3,
      slug: "easy-transfer",
      name: "Easy Transfer",
      logo: "/partners/easytransfer.png",
      description: "Student-focused international transfers with low fees and fast delivery",
      features: ["Low transfer fees", "Fast processing", "Student discounts", "Mobile app"],
      countries: ["United Kingdom", "Australia", "United States", "Canada", "Ireland"],
      bestFor: "Quick personal transfers for living expenses",
      website: "https://www.easytransfer.cn",
      utm: "https://www.easytransfer.cn/?utm_source=kite_international&utm_medium=referral&utm_campaign=student_portal",
      api: "",
    },
    {
      id: 4,
      slug: "orient-exchange",
      name: "Orient Exchange",
      logo: "/partners/orient.png",
      description: "Reliable forex and remittance services for students heading abroad",
      features: ["Competitive rates", "Branch network", "Same-day transfers", "Student packages"],
      countries: ["United Kingdom", "Australia", "United States", "Canada", "Germany", "Ireland"],
      bestFor: "Students who prefer in-person support with competitive exchange rates",
      website: "https://www.orientexchange.in",
      utm: "https://www.orientexchange.in/?utm_source=kite_international&utm_medium=referral&utm_campaign=student_portal",
      api: "",
    },
  ] satisfies PartnerBase[],

  forex: [
    {
      id: 1,
      slug: "bookmyforex",
      name: "BookMyForex",
      logo: "/partners/bookmyforex.png",
      description: "India's largest online forex marketplace — best rates with free home delivery",
      features: ["Best rate guarantee", "Free home delivery", "Live order tracking", "Multi-currency card"],
      countries: ["India"],
      bestFor: "Students who want the best exchange rates with doorstep delivery",
      supportedCurrencies: ["USD", "GBP", "EUR", "AUD", "CAD", "NZD", "SGD", "AED", "JPY"],
      website: "https://www.bookmyforex.com",
      utm: "https://www.bookmyforex.com/?utm_source=kite_international&utm_medium=referral&utm_campaign=student_portal",
      api: "",
    },
    {
      id: 2,
      slug: "thomas-cook",
      name: "Thomas Cook Forex",
      logo: "/partners/thomascook.png",
      description: "Trusted forex services with global presence and multi-currency travel cards",
      features: ["Multi-currency card", "Competitive rates", "Wide branch network", "Travel insurance add-ons"],
      countries: ["India", "United Kingdom", "Australia"],
      bestFor: "Students who want a prepaid forex card plus cash for initial expenses",
      supportedCurrencies: ["USD", "GBP", "EUR", "AUD", "CAD", "AED", "SGD"],
      website: "https://www.thomascook.in/foreign-exchange",
      utm: "https://www.thomascook.in/foreign-exchange?utm_source=kite_international&utm_medium=referral&utm_campaign=student_portal",
      api: "",
    },
    {
      id: 3,
      slug: "orient-exchange-forex",
      name: "Orient Exchange",
      logo: "/partners/orient.png",
      description: "Student-friendly forex with competitive rates and branch support across India",
      features: ["Student packages", "Competitive rates", "Branch pickup", "Same-day service"],
      countries: ["India"],
      bestFor: "Students who prefer visiting a branch for forex and travel cards",
      supportedCurrencies: ["USD", "GBP", "EUR", "AUD", "CAD", "AED"],
      website: "https://www.orientexchange.in",
      utm: "https://www.orientexchange.in/forex?utm_source=kite_international&utm_medium=referral&utm_campaign=student_portal",
      api: "",
    },
  ] satisfies PartnerBase[],
}

export const FOREX_CURRENCIES = [
  { code: "USD", name: "US Dollar", flag: "🇺🇸" },
  { code: "GBP", name: "British Pound", flag: "🇬🇧" },
  { code: "EUR", name: "Euro", flag: "🇪🇺" },
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺" },
  { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦" },
  { code: "NZD", name: "New Zealand Dollar", flag: "🇳🇿" },
  { code: "SGD", name: "Singapore Dollar", flag: "🇸🇬" },
  { code: "AED", name: "UAE Dirham", flag: "🇦🇪" },
  { code: "JPY", name: "Japanese Yen", flag: "🇯🇵" },
  { code: "CHF", name: "Swiss Franc", flag: "🇨🇭" },
]
