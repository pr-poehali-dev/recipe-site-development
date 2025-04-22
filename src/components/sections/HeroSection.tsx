import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Изысканные рецепты от <span className="text-primary">Лебединой кулинарии</span>
            </h1>
            <p className="text-lg mb-6 text-muted-foreground">
              Откройте для себя мир элегантных и вкусных блюд, которые покорят ваше сердце и украсят любой стол
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="sm:w-auto">
                Популярные рецепты
              </Button>
              <Button size="lg" variant="outline" className="sm:w-auto">
                Категории <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/swan-logo.svg" 
              alt="Лебединая кулинария" 
              className="w-3/4 max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
