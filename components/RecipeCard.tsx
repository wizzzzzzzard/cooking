"use client";

import { FC, useState } from 'react';

interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface Props {
  recipe: Recipe;
}

const RecipeCard: FC<Props> = ({ recipe }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{recipe.title}</h2>
        <p className="text-gray-600 mt-2">{recipe.description}</p>
        <button
          onClick={() => setLiked(!liked)}
          className={`mt-4 px-3 py-1 rounded ${liked ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          {liked ? 'Liked' : 'Like'}
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
