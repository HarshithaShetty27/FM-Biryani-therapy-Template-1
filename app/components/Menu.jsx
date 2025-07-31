import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, Flame } from "lucide-react";

const menuItems = [
  {
    id: 1,
    name: "Chicken Biriyani",
    description: "Tender chicken pieces marinated in aromatic spices, layered with basmati rice",
    price: "₹299",
    image: "/chicken-biriyani.jpg",
    rating: 4.8,
    cookTime: "25 mins",
    spiceLevel: 2,
    isPopular: true,
  },
  {
    id: 2,
    name: "Mutton Biriyani",
    description: "Slow-cooked mutton with traditional Hyderabadi spices and saffron rice",
    price: "₹399",
    image: "/mutton-biriyani.jpg",
    rating: 4.9,
    cookTime: "35 mins",
    spiceLevel: 3,
    isSpecial: true,
  },
  {
    id: 3,
    name: "Vegetable Biriyani",
    description: "Fresh vegetables and paneer with fragrant basmati rice and cashews",
    price: "₹199",
    image: "/veg-biriyani.jpg",
    rating: 4.7,
    cookTime: "20 mins",
    spiceLevel: 1,
    isVeg: true,
  },
];

export const MenuHighlights = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-rice-cream to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Signature
            <span className="text-primary"> Biriyani</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafted with love, served with passion. Each biriyani is a masterpiece 
            of flavors that will transport you to culinary heaven.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {menuItems.map((item) => (
            <Card 
              key={item.id} 
              className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden bg-white"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.isPopular && (
                    <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </span>
                  )}
                  {item.isSpecial && (
                    <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-medium">
                      Chef's Special
                    </span>
                  )}
                  {item.isVeg && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Vegetarian
                    </span>
                  )}
                </div>

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {item.cookTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Flame className="h-4 w-4" />
                      {"🌶️".repeat(item.spiceLevel)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {item.price}
                  </span>
                  <Button variant="default" size="sm">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="px-8">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};