import React from "react";
import uuid from "react-uuid";

export default function RecipeList({ recipe }) {
  //* create div and map recipe props. generate map key with uuid.
  return (
    <div className="flex shrink content-start flex-wrap gap-2 justify-center py-8 min-h-screen">
      {recipe.map((r) => (
        <React.Fragment key={uuid()}>{r}</React.Fragment>
      ))}
    </div>
  );
}
