import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  const removeItemFromCart = (itemId) => {
    setCART((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return (
    <div className="maincart">
      {CART.map((item, cartindex) => {
        return (
          <div className="maincartitem">
            <div className="cartitem">
              <img width={100} src={item.thumbnail} alt="" />
              <h4>{item.title.slice(0, 18)}</h4>
              <p>{item.price * item.quantity} $</p>
              <button
                className="btn"
                onClick={() => {
                  const Cart1 = CART.map((item, index) => {
                    return cartindex === index
                      ? { ...item, quantity: item.quantity + 1 }
                      : item;
                  });
                  setCART(Cart1);
                }}
              >
                +
              </button>
              <span>{item.quantity}</span>{" "}
              <button
                className="btn"
                onClick={() => {
                  const Cart1 = CART.map((item, index) => {
                    return cartindex === index
                      ? {
                          ...item,
                          quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                        }
                      : item;
                  });
                  setCART(Cart1);
                }}
              >
                -
              </button>
            </div>
            <div className="deletebtn">
              {" "}
              <button onClick={() => removeItemFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        );
      })}

      <div className="amount">
        <h4>
          <span>Total Amount :</span>
          {CART.map((item1) => item1.price * item1.quantity).reduce(
            (total, value) => total + value,
            0
          )}
          $
        </h4>
      </div>
      <div className="checkout">
        <button>Proceed To Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
