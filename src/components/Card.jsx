import React from 'react';

const Card = ({meal}) => {
    return (
        <div className='card'>
                        <h4>{meal.strMeal}</h4>
                        <em>Origin : {meal.strArea} </em>
                        <img src={meal.strMealThumb} alt={'Photo de ' + meal.strMeal} />
                        <p>{meal.strInstructions}</p>
                        </div>
    );
};

export default Card;