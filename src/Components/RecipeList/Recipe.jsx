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

  useEffect(() => {
    if (isExpanded) {
      document.body.classList.add("stop-scroll");
    } else {
      document.body.classList.remove("stop-scroll");
    }
  }, [isExpanded]);

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
            ? "fixed top-0 z-20 bg-white text-slate-900 px-2 py-8 h-screen w-screen overflow-scroll flex flex-col items-center text-left gap-8"
            : "bg-white w-96 my-8 rounded-md text-slate-900 px-2 py-2 flex flex-col justify-top  items-left text-left hover:cursor-pointer hover:scale-110 transition-transform ease-in-out duration-300"
        }
        onClick={() => {
          if (isExpanded) return;
          toggleExpand();
        }}
      >
        {/* Top */}
        {/* // Close Button */}
        <button
          className={
            isExpanded
              ? "absolute top-10 z-50 right-0 mt-8 mr-8 border rounded-full border-white bg-white h-6 w-6 flex items-center justify-center text-black"
              : "hidden"
          }
          onClick={unToggleExpand}
        >
          X
        </button>

        <div
          className={
            isExpanded
              ? " flex flex-row bg-slate-100 justify-center items-center w-full"
              : "flex flex-col"
          }
        >
          <div className={isExpanded ? "pb-24 mr-24 relative w-1/2 h-1/2" : ""}>
            {/* // Thumbnail */}

            <img
              className={
                isExpanded
                  ? ` w-[700px] h-[200px] max-w-none object-cover `
                  : "h-[300px] w-[300px] max-w-none rounded-lg"
              }
              loading="lazy"
              width="300"
              height="300"
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
            />

            {/* // Title */}
            <h1
              className={
                isExpanded
                  ? "shadow-md absolute -top-10 -right-40 bg-white p-4  font-medium text-5xl font-serif w-96"
                  : "pt-2 font-bold text-2xl font-serif w-5/6"
              }
            >
              {recipe.strMeal}
            </h1>

            {/* // Tags */}
            <h2
              className={
                isExpanded
                  ? "hidden"
                  : "text-md font-medium opacity-20 font-sans-serif"
              }
            >
              {newTags}
            </h2>
          </div>
        </div>

        <div className="flex flex-col w-2/3">
          {/* // Ingredients */}
          <h3 className={isExpanded ? "block font-semibold pt-4" : "hidden"}>
            Ingredients
          </h3>
          <ul className="pl-6 py-2 grid grid-cols-2 list-disc w-2/3 gap-4 justify-center">
            {ingredients}
          </ul>

          {/* // Instructions */}
          <h3 className={isExpanded ? "block font-semibold pt-4" : "hidden"}>
            Instructions
          </h3>
          <p
            className={
              isExpanded
                ? "whitespace-pre-wrap block text-justify leading-8"
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
