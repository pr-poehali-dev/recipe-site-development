import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  id: string;
  name: string;
  image?: string;
  count: number;
}

const CategoryCard = ({ id, name, image, count }: CategoryCardProps) => {
  return (
    <Link to={`/category/${id}`}>
      <Card className="overflow-hidden hover:shadow-md transition-shadow group">
        <div className="relative h-40 overflow-hidden">
          <img 
            src={image || "/placeholder.svg"} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
            <h3 className="font-bold text-white text-xl">{name}</h3>
            <p className="text-white/80 text-sm">{count} рецептов</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
