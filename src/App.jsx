import './App.css';
// import ProductCard from './components/product/ProductCard';
// import Navbar from './components/navbar/Navbar';
// import ProductList from './json/product-list.json';
import ReactMat from './components/material-ui/reactMat';
import HooksFeatures from './components/hooks/HooksFeatures';
import {Timer} from './components/hooks/HooksFeatures';
import React from 'react';
export const CountryContext = React.createContext();

function App() {
  const [country, setCountry] = React.useState('IN');
  console.log('country',country);

  return (
    <CountryContext.Provider value={{country, setCountry}}> 

      <ReactMat />
      {/* <HooksFeatures /> */}
      <Timer />
    
      {/* <Navbar /> 
      {
        ProductList.data.map((product) => {
          return <ProductCard title={product.title} desc={product.description} imageUrl={product.imageUrl}/>
        })
      } */}
    </CountryContext.Provider>
  );
}

export default App;




