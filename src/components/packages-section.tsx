import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Star, Zap } from "lucide-react";

const packages = [
  {
    name: "Basic",
    price: "₹500",
    icon: <Package className="h-10 w-10 text-primary mb-4" />,
    features: [
      "1-3 Pages Website",
      "Basic Animations",
      "Contact Form",
      "Mobile Responsive",
      "3 Days Delivery",
    ],
    cta: "Get Started",
    delay: "0.2s",
    popular: false,
  },
  {
    name: "Standard",
    price: "₹1000",
    icon: <Star className="h-10 w-10 text-primary mb-4" />,
    features: [
      "Up to 5 Pages",
      "Advanced Animations",
      "Interactive Elements",
      "SEO Friendly",
      "5 Days Delivery",
      "Priority Support",
    ],
    cta: "Choose Standard",
    delay: "0.4s",
    popular: true,
  },
  {
    name: "Premium",
    price: "₹1500",
    icon: <Zap className="h-10 w-10 text-primary mb-4" />,
    features: [
      "Unlimited Pages",
      "Custom 3D Animations",
      "Full Backend Integration",
      "E-commerce Ready",
      "7 Days Delivery",
      "Dedicated Support",
    ],
    cta: "Go Premium",
    delay: "0.6s",
    popular: false,
  },
];

export function PackagesSection() {
  return (
    <section id="packages" className="py-20 md:py-28 animate-fadeIn section-mb">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-4xl md:text-5xl text-primary text-center mb-4 animate-slideInUp">
          My Website Packages
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 text-center mb-16 max-w-2xl mx-auto animate-slideInUp" style={{ animationDelay: '0.1s' }}>
          Choose a package that best suits your needs. All packages are crafted with care and focus on delivering a great digital experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card 
              key={pkg.name} 
              className={`shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] animate-slideInUp flex flex-col ${pkg.popular ? 'border-2 border-primary ring-4 ring-primary/20' : ''}`}
              style={{ animationDelay: pkg.delay }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-lg transform rotate-6">
                  Popular
                </div>
              )}
              <CardHeader className="items-center text-center pt-8 pb-4">
                {pkg.icon}
                <CardTitle className="font-headline text-3xl text-primary">{pkg.name}</CardTitle>
                <CardDescription className="font-headline text-4xl text-accent font-bold">{pkg.price}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-foreground/80 break-words">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button size="lg" className="w-full font-headline text-lg shadow-md hover:shadow-lg transition-shadow">
                  {pkg.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
