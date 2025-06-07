import { useState } from "react";
import { X, Trash2 } from "lucide-react";

const initialCart = [
    {
        title: "Colors",
        price: 100,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        quantity: 2,
    },
    {
        title: "Black and white Colors",
        price: 50,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        quantity: 3,
    },
    {
        title: "Yellow and Black Colors",
        price: 70,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        quantity: 1,
    },
];

const Cart = ({ onClose }) => {
    const [cart, setCart] = useState(initialCart);

    const handleRemove = (title) => {
        const updated = cart.filter((item) => item.title !== title);
        setCart(updated);
    };

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose}></div>

            {/* Sidebar */}
            <div className="fixed top-0 right-0 w-full max-w-md h-full bg-white z-50 p-6 flex flex-col shadow-lg animate-slide-in">
                {/* Header */}
                <div className="flex justify-between items-center mb-6 border-b pb-4">
                    <h2 className="text-2xl font-bold text-stone-800">Your Cart</h2>
                    <button onClick={onClose}>
                        <X size={26} className="text-stone-600 hover:text-stone-800" />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto space-y-6">
                    {cart.length === 0 ? (
                        <p className="text-stone-500 text-center">Your cart is empty.</p>
                    ) : (
                        cart.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-4 bg-stone-100 p-4 rounded-lg shadow-sm"
                            >
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="w-16 h-16 rounded-lg border border-stone-300"
                                />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-stone-800">{item.title}</h3>
                                    <p className="text-sm text-stone-500">Qty: {item.quantity}</p>
                                    <p className="font-medium text-stone-700">₹{item.price}</p>
                                </div>
                                <button
                                    onClick={() => handleRemove(item.title)}
                                    className="text-red-500 hover:text-red-600"
                                    title="Remove"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {cart.length > 0 && (
                    <div className="mt-6 border-t pt-4">
                        <div className="flex justify-between text-lg font-semibold text-stone-800">
                            <span>Total</span>
                            <span>₹{total}</span>
                        </div>
                        <button className="mt-4 w-full bg-amber-500 text-white py-3 rounded-full font-medium hover:bg-amber-600 transition">
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>

            {/* Animation Style */}
            <style>{`
                @keyframes slide-in {
                    0% { transform: translateX(100%); opacity: 0 }
                    100% { transform: translateX(0); opacity: 1 }
                }
                .animate-slide-in {
                    animation: slide-in 0.3s ease-out forwards;
                }
            `}</style>
        </>
    );
};

export default Cart;
