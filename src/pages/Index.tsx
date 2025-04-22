import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RecipeCard from "@/components/RecipeCard";
import CategoryCard from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";

// Моковые данные для главной страницы
const featuredRecipes = [
  { id: "1", title: "Борщ украинский", time: 90, difficulty: "Средне", category: "Супы", image: "/placeholder.svg" },
  { id: "2", title: "Паста карбонара", time: 30, difficulty: "Легко", category: "Паста", image: "/placeholder.svg" },
  { id: "3", title: "Шарлотка с яблоками", time: 60, difficulty: "Легко", category: "Десерты", image: "/placeholder.svg" },
];

const popularCategories = [
  { id: "1", name: "Супы", count: 24, image: "/placeholder.svg" },
  { id: "2", name: "Салаты", count: 36, image: "/placeholder.svg" },
  { id: "3", name: "Десерты", count: 48, image: "/placeholder.svg" },
];

const recentRecipes = [
  { id: "4", title: "Котлеты по-киевски", time: 45, difficulty: "Средне", category: "Мясные блюда", image: "/placeholder.svg" },
  { id: "5", title: "Греческий салат", time: 15, difficulty: "Легко", category: "Салаты", image: "/placeholder.svg" },
  { id: "6", title: "Пицца Маргарита", time: 40, difficulty: "Средне", category: "Пицца", image: "/placeholder.svg" },
];

const Index = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="h-[500px] bg-cover bg-center"
          style={{ backgroundImage: 'url("/placeholder.svg")' }}
        ></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Откройте мир вкусных рецептов
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Тысячи рецептов для любой кухни и повода
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/categories">Просмотреть категории</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10" asChild>
                <Link to="/about">О нас</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Recipes */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Популярные рецепты</h2>
            <Link 
              to="/recipes" 
              className="text-primary flex items-center hover:underline"
            >
              Все рецепты <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRecipes.map(recipe => (
              <RecipeCard 
                key={recipe.id} 
                {...recipe} 
                isFavorite={favorites.includes(recipe.id)}
                onToggleFavorite={() => toggleFavorite(recipe.id)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Популярные категории</h2>
            <Link 
              to="/categories" 
              className="text-primary flex items-center hover:underline"
            >
              Все категории <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularCategories.map(category => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Recent Recipes */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Новые рецепты</h2>
            <Link 
              to="/recipes" 
              className="text-primary flex items-center hover:underline"
            >
              Все рецепты <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentRecipes.map(recipe => (
              <RecipeCard 
                key={recipe.id} 
                {...recipe} 
                isFavorite={favorites.includes(recipe.id)}
                onToggleFavorite={() => toggleFavorite(recipe.id)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Подпишитесь на нашу рассылку</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Получайте новые рецепты, кулинарные советы и сезонные идеи прямо на вашу почту
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ваш email" 
              className="px-4 py-2 rounded-md flex-grow text-foreground"
            />
            <Button variant="secondary">Подписаться</Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
