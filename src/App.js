import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Search from './components/Search'
import { GiKnifeFork} from 'react-icons/gi';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
//pages 
import Pages from './pages/Pages'
import Category from './components/Category';

//Router Dom
import {BrowserRouter as Router,Link } from 'react-router-dom';

function App() {
  return (

    <Container>
      <Router className="App">
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Deliciouss</Logo>
      </Nav>
      <Search/>
      <Category />
      <Pages />
    </Router>
    </Container>
  );
}

const Logo =styled(Link)`

text-decoration: none;
font-style: 1.5rem;
font-weight: 400;
font-family: 'Lobster Two' , cursive;
color: rgb(56,56,56);
`;



const Nav= styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: flex-start;
align-items: center;

svg{
  font-style: 2rem;
}`;

export default App;

