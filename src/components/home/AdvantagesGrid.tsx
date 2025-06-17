
import { CheckCircle, DollarSign, Globe, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdvantagesGrid = () => {
  return (
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
  );
};

export default AdvantagesGrid;
