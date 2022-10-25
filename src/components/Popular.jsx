//Styled
import styled from "styled-components";

//Slides
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

//Hooks
import { useState, useEffect } from "react"
import{Link} from 'react-router-dom';

// //APIs
// import { RecipesRandom } from "../APIs/RecipesRandom";

function Popular() {
  const [recipesApi, setRecipesApi] = useState([]);

  useEffect(() => {
    RecipesRandom();
  }, []);

  const RecipesRandom = async () => {

    const check = localStorage.getItem("recipesApi");

    if (check) {
      setRecipesApi(JSON.parse(check));

    } else {

      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);

      const data = await api.json();

      localStorage.setItem("recipesApi", JSON.stringify(data.recipes));
      setRecipesApi(data.recipes);
    
    }

  };



  return (
    <div>

      <Wrapper>
        <h3>Popular Picks</h3>

        <Splide
          options={{
            autoWidth:true,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: "1rem",
          }}>
          {
            recipesApi.map((recipe, i) => {
              return (
                <SplideSlide key={i}>
                  <Card>
                    <Link to={'/recipe/'+recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                    </Link>
                  </Card>
                </SplideSlide>
              )
            })
          }
        </Splide>
      </Wrapper>


    </div>
  );

}


const Wrapper = styled.div`
margin: 4rem 0rem;
`;

const Card = styled.div`
min-height:20rem;
width:15rem;
border-radius:2rem;
overflow: hidden;
position:relative;

img{
  border-radius:2rem;
  position:absolute;
  left:0;
  width:100%;
  height:100%;
  obiect-fit:cover;
}

p{
  position:absolute;
  z-index:10;
  left:50%;
  bottom:0%;
  transform:translate(-50%, 0%);
  color:white;
  width:100%;
  text-align:center;
  font-weight:600;
  font-size:1rem;
  height:40%;
  display:flex;
  justify-content:center;
  align-items:center;
}
`;


const Gradient = styled.div`
z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0),rgba(0,0,0, 0.2));
`;
export default Popular