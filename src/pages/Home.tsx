import { ArrowRight, CheckCircle, DollarSign, TrendingDown, Heart, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  const tuitionComparison = [{
    degree: "Medicine",
    uk: "$45,000 - $65,000",
    bulgaria: "$8,000 - $12,000",
    savings: "Up to $53,000 per year"
  }, {
    degree: "Engineering",
    uk: "$28,000 - $45,000",
    bulgaria: "$4,000 - $8,000",
    savings: "Up to $37,000 per year"
  }, {
    degree: "Business",
    uk: "$25,000 - $40,000",
    bulgaria: "$3,500 - $6,000",
    savings: "Up to $34,000 per year"
  }];
  const livingCostComparison = [{
    category: "Accommodation",
    uk: "$800 - $1,500/month",
    bulgaria: "$200 - $400/month"
  }, {
    category: "Food & Groceries",
    uk: "$300 - $500/month",
    bulgaria: "$150 - $250/month"
  }, {
    category: "Transportation",
    uk: "$150 - $300/month",
    bulgaria: "$30 - $60/month"
  }, {
    category: "Total Monthly Living",
    uk: "$1,250 - $2,300",
    bulgaria: "$380 - $710"
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative text-white py-20 px-4 overflow-hidden">
        {/* Image Background */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'url(/lovable-uploads/e77b8160-4a16-4c34-be2b-c2cb3522011c.png)'
          }}
        ></div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-blue-600/70 to-blue-800/80 z-10"></div>
        
        {/* Content */}
        <div className="container mx-auto max-w-6xl relative z-20">
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
              <Button variant="outline" size="lg" className="border-white text-white hover:text-blue-900 px-8 py-3 bg-lime-600 hover:bg-lime-500">
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section - UK vs Bulgaria */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Bulgaria Over the UK?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Discover the incredible cost savings and unique opportunities that make Bulgaria the smarter choice for international education
            </p>
          </div>

          {/* Tuition Fee Comparison */}
          <div className="mb-16">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary to-blue-600 text-white">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <TrendingDown className="h-8 w-8" />
                  Annual Tuition Fee Comparison (USD)
                </CardTitle>
                <CardDescription className="text-blue-100">
                  See how much you can save by choosing Bulgarian universities
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Degree Program</TableHead>
                      <TableHead className="font-semibold text-red-600">UK Universities</TableHead>
                      <TableHead className="font-semibold text-green-600">Bulgarian Universities</TableHead>
                      <TableHead className="font-semibold text-primary">Annual Savings</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tuitionComparison.map((comparison, index) => <TableRow key={index}>
                        <TableCell className="font-medium">{comparison.degree}</TableCell>
                        <TableCell className="text-red-600 font-semibold">{comparison.uk}</TableCell>
                        <TableCell className="text-green-600 font-semibold">{comparison.bulgaria}</TableCell>
                        <TableCell className="text-primary font-bold">{comparison.savings}</TableCell>
                      </TableRow>)}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Living Cost Comparison */}
          <div className="mb-16">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Heart className="h-8 w-8" />
                  Cost of Living Comparison
                </CardTitle>
                <CardDescription className="text-green-100">
                  Affordable living without compromising on quality of life
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Living Expense</TableHead>
                      <TableHead className="font-semibold text-red-600">UK Average</TableHead>
                      <TableHead className="font-semibold text-green-600">Bulgaria Average</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {livingCostComparison.map((cost, index) => <TableRow key={index}>
                        <TableCell className="font-medium">{cost.category}</TableCell>
                        <TableCell className="text-red-600 font-semibold">{cost.uk}</TableCell>
                        <TableCell className="text-green-600 font-semibold">{cost.bulgaria}</TableCell>
                      </TableRow>)}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Key Advantages Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-700">Massive Cost Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Save $30,000-$50,000+ per year on tuition
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Living costs 60-70% lower than UK
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Total degree cost often less than 1 year in UK
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-700">EU Advantages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    EU-recognized degrees with global validity
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    Access to Erasmus+ exchange programs
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    Part-time work rights while studying
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle className="text-yellow-700">Pathway to EU Citizenship</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    Clear path to permanent residency
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    Citizenship possible after 5 years residence
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    EU citizenship = freedom to live/work in 27 countries
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Student Scenario */}
          <Card className="mb-8 bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle>Cost Scenario: 4-Year Medical Degree</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                <div className="p-4 bg-white rounded-lg shadow">
                  <h3 className="text-xl font-bold text-red-600 mb-2">Total Cost in UK</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Tuition ($50,000 × 4 years)</span>
                      <span className="font-semibold">$200,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Living ($1,800 × 48 months)</span>
                      <span className="font-semibold">$86,400</span>
                    </li>
                    <li className="flex justify-between font-bold border-t pt-2 mt-2">
                      <span>Total for UK Degree</span>
                      <span className="text-red-600">$286,400</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-white rounded-lg shadow">
                  <h3 className="text-xl font-bold text-green-600 mb-2">Total Cost in Bulgaria</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Tuition ($10,000 × 4 years)</span>
                      <span className="font-semibold">$40,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Living ($500 × 48 months)</span>
                      <span className="font-semibold">$24,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Total GoToEurope.co.zw Fees</span>
                      <span className="font-semibold">$3,300</span>
                    </li>
                    <li className="flex justify-between font-bold border-t pt-2 mt-2">
                      <span>Total for Bulgarian Degree</span>
                      <span className="text-green-600">$67,300</span>
                    </li>
                  </ul>
                </div>

                <div className="md:col-span-2 bg-blue-100 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">Your Total Savings:</span>
                    <span className="text-2xl font-bold text-primary">$219,100</span>
                  </div>
                  <p className="text-blue-800 mt-2 italic">
                    Study in Bulgaria and save enough to buy a house or start a business!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-8">
            <Button size="lg" className="bg-primary hover:bg-blue-700 text-white px-8 py-6 text-xl">
              Schedule Your Free Consultation
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <p className="mt-4 text-gray-600 italic">Discover how much you can save while getting a world-class education</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};

export default Home;
