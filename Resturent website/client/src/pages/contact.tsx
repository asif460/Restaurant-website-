import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <p>123 Restaurant Street, Foodville, FC 12345</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <p>(555) 123-4567</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <p>info@labellacucina.com</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Input placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
