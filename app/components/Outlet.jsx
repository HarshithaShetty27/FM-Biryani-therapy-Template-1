import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Car } from "lucide-react";

const outlets = [
  {
    id: 1,
    name: "Biriyani Therapy - City Center",
    address: "Shop 15, City Center Mall, MG Road, Bangalore - 560001",
    phone: "+91 98765 43210",
    hours: {
      weekday: "11:00 AM - 11:00 PM",
      weekend: "10:00 AM - 12:00 AM"
    },
    features: ["Dine-in", "Takeaway", "Home Delivery", "Parking Available"]
  },
  {
    id: 2,
    name: "Biriyani Therapy - Koramangala",
    address: "142, 4th Block, Koramangala, Bangalore - 560034",
    phone: "+91 98765 43211",
    hours: {
      weekday: "11:00 AM - 11:00 PM",
      weekend: "10:00 AM - 12:00 AM"
    },
    features: ["Dine-in", "Takeaway", "Home Delivery", "Valet Parking"]
  },
  {
    id: 3,
    name: "Biriyani Therapy - Whitefield",
    address: "Phoenix MarketCity, Whitefield, Bangalore - 560066",
    phone: "+91 98765 43212",
    hours: {
      weekday: "10:00 AM - 10:00 PM",
      weekend: "10:00 AM - 11:00 PM"
    },
    features: ["Dine-in", "Takeaway", "Food Court", "Mall Parking"]
  }
];

export const OutletInfo = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Visit Our
            <span className="text-primary"> Outlets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find us across the city. Each outlet brings you the same authentic 
            taste and warm hospitality that makes Biriyani Therapy special.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outlets.map((outlet) => (
            <Card key={outlet.id} className="hover:shadow-warm transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {outlet.name}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{outlet.address}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <a 
                      href={`tel:${outlet.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {outlet.phone}
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div className="text-muted-foreground">
                      <p>Mon-Fri: {outlet.hours.weekday}</p>
                      <p>Sat-Sun: {outlet.hours.weekend}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-muted">
                    <h4 className="font-semibold text-foreground mb-2">Available Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {outlet.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-spice-gold/10 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Car className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Free Home Delivery</h3>
          </div>
          <p className="text-lg text-muted-foreground mb-4">
            Enjoy our delicious biriyani in the comfort of your home. 
            Free delivery within 5km radius from any outlet.
          </p>
          <p className="text-primary font-semibold">
            Minimum order: ₹299 | Delivery time: 30-45 minutes
          </p>
        </div>
      </div>
    </section>
  );
};