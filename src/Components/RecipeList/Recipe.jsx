import React, { useEffect, useState } from "react";

function Recipe(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const recipe = props.recipe;

  const tags = recipe.strTags;
  const newTags = tags?.replace(/,/g, ", ");

  const toggleExpand = () => {
    setIsExpanded(true);
    document.body.classList.add("stop-scroll");
  };

  const unToggleExpand = () => {
    setIsExpanded(false);
    document.body.classList.remove("stop-scroll");
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
      {/* // Recipe Card */}
      <div
        className={
          isExpanded
            ? "fixed top-0 z-20 bg-white text-slate-900 px-2 py-8 h-screen w-screen overflow-scroll flex flex-col justify-center items-center text-left gap-8"
            : "bg-white w-1/4 my-8 rounded-md text-slate-900 px-2 py-2 flex flex-col justify-top  items-left text-left"
        }
        onClick={() => {
          if (isExpanded) return;
          toggleExpand();
        }}
      >
        {/* // Close Button */}
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

        {/* Left Side Container */}
        <div
          className={
            isExpanded
              ? "flex flex-row bg-slate-100 justify-center items-center w-full"
              : "flex flex-col"
          }
        >
          <img
            className={isExpanded ? "rounded-lg w-1/3 h-1/2 object-cover" : "rounded-lg"}
            width="500"
            height="500"
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
          />

          {/* // Title */}
          <div>
            <h1
              className={
                isExpanded
                  ? "pt-2 bg-slate-100  font-medium text-5xl mx-12 font-serif w-fit"
                  : "pt-2 font-bold text-2xl font-serif w-5/6"
              }
            >
              {recipe.strMeal}
            </h1>
          </div>
        </div>
        {/* // Thumbnail */}

        {/* // Tags */}
        <h2
          className={
            isExpanded
              ? "hidden"
              : "text-md font-medium opacity-60 font-sans-serif"
          }
        >
          {newTags}
        </h2>

        <div className="flex flex-col w-2/3">
          {/* // Ingredients */}
          <h3 className={isExpanded ? "block font-semibold pt-4" : "hidden"}>
            Ingredients
          </h3>
          <ul className="grid grid-cols-2 list-disc flex flex-wrap w-2/3 gap-4 justify-center">
            {ingredients}
          </ul>

          {/* // Instructions */}
          <h3 className={isExpanded ? "block font-semibold pt-4" : "hidden"}>
            Instructions
          </h3>
          <p
            className={
              isExpanded
                ? "whitespace-pre-wrap block px-8 text-justify leading-8"
                : "hidden"
            }
          >
            {recipe.strInstructions}
          </p>

          {/* // View Source */}
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
        </div>

        {}
      </div>
    </>
  );
}

export default Recipe;
