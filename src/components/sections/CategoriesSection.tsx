import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { CategoryCard } from "@/components/CategoryCard";
import { CategoryType } from "@/data/mockData";

interface CategoriesSectionProps {
  categories: CategoryType[];
}

export const CategoriesSection = ({ categories }: CategoriesSectionProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Категории</h2>
          <Link to="/categories" className="text-primary font-medium flex items-center">
            Все категории <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map(category => (
            <CategoryCard 
              key={category.id} 
              id={category.id.toString()} 
              name={category.name} 
              image={category.image} 
              count={category.count} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
