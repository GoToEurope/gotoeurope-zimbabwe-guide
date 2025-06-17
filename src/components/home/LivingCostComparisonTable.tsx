
import { Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const LivingCostComparisonTable = () => {
  const livingCostComparison = [
    {
      category: "Accommodation",
      uk: "$800 - $1,500/month",
      bulgaria: "$200 - $400/month"
    },
    {
      category: "Food & Groceries",
      uk: "$300 - $500/month",
      bulgaria: "$150 - $250/month"
    },
    {
      category: "Transportation",
      uk: "$150 - $300/month",
      bulgaria: "$30 - $60/month"
    },
    {
      category: "Total Monthly Living",
      uk: "$1,250 - $2,300",
      bulgaria: "$380 - $710"
    }
  ];

  return (
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
              {livingCostComparison.map((cost, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{cost.category}</TableCell>
                  <TableCell className="text-red-600 font-semibold">{cost.uk}</TableCell>
                  <TableCell className="text-green-600 font-semibold">{cost.bulgaria}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default LivingCostComparisonTable;
