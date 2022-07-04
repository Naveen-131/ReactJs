import React,{useState} from 'react';
import logo from './logo.svg';

import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import './App.css';
import {ToastContainer ,toast } from 'react-toastify';

import { Container,Row,Col } from 'reactstrap';
import BuyPage from './Components/BuyPage';
import Cart from './Components/Cart';

function App() {

  const [cardItem, setCartItem] = useState([]);
  
  const addInCart = item =>{
    const isPresent = cardItem.findIndex(function (array) {
      return array.id === item.id;
    })
    if (isPresent !== -1) {
      toast("Already added in card", { type: "error" })
      return;
    }
    setCartItem([...cardItem, item]);
  };
  const buyNow = () => {
    setCartItem([])

    toast("Purchase Compelte",{type:"success"})
    
  }

  const removeItem = item => {
    setCartItem(cardItem.filter(singleItem => singleItem.id !== item.id))
  };


  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="8">
          <BuyPage addInCart={addInCart}/>
          </Col>
        <Col md="4">
          <Cart cartItem={cardItem}  removeItem={removeItem} buyNow={buyNow}  />
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
