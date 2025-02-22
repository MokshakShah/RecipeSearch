import { useState } from 'react'
import Search from './components/Search'
import FoodList from './components/FoodList';
import Nav from './components/Nav';
import './App.css';
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';
import FoodDetails from './components/FoodDetails';


// APIS at FoodDetails and Search

function App() {
const [foodData,setFoodData]=useState([]);

const [foodid,setfoodid]=useState("656329");


  return (
    
      <div className='App'>
       <h1 style={{ textAlign: 'center' }}>Welcome to Food App</h1>
       <Nav />
        <Search foodData={foodData} setFoodData={setFoodData}  />
        <Container>
          <InnerContainer>
            <FoodList setfoodid={setfoodid} foodData={foodData} />
          </InnerContainer>

          <InnerContainer>
            <FoodDetails foodid={foodid} />

          </InnerContainer>
        </Container>
      </div>
    
  )
}

export default App
