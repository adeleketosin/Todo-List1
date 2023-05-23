import React from "react";
import navbar from "./Navbar";
import Meal from './Meal';
import react, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
// import axios from 'axios';
// import React, {useEffect} from 'react';


const UserList = () => {
    const [search, setSearch] = useState("");
    const [Mymeal, setMeal] = useState([]);
    const searchMeal = (evt) => {
        if (evt.key == "Enter") 
        {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res=>res.json())
            .then(data=>{
                setMeal(data.meals)
            })
        }
    }
    return (
        <div className="main">
            <navbar />
            <div className="heading">
                <h1>Search Your Food Recipe</h1>
                <h3>Enter the Food Type<br/>
                 CAKE....PANEER....EGG...RICE...<br/>
                </h3>
                <input type="search" className="searchbar"
                    placeholder="Enter Food Name" onChange={(e) => 
                    setSearch(e.target.value)} value={search}
                     onKeyPress={searchMeal}></input>
            </div>
            <div className="containeruse">
                {
                    (Mymeal == null)? <p className="notfound">Not Found</p>: Mymeal.map((res)=>{
                        return(
                            <Meal data={res} />
                        )
                    })
                }
            </div>
        </div>
    )
};
export default UserList;

