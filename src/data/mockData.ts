// Моковые данные для отображения на сайте

export interface RecipeType {
  id: number;
  title: string;
  image: string;
  category: string;
  time: string;
  difficulty: string;
  author: string;
  likes: number;
}

export interface CategoryType {
  id: number;
  name: string;
  image: string;
  count: number;
}

// Популярные рецепты
export const featuredRecipes: RecipeType[] = [
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

// Популярные категории
export const popularCategories: CategoryType[] = [
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

// Новые рецепты
export const latestRecipes: RecipeType[] = [
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
