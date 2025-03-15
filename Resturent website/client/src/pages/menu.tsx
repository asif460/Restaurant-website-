import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const menuItems = {
  appetizers: [
    { name: "Bruschetta", price: "8.99", description: "Grilled bread with tomatoes, garlic and basil" },
    { name: "Calamari Fritti", price: "12.99", description: "Crispy fried calamari with marinara sauce" }
  ],
  pasta: [
    { name: "Spaghetti Carbonara", price: "16.99", description: "Classic carbonara with pancetta and egg" },
    { name: "Penne Arrabbiata", price: "14.99", description: "Spicy tomato sauce with garlic and chili" }
  ],
  mains: [
    { name: "Osso Buco", price: "28.99", description: "Braised veal shanks with gremolata" },
    { name: "Chicken Marsala", price: "22.99", description: "Chicken breast in marsala wine sauce" }
  ]
};

export default function Menu() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Our Menu</h2>
      
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold mb-4">Appetizers</h3>
          <div className="grid gap-4">
            {menuItems.appetizers.map((item) => (
              <Card key={item.name}>
                <CardHeader>
                  <CardTitle className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="text-primary">${item.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">Pasta</h3>
          <div className="grid gap-4">
            {menuItems.pasta.map((item) => (
              <Card key={item.name}>
                <CardHeader>
                  <CardTitle className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="text-primary">${item.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">Main Courses</h3>
          <div className="grid gap-4">
            {menuItems.mains.map((item) => (
              <Card key={item.name}>
                <CardHeader>
                  <CardTitle className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="text-primary">${item.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
