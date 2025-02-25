import React, { useContext } from 'react'
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext.jsx";

const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext);
    return (
        <div className="place-order">
            <div className="place-order-left">
                <div className="title">Delivery Information</div>
                <div className="multi-fields">
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                </div>
                <input type="email" placeholder="Email address" />
                <input type="text" placeholder="Street" />
                <div className="multi-fields">
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="State" />
                </div>
                <div className="multi-fields">
                    <input type="number" placeholder="Zip Code" />
                    <input type="text" placeholder="Country" />
                </div>
                <input type="tel" placeholder="Phone" />
            </div>

            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getTotalCartAmount() === 0 ? getTotalCartAmount() : getTotalCartAmount() + 2}</b>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder