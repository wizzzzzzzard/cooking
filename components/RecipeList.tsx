import { FC } from 'react';
import RecipeCard from '@/components/RecipeCard';

interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface Props {
  recipes: Recipe[];
}

const RecipeList: FC<Props> = ({ recipes }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
