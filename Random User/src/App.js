import React,{useState,useEffect} from 'react';
import { Container, Row, Col, Card } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import axios from 'axios';
import MyCard from './MyCard';

function App() {

  const [details, setDetails] = useState({})
  
  const fetchDetails = async () => {
    const {data} = await axios.get("https://randomuser.me/api/")
    console.log("RESPONSE :", data)
    
    const details = data.results[0];
    setDetails(details);
  };

  useEffect(() => {
    fetchDetails()
  },[])


  return (
    <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <MyCard details={details}/>
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
