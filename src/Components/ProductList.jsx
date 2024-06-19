import React from "react";
import { useState, useEffect } from "react";
import "./ProductList.css";

const ProductList = ({addToCart}) => {
  const [data, setdata] = useState([]);

 

  function fetchData() {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((actualdata) => {
        console.log(actualdata);
        setdata(actualdata.products);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main">
      {data.map((item, index) => {
        return (
          <div>
            <div className="productcard">
              <img height={300} src={item.thumbnail} alt="" />
              <h2>{item.title}</h2> <br />
              <p>{item.brand}</p> <br />
              <h2>{item.price} $</h2> <br />
              <p>{item.description.slice(0, 50)}</p> <br />
              <button className="addbtn" onClick={() => addToCart(item)}>ADD TO CART</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
