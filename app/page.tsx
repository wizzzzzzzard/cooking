import Header from '@/components/Header';
import RecipeList from '@/components/RecipeList';

export default function HomePage() {
  const recipes = [
    { id: 1, title: 'Spaghetti Carbonara', description: 'Classic Italian pasta.', image: '/images/carbonara.jpg' },
    { id: 2, title: 'Chicken Curry', description: 'Spicy and savory.', image: '/images/chicken-curry.jpg' },
    { id: 3, title: 'Chocolate Cake', description: 'Rich and moist dessert.', image: '/images/chocolate-cake.jpg' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Cooking Recipes</h1>
        <RecipeList recipes={recipes} />
      </section>
    </main>
  );
}
