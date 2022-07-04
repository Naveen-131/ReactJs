import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardItem from './CartItem';

import { random, commerce } from "faker"
import { Container, Col, Row } from 'reactstrap';

const apiKey = "Insert keyt here"

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"

const localUrl="http://myjson.dit.upm.es/api/bins/ou3"
const BuyPage = ({ addInCart }) => {

    const [product, setProduct] = useState([])
    
    // const fetchPhotos = async () => {
    //     const respone = await axios.get(url, {
    //         header: {
    //             Authorization:apiKey
    //         }
    //     })
    // }

    const fetchPhotos = async () => {
        const { data } = await axios.get(localUrl);
        const { photos } = data;

        const allProducts = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            id: random.uuid()
        }));
        setProduct(allProducts);
    };    

    useEffect(() => {
        fetchPhotos();
    }, []);
    return (
        <Container fluid>
            <h1 className="text-success text-center"> Buy Page</h1>
            <Row>
                {product.map(product => (
                    <Col md={4} key={product.id}>
                        <CardItem product={product} addInCart={ addInCart}/>
                    </Col>
                    
                ))}            
            </Row>
        
        </Container>
    )

    

    
}

export default BuyPage;