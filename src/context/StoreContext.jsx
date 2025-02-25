import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets.js";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    //Add Item To Cart
    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    }

    //Removing Item from Cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    //To see items adding and Removing Logic working fine or not!
    // useEffect(() => {
    //     console.log(cartItems);
    // }, [cartItems]);

    //get the total amount of items in the cart
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const Item in cartItems) {
            if (cartItems[Item] > 0) {
                let itemInfo = food_list.find((product) => product._id === Item);
                totalAmount += itemInfo.price * cartItems[Item];
            }
        }
        return totalAmount;
    }
    const contextValue = {
        food_list,
        cartItems, setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    };
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;