import { createContext, useContext, useState } from "react";
const CartContext = createContext({})
import Cart from "../components/products/Cart"
const CartProvider = ({ children }) => {
    const [isOpen,setIsopen]=useState(false)
    const [cartItems, setCartItems] = useState([]);
    const openCart=()=>{
        setIsopen(true)
    }
    const closeCart=()=>{
        setIsopen(false)
        }
    const increaceCart = (id) => {
        setCartItems((currItems) => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }];
            }
            else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    else { return item }
                }


                )
            }
        }
        )
    }
    const removeItem = (id) => {
        setCartItems((currItems) => cartItems.filter((item) => item.id !== id));

    }
    const decreaseCart = (id) => {
        setCartItems((currItems) => {
            if (currItems.find(item => item.id === id) == null) {
                return currItems.filter((item) => item.id !== id);
            }
            else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    }
                    else { return item }
                }


                )
            }
        }
        )
    }

    const getItems = (id) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    }
    return (
        <CartContext.Provider value={{ cartItems, getItems, increaceCart, decreaseCart, removeItem , closeCart,openCart }} >
            {children}
            <Cart isOpen={isOpen}/>
        </CartContext.Provider>
    )
};


export default CartProvider;
export const useCart = () => {
    return useContext(CartContext);
}

