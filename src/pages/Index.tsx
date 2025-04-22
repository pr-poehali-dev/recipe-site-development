import { HeroSection } from "@/components/sections/HeroSection";
import { RecipesSection } from "@/components/sections/RecipesSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { featuredRecipes, latestRecipes, popularCategories } from "@/data/mockData";

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Recipes Section */}
      <RecipesSection 
        title="Популярные рецепты"
        recipes={featuredRecipes}
        linkText="Все рецепты"
        linkUrl="/recipes"
      />

      {/* Categories Section */}
      <CategoriesSection categories={popularCategories} />

      {/* Latest Recipes Section */}
      <RecipesSection 
        title="Новые рецепты"
        recipes={latestRecipes}
        linkText="Смотреть все"
        linkUrl="/recipes/latest"
      />

      {/* Newsletter Section */}
      <NewsletterSection />
    </main>
  );
};

export default Index;
