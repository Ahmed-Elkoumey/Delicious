import React from 'react'
import { useState, useEffect } from 'react';
import {Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

//styling

export default function Searched() {


  const [searedRecipes, setSearedRecipes] = useState([]);
  let params = useParams();

  useEffect(() => {
    getSearched(params.search);
  }, [params.search])



  const getSearched = async (name) => {

    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);

    const recipes = await data.json();


    setSearedRecipes(recipes.results);



  }


  return (
    <Grid>
      {searedRecipes.map((recipe, i) => {
        return (
          <CardSearch key={i}>
             <Link to={"/recipe/"+recipe.id}>

            <img src={recipe.image} alt="" />
            <h4>{recipe.title}</h4>
             </Link>
          </CardSearch>
        )
      })}
    </Grid>
  )
}


const Grid = styled.div`
display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const CardSearch = styled.div`

img{
    width:100%;
    border-radius: 2rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;
  }
`;