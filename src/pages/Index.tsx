import { Link } from "react-router-dom";
import { ChevronRight, Clock, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CategoryCard } from "@/components/CategoryCard";
import { RecipeCard } from "@/components/RecipeCard";

const Index = () => {
  // Временные данные для демонстрации
  const featuredRecipes = [
    {
      id: 1,
      title: "Лебединое озеро из клубники",
      image: "/placeholder.svg",
      category: "Десерты",
      time: "30 мин",
      difficulty: "Средне",
      author: "Анна Кузнецова",
      likes: 245
    },
    {
      id: 2,
      title: "Элегантный лебедь из заварного теста",
      image: "/placeholder.svg",
      category: "Выпечка",
      time: "90 мин",
      difficulty: "Сложно",
      author: "Михаил Петров",
      likes: 189
    },
    {
      id: 3,
      title: "Белоснежный суп-пюре",
      image: "/placeholder.svg",
      category: "Супы",
      time: "45 мин",
      difficulty: "Легко",
      author: "Елена Смирнова",
      likes: 132
    }
  ];

  const popularCategories = [
    {
      id: 1,
      name: "Десерты",
      image: "/placeholder.svg",
      count: 32
    },
    {
      id: 2,
      name: "Основные блюда",
      image: "/placeholder.svg",
      count: 45
    },
    {
      id: 3,
      name: "Салаты",
      image: "/placeholder.svg",
      count: 28
    }
  ];

  const latestRecipes = [
    {
      id: 4,
      title: "Грациозный салат с уткой",
      image: "/placeholder.svg",
      category: "Салаты",
      time: "20 мин",
      difficulty: "Легко",
      author: "Дмитрий Иванов",
      likes: 98
    },
    {
      id: 5,
      title: "Лебяжьи крылышки из слоеного теста",
      image: "/placeholder.svg",
      category: "Закуски",
      time: "40 мин",
      difficulty: "Средне",
      author: "Ольга Николаева",
      likes: 127
    },
    {
      id: 6,
      title: "Царский гусь с яблоками",
      image: "/placeholder.svg",
      category: "Мясные блюда",
      time: "120 мин",
      difficulty: "Сложно",
      author: "Сергей Васильев",
      likes: 210
    }
  ];

  return (
    <main>
      {/* Hero Section */}
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

      {/* Featured Recipes Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Популярные рецепты</h2>
            <Link to="/recipes" className="text-primary font-medium flex items-center">
              Все рецепты <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Категории</h2>
            <Link to="/categories" className="text-primary font-medium flex items-center">
              Все категории <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularCategories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Recipes Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Новые рецепты</h2>
            <Link to="/recipes/latest" className="text-primary font-medium flex items-center">
              Смотреть все <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
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
    </main>
  );
};

export default Index;
