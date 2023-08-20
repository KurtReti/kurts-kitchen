import React from "react";
import uuid from "react-uuid";

export default function RecipeList({ recipe }) {
  //* create div and map recipe props to recipelist. generate map key with uuid.
  return (
    <div className="bg-white flex shrink content-start flex-wrap gap-2 justify-around py-8 min-h-screen">
      {recipe.map((r) => (
        <React.Fragment key={uuid()}>{r}</React.Fragment>
      ))}
    </div>
  );
}
