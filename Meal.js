import React from "react";
import food from './food.jpg';

const Meal = (getMeal) => {
    console.log(getMeal.data)
    return(
    <div className="card">
        <img src={getMeal.data.strMealThumb}/>
        <div className="info">
            <h2>{getMeal.data.strMeal}</h2>
            <p>{getMeal.data.strArea} food</p>
        </div>
        <div className="recipe">
            <h2>Recipe</h2>
            <p>{getMeal.data.strInstructions}</p>
            <img src={getMeal.data.strMealThumb} />
        </div>
    </div>
    )
};

export default Meal;
 