
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CostScenario = () => {
  return (
    <>
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
    </>
  );
};

export default CostScenario;
