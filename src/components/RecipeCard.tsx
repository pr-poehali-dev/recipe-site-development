import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardFooter,
  CardHeader 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface RecipeCardProps {
  id: string;
  title: string;
  image?: string;
  time: number;
  difficulty: "Легко" | "Средне" | "Сложно";
  category: string;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

const RecipeCard = ({
  id,
  title,
  image,
  time,
  difficulty,
  category,
  isFavorite = false,
  onToggleFavorite
}: RecipeCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow group">
      <CardHeader className="p-0">
        <Link to={`/recipe/${id}`}>
          <div className="relative h-48 overflow-hidden">
            <img 
              src={image || "/placeholder.svg"} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <Button 
              size="icon" 
              variant="ghost" 
              className="absolute top-2 right-2 bg-white/80 hover:bg-white/90 h-8 w-8 rounded-full"
              onClick={(e) => {
                e.preventDefault();
                onToggleFavorite?.();
              }}
            >
              <Heart 
                className={`h-5 w-5 ${isFavorite ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
              />
            </Button>
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/recipe/${id}`} className="hover:underline">
            <h3 className="font-bold text-lg line-clamp-2">{title}</h3>
          </Link>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="outline">{difficulty}</Badge>
          <Badge variant="outline">{time} мин</Badge>
          <Badge variant="secondary">{category}</Badge>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link to={`/recipe/${id}`}>Подробнее</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
