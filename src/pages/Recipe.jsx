import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";


export default function Recipe() {


  let dtatParams = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");


  const fetchDeatails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${dtatParams.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);

    const detailsData = await data.json();
    setDetails(detailsData);
    console.log(detailsData)


  }


  useEffect(() => {
    fetchDeatails();

  }, [dtatParams.name]);

  return (

    <Container>
      <DetailWrapper className="row">
        <div className="col-md-6">

          <h2>
            {details.title}
          </h2>
          <img src={details.image} alt="" />
        </div>

        <Info className="col-md-6 mt-5">

          <Button
            className={`rounded-1 my-3 ${activeTab === 'instructions' ? 'active' : ''}`}
            onClick={() => setActiveTab("instructions")}
           
          >
            Instructions
          </Button>

          <Button
            className={`rounded-1 ${activeTab === 'ingredients' ? 'active' : ''}`}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
          {activeTab === 'instructions' && (
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
              <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
            </div>
          )}



{activeTab === 'ingredients' && (
  <ul>
            {details.extendedIngredients.map((ingredient, i) => {
              return (
                <li key={i}>{ingredient.original}</li>
              )
            })}
          </ul>
)};
          
        </Info>

      </DetailWrapper>
    </Container>

  )
}


const DetailWrapper = styled.div`
display:flex;

img{
  width:100%;
}
a{
  color: rgb(56,56,56);
}
margin-top: 10rem;
margin-bottom: 5rem;

.active{
  background: linear-gradient(35deg, #494949, #313131);
color:white;
}
h2{
margin-bottom: 2rem;
}
li{
font-size: 1.2rem;
line-height: 2.5rem;

}
ul{
margin-top: 2rem;
}
`;

const Button = styled.button`

  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;

`;

const Info = styled.div`

h3{
  margin-top:1rem;
  font-size:1.3rem;
}
`