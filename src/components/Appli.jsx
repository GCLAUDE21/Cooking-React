import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react'
import Card from './Card';

const Appli = () => {
    const [plat, setPlat] = useState([]);
    const [valuePlat, setInput] = useState("");

 useEffect( () =>  {
     axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + valuePlat,
      )
      .then((res) => setPlat(res.data.meals || []));
  }, [valuePlat]);



    return (
        <div className='Appli'>
            <input onChange={(e) => setInput(e.target.value)} type="text" id="inputPlat" placeholder="Tapez le nom d'un aliment (en anglais)"/>
            <ul className="plat-container">

                {plat.map((meal) => (
                    <Card key={meal.idMeal} meal={meal} />
                ))}

            </ul>
        </div>
    );
};

export default Appli;