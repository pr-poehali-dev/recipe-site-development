import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Кулинария</span>
            <span className="ml-1 text-accent">🍽️</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="font-medium hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/categories" className="font-medium hover:text-primary transition-colors">
              Категории
            </Link>
            <Link to="/favorites" className="font-medium hover:text-primary transition-colors">
              Избранное
            </Link>
            <Link to="/about" className="font-medium hover:text-primary transition-colors">
              О нас
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative">
            <Input 
              type="text" 
              placeholder="Поиск рецептов..." 
              className="w-64 pr-8"
            />
            <Search className="w-4 h-4 absolute right-3 text-muted-foreground" />
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 py-3 border-t">
            <div className="flex items-center relative mb-4">
              <Input 
                type="text" 
                placeholder="Поиск рецептов..." 
                className="w-full pr-8"
              />
              <Search className="w-4 h-4 absolute right-3 text-muted-foreground" />
            </div>
            
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="font-medium hover:text-primary transition-colors px-1 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/categories" 
                className="font-medium hover:text-primary transition-colors px-1 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Категории
              </Link>
              <Link 
                to="/favorites" 
                className="font-medium hover:text-primary transition-colors px-1 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Избранное
              </Link>
              <Link 
                to="/about" 
                className="font-medium hover:text-primary transition-colors px-1 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                О нас
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
