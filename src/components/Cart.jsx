import { useCart } from "../context/CartContext";
import { X, Trash2, Plus, Minus } from "lucide-react";

const Cart = ({ onClose }) => {
    const { cartItems, removeFromCart, cartTotal, totalItems, updateQuantity } = useCart();

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
                    {cartItems.length === 0 ? (
                        <p className="text-stone-500 text-center">Your cart is empty.</p>
                    ) : (
                        cartItems.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-4 bg-stone-100 p-4 rounded-lg shadow-sm"
                            >
                                <img
                                    src={item.images}
                                    alt={item.title}
                                    className="w-16 h-16 rounded-lg border border-stone-300"
                                />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-stone-800">{item.title}</h3>

                                    {/* Qty with buttons */}
                                    <div className="flex items-center gap-2 mt-1">
                                        <button
                                            onClick={() => updateQuantity(item.title, item.quantity - 1)}
                                            className="p-1 rounded border border-stone-400 hover:bg-stone-200"
                                            title="Decrease quantity"
                                        >
                                            <Minus size={14} />
                                        </button>

                                        <span className="text-sm text-stone-700">Qty: {item.quantity}</span>

                                        <button
                                            onClick={() => updateQuantity(item.title, item.quantity + 1)}
                                            className="p-1 rounded border border-stone-400 hover:bg-stone-200"
                                            title="Increase quantity"
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>

                                    <p className="font-medium text-stone-700 mt-1">₹{item.price}</p>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.title)}
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
                {cartItems.length > 0 && (
                    <div className="mt-6 border-t pt-4 space-y-2">
                        {/* Total Items Count */}
                        <div className="flex justify-between text-sm text-stone-600">
                            <span>Total Items</span>
                            <span>{totalItems}</span>
                        </div>

                        <div className="flex justify-between text-lg font-semibold text-stone-800">
                            <span>Total Price</span>
                            <span>₹{cartTotal}</span>
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
