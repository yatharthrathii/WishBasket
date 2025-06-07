import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const exists = cartItems.find((p) => p.title === item.title);
        if (exists) {
            setCartItems((prev) =>
                prev.map((p) =>
                    p.title === item.title ? { ...p, quantity: p.quantity + 1 } : p
                )
            );
            toast.success("Item quantity increased!");
        } else {
            setCartItems((prev) => [...prev, { ...item, quantity: 1 }]);
            toast.success("Item added to cart!");
        }
    };

    const removeFromCart = (title) => {
        setCartItems((prev) => prev.filter((p) => p.title !== title));
        toast.error("Item removed from cart!");
    };

    const updateQuantity = (title, newQuantity) => {
        setCartItems(prev =>
            prev.map(item =>
                item.title === title
                    ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 }
                    : item
            )
        );
    };

    const cartTotal = cartItems.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
    );

    const totalItems = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, cartTotal, totalItems, updateQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
