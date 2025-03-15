import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocation } from "wouter";

const NavTabs = () => {
  const [location, setLocation] = useLocation();

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
          La Bella Cucina
        </h1>
        <Tabs value={location} onValueChange={setLocation}>
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="/">Home</TabsTrigger>
            <TabsTrigger value="/menu">Menu</TabsTrigger>
            <TabsTrigger value="/contact">Contact</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </header>
  );
};

export default NavTabs;
