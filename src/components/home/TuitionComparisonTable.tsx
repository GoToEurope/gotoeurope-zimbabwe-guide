
import { TrendingDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TuitionComparisonTable = () => {
  const tuitionComparison = [
    {
      degree: "Medicine",
      uk: "$45,000 - $65,000",
      bulgaria: "$8,000 - $12,000",
      savings: "Up to $53,000 per year"
    },
    {
      degree: "Engineering",
      uk: "$28,000 - $45,000",
      bulgaria: "$4,000 - $8,000",
      savings: "Up to $37,000 per year"
    },
    {
      degree: "Business",
      uk: "$25,000 - $40,000",
      bulgaria: "$3,500 - $6,000",
      savings: "Up to $34,000 per year"
    }
  ];

  return (
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
              {tuitionComparison.map((comparison, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{comparison.degree}</TableCell>
                  <TableCell className="text-red-600 font-semibold">{comparison.uk}</TableCell>
                  <TableCell className="text-green-600 font-semibold">{comparison.bulgaria}</TableCell>
                  <TableCell className="text-primary font-bold">{comparison.savings}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default TuitionComparisonTable;
