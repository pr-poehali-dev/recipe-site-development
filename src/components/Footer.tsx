import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Кулинария</h3>
            <p className="text-muted-foreground">
              Ваш источник вдохновения для приготовления вкусных блюд и открытия новых кулинарных возможностей.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-primary transition-colors">
                  Категории
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="text-muted-foreground hover:text-primary transition-colors">
                  Избранное
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  О нас
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-muted-foreground">
                <span>📧</span>
                <span className="ml-2">info@кулинария.рф</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <span>📱</span>
                <span className="ml-2">+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <span>📍</span>
                <span className="ml-2">г. Москва, ул. Примерная, д. 1</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Кулинария. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
