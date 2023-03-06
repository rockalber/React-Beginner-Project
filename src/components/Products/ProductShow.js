import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Products from "./Products";
import './ProductShow.css';

const ProductShow = () => {
    const [Count, setCount] = useState(1);
    const [Data, setData] = useState([]);
    // const [Valid , setValid]=useState(false)
  useEffect(() => {
    return async function getData() {
      const response = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${Count+10}&idStarts=1001`
      );
      const get = await response.json();
        setData([{get}]);
            
  }},[Count]);
  return (
    <>
    <div className="btnp">

    <Button variant="outline-secondary" onClick={()=>{return setCount(Count+1)}}>Click to See Products</Button>
    </div>
    <div className="productshow">
      {Data.map((element, index) => {
        return (
    
            <Products
            key={index}
            image={element.imageUrl}
            title={element.firstName}
            TextArea={
                "Occaecat duis irure magna anim enim cupidatat et ullamco aute veniam consectetur aliqua aliqua non. Culpa mollit in minim laborum Lorem do. Nulla dolor tempor incididunt laborum sunt proident. Eiusmod qui cillum occaecat velit incididunt. Commodo aliquip consectetur eu anim veniam elit excepteur ea dolore excepteur."
            }
            />
            );
        })}

    </div>
    </>
  );
};

export default ProductShow;
