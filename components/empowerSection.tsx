// components/EmpowerSection.tsx
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function EmpowerSection() {
  return (
    <section className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center section-margin">
      {/* Left Content */}
      <div>
        <Badge className="badge rounded-full mb-4">
          Empower
        </Badge>

        <h1 className="text-4xl font-bold leading-tight mb-4">
          Experience Unmatched<br />Quality and Support Today
        </h1>

        <p className="text-muted-foreground mb-6">
          Choosing our services means prioritizing your needs with tailored solutions.
          We are dedicated to delivering excellence and ensuring your satisfaction.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div>
            <h3 className="font-semibold mb-1">Personalized Solutions</h3>
            <p className="text-sm text-muted-foreground">
              We customize our services to fit your unique requirements and goals.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Expert Support</h3>
            <p className="text-sm text-muted-foreground">
              Our team of experts is here to assist you every step of the way.
            </p>
          </div>
        </div>

          <Button>Learn More</Button>
      
      </div>

      {/* Right Image Block */}
      <div className="bg-gray-200 w-full aspect-square flex items-center justify-center rounded-xl">
        <span className="text-gray-500 text-sm">Image Placeholder</span>
      </div>
    </section>
  )
}
