import React, { useEffect, useState } from "react";


function Recipe(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const recipe = props.recipe;

  if (recipe.strSource && recipe.strSource !== "") {
    const source = new URL(recipe.strSource);
    console.log("From " + source.hostname);
  }

  const toggleExpand = () => {
    setIsExpanded(true);
    document.body.classList.add('stop-scroll')
  };

  const unToggleExpand = () => {
    setIsExpanded(false);
    document.body.classList.remove('stop-scroll')

  };

  useEffect(() => {}, [isExpanded]);

  const ingredients = [];

  for (let i = 1; i < 21; i++) {
    if (
      recipe[`strIngredient${i}`] !== "" &&
      recipe[`strIngredient${i}`] !== null
    ) {
      ingredients.push(
        <li className={isExpanded ? "list-item" : "hidden"} key={i}>
          {recipe[`strMeasure${i}`]} {recipe[`strIngredient${i}`]}
        </li>
      );
    }
  }

  return (
    <>
      <div
        className={
          isExpanded
            ? "w-screen h-screen fixed opacity-100 z-10 bg-white transition-opacity"
            : "hidden"
        }
        onClick={unToggleExpand}
      />
      <div
        className={
          isExpanded
            ? "fixed top-0 z-20 bg-white text-slate-900 px-2 py-2 w-screen h-screen overflow-auto flex flex-col justify-center items-center text-center"
            : "bg-white w-5/6 border border-black rounded-md text-slate-900  px-2 py-2 flex flex-col justify-center items-center text-center"
        }
        onClick={() => {
          if (isExpanded) return;
          toggleExpand();
        }}
      >
        <button
          className={
            isExpanded
              ? "absolute top-0 right-0 mt-8 mr-8 border rounded-md border-white bg-white h-6 w-6 flex items-center justify-center text-black"
              : "hidden"
          }
          onClick={unToggleExpand}
        >
          X
        </button>
        <h1 className="py-2 font-semibold">{recipe.strMeal}</h1>
        <img
          className="opacity-100"
          width="200"
          height="200"
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
        <h3 className={isExpanded ? "block font-semibold pt-4" : "hidden"}>
          Ingredients
        </h3>
        <ul className=" list-disc flex flex-wrap w-2/3 gap-8 justify-center">
          {ingredients}
        </ul>
        <h3 className={isExpanded ? "block font-semibold pt-4" : "hidden"}>
          Instructions
        </h3>
        <p
          className={
            isExpanded ? "whitespace-pre-wrap block px-8 text-justify leading-8" : "hidden"
          }
        >
          {recipe.strInstructions}
        </p>
        <a
          className={
            isExpanded && recipe.strSource
              ? "hover:underline hover:cursor-pointer opacity-50"
              : "hidden"
          }
          href={recipe.strSource}
        >
          View source
        </a>
        {}
      </div>
    </>
  );
}

export default Recipe;
