import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface PackageCardProps {
  title: string;
  description: string;
  image: string;
}

export default function PackageCard({
  title,
  description,
  image,
}: PackageCardProps) {
  return (
    <Card className="w-full max-w-xl min-w-sm py-0">
      <CardContent className="p-4 flex flex-col items-center text-center">
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md mb-4">
          <img
            src={image}
            alt="Placeholder Image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
