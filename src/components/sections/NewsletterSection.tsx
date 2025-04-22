import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const NewsletterSection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Подпишитесь на наши новости</h2>
          <p className="mb-6">
            Получайте лучшие рецепты и кулинарные советы на свою почту
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input 
              type="email" 
              placeholder="Ваш email" 
              className="bg-white text-black sm:w-3/4"
            />
            <Button 
              variant="secondary" 
              className="sm:w-1/4"
            >
              Подписаться
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
