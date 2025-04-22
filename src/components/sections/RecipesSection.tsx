import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { RecipeCard } from "@/components/RecipeCard";
import { RecipeType } from "@/data/mockData";

interface RecipesSectionProps {
  title: string;
  recipes: RecipeType[];
  linkText: string;
  linkUrl: string;
  className?: string;
}

export const RecipesSection = ({
  title,
  recipes,
  linkText,
  linkUrl,
  className = ""
}: RecipesSectionProps) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">{title}</h2>
          <Link to={linkUrl} className="text-primary font-medium flex items-center">
            {linkText} <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map(recipe => (
            <RecipeCard 
              key={recipe.id} 
              id={recipe.id.toString()} 
              title={recipe.title} 
              image={recipe.image}
              time={parseInt(recipe.time)} 
              difficulty={recipe.difficulty as "Легко" | "Средне" | "Сложно"} 
              category={recipe.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
