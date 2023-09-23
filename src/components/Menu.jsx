import React from "react";
import Recipe from "./Recipe";


function Menu({ recipes }) {
  return (
    <article>
      <header>
        <h1>Delicious Recipes</h1>
      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe 
            key={i}
            name={recipe.name}
            ingredients={recipe.ingredients}
            steps={recipe.steps}
           />
        ))}
      </div>
    </article>
  );
}

export default Menu;

