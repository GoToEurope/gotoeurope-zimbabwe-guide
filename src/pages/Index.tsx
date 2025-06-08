import { ArrowRight, Users, GraduationCap, Plane, Star, Phone, Mail, MapPin, Shield, Globe, CheckCircle, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const services = [{
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: "University Matching & Admission Support",
    description: "Find the perfect university match for your academic goals and career aspirations."
  }, {
    icon: <Plane className="h-8 w-8 text-primary" />,
    title: "Visa & Migration Assistance",
    description: "Complete support through the visa application and migration process."
  }, {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Pre-Departure Language & Cultural Training",
    description: "Prepare yourself for life in Europe with language and cultural orientation."
  }, {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: "Accommodation & Airport Pickup",
    description: "Secure housing and smooth arrival assistance in your destination country."
  }];
  const steps = ["Submit Your Interest via Online Form", "Book a Free 15-minute Zoom Consultation", "Choose Your University with Our Guidance", "We Handle Application Processing", "Get Support for Visa & Travel Logistics", "Begin Your Study & Work Journey in Europe"];
  const universities = [{
    name: "Sofia University 'St. Kliment Ohridski'",
    url: "https://www.uni-sofia.bg/"
  }, {
    name: "Medical University – Sofia",
    url: "https://www.mu-sofia.bg/"
  }, {
    name: "Technical University of Sofia",
    url: "https://www.tu-sofia.bg/"
  }, {
    name: "University of National and World Economy (UNWE)",
    url: "https://www.unwe.bg/"
  }, {
    name: "American University in Bulgaria (AUBG)",
    url: "https://www.aubg.edu/"
  }, {
    name: "Medical University – Plovdiv",
    url: "https://www.mu-plovdiv.bg/"
  }, {
    name: "Medical University – Varna",
    url: "https://www.mu-varna.bg/"
  }, {
    name: "Plovdiv University 'Paisii Hilendarski'",
    url: "https://uni-plovdiv.bg/"
  }, {
    name: "Varna University of Economics",
    url: "https://www.ue-varna.bg/"
  }, {
    name: "South-West University 'Neofit Rilski'",
    url: "https://www.swu.bg/"
  }, {
    name: "University of Architecture, Civil Engineering and Geodesy (UACEG)",
    url: "https://www.uacg.bg/"
  }, {
    name: "University of Chemical Technology and Metallurgy (UCTM)",
    url: "https://uctm.edu/"
  }, {
    name: "Agricultural University – Plovdiv",
    url: "https://www.au-plovdiv.bg/"
  }, {
    name: "University of Forestry – Sofia",
    url: "https://www.ltu.bg/"
  }, {
    name: "University of Food Technologies – Plovdiv",
    url: "https://uft-plovdiv.bg/"
  }, {
    name: "New Bulgarian University (NBU)",
    url: "https://www.nbu.bg/"
  }, {
    name: "Burgas Free University (BFU)",
    url: "https://www.bfu.bg/"
  }, {
    name: "University of Ruse 'Angel Kanchev'",
    url: "https://www.uni-ruse.bg/"
  }, {
    name: "Naval Academy 'Nikola Vaptsarov'",
    url: "https://www.naval-acad.bg/"
  }, {
    name: "Trakia University – Stara Zagora",
    url: "https://www.uni-sz.bg/"
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Welcome to <span className="text-yellow-300">GoToEurope.co.zw</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Your trusted Zimbabwean partner in accessing affordable and high-quality education across Europe. 
              Our mission is to guide you through every step of studying and working in the EU, starting with leading universities in Bulgaria.
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              Let us help you unlock new opportunities for a successful international career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3">
                Explore Universities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3">
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support in all areas of your European education journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-blue-50 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>
          <div className="mt-12 text-center">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    Additional Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    <li>• Part-Time Job Search Assistance</li>
                    <li>• Post-Study Internship Support</li>
                    <li>• EU Blue Card Pathway Guidance</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-6 w-6 text-primary" />
                    Why Choose Us?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    <li>• Local Zimbabwean expertise</li>
                    <li>• Partnerships with top EU universities</li>
                    <li>• End-to-end support services</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Your journey to European education in 6 simple steps</p>
          </div>
          <div className="space-y-8">
            {steps.map((step, index) => <div key={index} className="flex items-center gap-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>
                <p className="text-lg text-gray-800">{step}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Pricing Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with comprehensive support at every stage of your journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Pre-Application Fee Card */}
            <Card className="h-full border-2 border-primary/20 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-blue-100">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Pre-Application Administration Fee</CardTitle>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">$300</div>
                <CardDescription className="text-red-600 font-medium">Non-refundable</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 font-medium">This covers:</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Personal consultation and eligibility assessment
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    University program matching
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Review and formatting of application documents
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Preparation of motivation letter and CV
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Submission of applications to selected universities
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Communication with university admissions offices
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Continuous updates and application status tracking
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-l-blue-500">
                  <p className="text-blue-800 italic">
                    "This fee confirms your interest and covers our full support during the pre-application phase. It is non-refundable, regardless of the outcome."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Post-Acceptance Fee Card */}
            <Card className="h-full border-2 border-green-500/20 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center bg-gradient-to-r from-green-50 to-green-100">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Plane className="h-8 w-8 text-green-600" />
                  <CardTitle className="text-2xl">Post-Acceptance Processing Fee</CardTitle>
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2">$3,000</div>
                <CardDescription className="text-green-700 font-medium">Payable only after receiving University Acceptance Letter</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 font-medium">This includes:</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Immigration support & visa application guidance
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Enrollment finalization and fee coordination
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Support with opening a bank account in Bulgaria
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Health insurance guidance
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Accommodation booking and airport transfer
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Pre-departure checklist and orientation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Access to part-time job opportunities & work permits
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Assistance in settling during your first week in Bulgaria
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-l-yellow-500">
                  <p className="text-yellow-800 font-medium">
                    🚫 Tuition fees are paid directly to the university and are not included in this amount.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Summary Table */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-primary" />
                Total Payable to GoToEurope.co.zw
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Fee Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Amount</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Payment Timing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">Pre-Application</td>
                      <td className="py-3 px-4 font-semibold text-primary">$300</td>
                      <td className="py-3 px-4 text-gray-700">Upon registration</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">Post-Acceptance</td>
                      <td className="py-3 px-4 font-semibold text-green-600">$3,000</td>
                      <td className="py-3 px-4 text-gray-700">After university admission letter</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">Tuition Fee</td>
                      <td className="py-3 px-4 text-gray-700">Varies</td>
                      <td className="py-3 px-4 text-gray-700">Paid directly to the university</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Optional Add-ons */}
          <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-l-yellow-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-6 w-6 text-yellow-600" />
                Optional Add-ons (upon request)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-yellow-600" />
                  IELTS / Bulgarian language prep – From $50
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-yellow-600" />
                  Courier & notary services – At cost
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-yellow-600" />
                  Additional university options – $100 per extra institution beyond 3
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Top Universities in Bulgaria
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              GoToEurope.co.zw proudly partners with Bulgaria's top 20 universities. Click on each university below to learn more about their programs, admission process, tuition fees, and student life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((university, index) => <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">{university.name}</h3>
                  <a href={university.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-blue-700 font-medium">
                    Visit Website
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Permanent Residence Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Permanent Residence in Bulgaria – EU & Schengen Benefits
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Who Can Apply for Permanent Residence?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Zimbabwean students and non-EU nationals who:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Have legally resided in Bulgaria for at least 5 years
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Held long-stay or continuous residence permits (student years may count partially)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Show stable income, health insurance, accommodation, and basic integration
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <GraduationCap className="h-5 w-5 inline mr-2" />
                    <strong>Student years</strong> are typically counted at 50% weight, but can be complemented with post-study work or business residence to reach eligibility faster.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-6 w-6 text-primary" />
                  Benefits After Receiving Permanent Residence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">1. Long-Term EU Residency Rights</h4>
                    <p className="text-gray-700 mb-2">
                      You receive a Bulgarian Permanent Residence Permit, which may also qualify you for:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• EU Long-Term Residency under Directive 2003/109/EC</li>
                      <li>• Legal rights to move to another EU country (with application)</li>
                      <li>• Fewer barriers for EU-wide work permits or residence transfers</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">2. Visa-Free Travel Across the Entire Schengen Area</h4>
                    <p className="text-gray-700 mb-2">
                      Since March 2024, Bulgaria is officially part of Schengen by air and sea, which means:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• You can travel to any Schengen country without a visa for up to 90 days within 180 days</li>
                      <li>• Enjoy tourism, short-term business visits, family visits, and conferences across Germany, France, Italy, Netherlands, and more</li>
                    </ul>
                    <div className="mt-3 p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800">
                        <CheckCircle className="h-4 w-4 inline mr-1" />
                        As Schengen land access integration continues, full border-free travel will become even easier.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plane className="h-6 w-6 text-primary" />
                What This Means for Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Study in Bulgaria with a long-stay visa
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Transition to work or long-term stay
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Apply for permanent residence after 5 years
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Travel anywhere in Schengen without a visa
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Open path to future EU citizenship
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          </div>
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-l-primary">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />)}
              </div>
              <blockquote className="text-xl italic text-gray-700 mb-4">
                "Thanks to GoToEurope.co.zw, I'm now studying Medicine at Medical University in Plovdiv. Their service was fast, personal, and life-changing!"
              </blockquote>
              <p className="font-semibold text-gray-900">– Tafadzwa M.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl text-blue-100">Ready to start your European education journey? Get in touch today!</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-opacity-20 rounded-full flex items-center justify-center bg-yellow-400">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Address</h3>
              <p className="text-blue-100">31 Bath Road, Harare, Zimbabwe</p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-opacity-20 rounded-full flex items-center justify-center bg-green-600">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">WhatsApp</h3>
              <p className="text-blue-100">+263 719118661</p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-opacity-20 rounded-full flex items-center justify-center bg-red-600">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-blue-100">info@GoToEurope.co.zw</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-blue-100 mb-4">Follow us on social media:</p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" className="border-white text-gray-50 bg-blue-600 hover:bg-blue-500">
                Facebook
              </Button>
              <Button variant="outline" className="border-white text-white hover:text-primary bg-red-500 hover:bg-red-400">
                Instagram
              </Button>
              <Button variant="outline" className="border-white text-white hover:text-primary bg-sky-600 hover:bg-sky-500">
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-2xl font-bold text-yellow-300 mb-2">GoToEurope.co.zw</h3>
          <p className="text-gray-400">Your pathway to European education and career success</p>
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-sm text-gray-500">© 2024 GoToEurope.co.zw. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;
