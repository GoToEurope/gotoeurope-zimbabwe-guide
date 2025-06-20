
import { GraduationCap, Plane, CheckCircle, DollarSign, Star, ArrowRight, CreditCard, Building, Banknote, Shield, Home, ClipboardList, Briefcase, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Pricing Structure</h1>
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

            {/* Post-Acceptance Fee Card - Polished Version */}
            <Card className="h-full border-2 border-green-500/20 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center bg-gradient-to-r from-green-50 to-green-100">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CreditCard className="h-8 w-8 text-green-600" />
                  <CardTitle className="text-xl">Post-Acceptance Processing Fee</CardTitle>
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2">$3,000</div>
                <CardDescription className="text-green-700 font-medium">
                  Payable only after receiving your official University Acceptance Letter
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="h-px bg-gray-300 mb-4"></div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    What's Included in This One-Time Fee:
                  </h4>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">🛂</span>
                    <div>
                      <h5 className="font-semibold text-gray-900">Immigration Support & Visa Application Guidance</h5>
                      <p className="text-sm text-gray-600">Full assistance in preparing and submitting your Bulgarian Visa D application.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-lg">🏫</span>
                    <div>
                      <h5 className="font-semibold text-gray-900">University Enrollment Finalization</h5>
                      <p className="text-sm text-gray-600">Coordination with the university to complete registration and pay tuition securely.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-lg">🏦</span>
                    <div>
                      <h5 className="font-semibold text-gray-900">Bank Account Setup in Bulgaria</h5>
                      <p className="text-sm text-gray-600">Help with opening your student bank account for visa and daily expenses.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-lg">🛡️</span>
                    <div>
                      <h5 className="font-semibold text-gray-900">Health Insurance Assistance</h5>
                      <p className="text-sm text-gray-600">We guide you in selecting and purchasing the right health insurance for your visa and stay.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-lg">🏠</span>
                    <div>
                      <h5 className="font-semibold text-gray-900">Accommodation Booking + Airport Transfer</h5>
                      <p className="text-sm text-gray-600">Personalized support to find housing (dorm or private rental) + airport pickup upon arrival.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-lg">📋</span>
                    <div>
                      <h5 className="font-semibold text-gray-900">Pre-Departure Checklist & Orientation</h5>
                      <p className="text-sm text-gray-600">We prepare you with all the required documents, essentials, and cultural tips before departure.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-lg">💼</span>
                    <div>
                      <h5 className="font-semibold text-gray-900">Part-Time Job Opportunities & Work Permit Guidance</h5>
                      <p className="text-sm text-gray-600">Access to job openings, resume support, and steps for legally working while you study.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-lg">🤝</span>
                    <div>
                      <h5 className="font-semibold text-gray-900">Arrival Assistance & First Week Support</h5>
                      <p className="text-sm text-gray-600">We help you settle in, activate your SIM card, find shops, navigate campus, and more.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="h-px bg-gray-300 mb-4"></div>
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-l-green-500">
                    <p className="text-green-800 font-medium flex items-start gap-2">
                      <span className="text-lg">🔒</span>
                      No payment is required until you have your university acceptance in hand. This ensures transparency and protects your investment.
                    </p>
                  </div>
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

      <Footer />
    </div>
  );
};

export default Pricing;
