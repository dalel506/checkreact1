// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ProductName from './Name.js';
import ProductPrice from'./Price.js';
import ProductDescription from './Description.js';
import ProductImage from './Image.js';
import ProductData from './Product';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <Card style={{ width: '18rem' }}>
    <ProductImage imageUrl={ProductData.imageUrl} />
    <Card.Body>
    <ProductName name={ProductData.name} />
    <ProductPrice price={ProductData.price} />
    <ProductDescription description={ProductData.description} />
    <Button variant="primary">Order Now</Button>
    </Card.Body>
    </Card>
      );
    }
   
export default App;
