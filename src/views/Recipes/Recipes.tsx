import axios from "axios";
import { useState } from "react";
import Spinner from "../../components/Spinner/Spinner";

export default function Recipes() {
  const [urlImage, setUrlImage] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipeName, setRecipeName] = useState<string>('');
  const [recipeContent, setRecipeContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleAddIngredient = (ingredient: string) => {
    if (ingredients.includes(ingredient) || ingredient.trim() === ''){
      setInputValue('');
      return;
    }
    setIngredients([...ingredients, ingredient]);
    setInputValue('');
  }

  const handleDeleteIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter(item => item !== ingredient));
  }

  const handleGetRecipe = async () => {
    setRecipeContent('');
    setLoading(true);
    if(ingredients.length === 0){
      setLoading(false);
      return;
    };
    const recipe = await axios.post(`${import.meta.env.VITE_API_URL}/recipes/suggestion`, {
      ingredients
    });
    setUrlImage('');
    // const unsplashAccessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
    // const unsplashResponse = await axios.get(`https://api.unsplash.com/search/photos?query=${recipe.data.data.recipeNameInEnglish}`, {
    //   headers: {
    //     Authorization: `Client-ID ${unsplashAccessKey}`,
    //   }
    // });
    // setUrlImage(unsplashResponse.data.results[0]?.urls?.regular);
    setRecipeName(recipe.data.data.recipeName);
    setRecipeContent(recipe.data.data.recipeHtml);
    setLoading(false);
  }

  return (
    <div className="p-4">
      <h1 className="font-bold text-5xl text-green-950">Crea tu receta con Quinowraps</h1>
      <p className="mt-4 text-lg text-black">
        Ingresa los ingredientes que tienes y te ayudaremos a crear una receta deliciosa con Quinowraps.
      </p>
      <div className="mt-4">
        <input
          type="text"
          className="mb-4 w-lg p-2 border border-green-900 rounded bg-green-900 text-white outline-none"
          placeholder="Agregar ingrediente"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => handleAddIngredient(inputValue)} className="bg-green-950 text-white p-2 rounded ml-2 w-44 cursor-pointer outline-none">Agregar</button>
        <br />
        <h2 className="font-semibold text-2xl text-green-950 mt-2">Ingredientes agregados:</h2>
        <br />
        <div className="flex flex-wrap w-full overflow-auto">
          {ingredients.map((ingredient, index) => (
            <span key={index} onClick={() => handleDeleteIngredient(ingredient)} className="inline-block bg-green-200 text-green-900 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 cursor-pointer select-none">
              {ingredient}
            </span>
          ))}
          {ingredients.length === 0 && (<p className="text-black">No hay ingredientes agregados.</p>)}
        </div>
        <button onClick={handleGetRecipe} className="bg-green-950 text-white p-2 rounded cursor-pointer outline-none mt-4 font-bold w-lg">Obtener receta</button>
        {loading && <Spinner />}
        {recipeContent.length > 0 && (
          <>
            <h2 className="font-bold mt-5 text-3xl text-green-950 mb-2">Receta sugerida: {recipeName}</h2>
            <div className="w-full mt-4 p-4 rounded bg-green-50">
              <div className="flex">
                {urlImage && (
                  <img src={urlImage} alt="Recipe" className="max-w-md rounded-lg shadow-md mr-4" />
                )}
                <div dangerouslySetInnerHTML={{ __html: recipeContent ?? '' }} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}