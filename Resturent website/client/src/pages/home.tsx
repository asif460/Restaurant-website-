import { Card, CardContent } from "@/components/ui/card";
import { UtensilsCrossed } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Welcome to La Bella Cucina</h2>
        <p className="text-lg text-muted-foreground">
          Experience authentic Italian cuisine in the heart of the city
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <UtensilsCrossed className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Our Story</h3>
            </div>
            <p className="text-muted-foreground">
              Founded in 1995, La Bella Cucina brings the warmth and flavors of traditional 
              Italian cooking to your table. Our recipes have been passed down through generations,
              ensuring an authentic dining experience.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <UtensilsCrossed className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Opening Hours</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
              <li>Saturday: 10:00 AM - 11:00 PM</li>
              <li>Sunday: 10:00 AM - 9:00 PM</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
