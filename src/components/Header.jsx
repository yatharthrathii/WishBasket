import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import Cart from "./Cart";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showCart, setShowCart] = useState(false);

    return (
        <>
            <nav className="bg-white shadow-md px-6 py-4">
                <div className="flex justify-between items-center max-w-6xl mx-auto">
                    <h1 className="text-2xl font-extrabold text-stone-600 tracking-tight">WishBasket</h1>

                    <div className="hidden md:flex gap-8 items-center">
                        <a href="#" className="text-slate-600 hover:text-stone-500 font-medium transition">Home</a>
                        <a href="#" className="text-slate-600 hover:text-stone-500 font-medium transition">About</a>
                        <a href="#" className="text-slate-600 hover:text-stone-500 font-medium transition">Store</a>
                        <a href="#" className="text-slate-600 hover:text-stone-500 font-medium transition">Contact</a>
                        <button
                            onClick={() => setShowCart(true)}
                            className="flex items-center gap-2 bg-stone-600 text-white px-4 py-2 rounded-full hover:bg-stone-700 transition"
                        >
                            <ShoppingCart size={18} /> Cart
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-4 flex flex-col gap-4 items-center bg-white shadow px-4 pb-4">
                        <a href="#" className="text-slate-700 hover:text-stone-500 font-medium">Home</a>
                        <a href="#" className="text-slate-700 hover:text-stone-500 font-medium">About</a>
                        <a href="#" className="text-slate-700 hover:text-stone-500 font-medium">Store</a>
                        <a href="#" className="text-slate-700 hover:text-stone-500 font-medium">Contact</a>
                        <button
                            onClick={() => setShowCart(true)}
                            className="bg-stone-600 text-white px-4 py-2 rounded-full font-medium hover:bg-stone-700 transition"
                        >
                            Cart
                        </button>
                    </div>
                )}
            </nav>

            {/* Cart Sidebar */}
            {showCart && <Cart onClose={() => setShowCart(false)} />}
        </>
    );
};

export default Header;
