import React from 'react';
import Style from './recipe.module.css';


const Recipe = ({title,calories,image,ingredients})=>{
return(
    <div className={Style.recipe}>
      <h1> {title}</h1>
       <p> Calories: {calories}</p>
        <ul>
        {ingredients.map(ing =>(
            <li>
            {ing.text}
            </li>
        ))}
        </ul>
        <img className={Style.image} src={image} alt="Food IMG"/>
    </div>
);
};

export default Recipe;