import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import Cart from "./Cart";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { signInWithGoogle, logout } from "../firebase";
import { useAuth } from "../context/AuthContext";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const { cartQuantity } = useCart();
    const { user } = useAuth();

    return (
        <>
            <nav className="bg-white shadow-md px-6 py-4">
                <div className="flex justify-between items-center max-w-6xl mx-auto">
                    <h1 className="text-2xl font-extrabold text-stone-600 tracking-tight">
                        WishBasket
                    </h1>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link to="/" className="text-slate-600 hover:text-stone-500 font-medium transition">Home</Link>
                        <Link to="/about" className="text-slate-600 hover:text-stone-500 font-medium transition">About</Link>
                        <Link to="/store" className="text-slate-600 hover:text-stone-500 font-medium transition">Store</Link>
                        <Link to="/contact" className="text-slate-600 hover:text-stone-500 font-medium transition">Contact</Link>

                        <button
                            onClick={() => setShowCart(true)}
                            className="relative flex items-center gap-2 bg-stone-600 text-white px-4 py-2 rounded-full hover:bg-stone-700 transition"
                        >
                            <ShoppingCart size={18} /> Cart
                            {cartQuantity > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full px-1.5">
                                    {cartQuantity}
                                </span>
                            )}
                        </button>

                        {/* Auth Buttons (Desktop Only) */}
                        {user ? (
                            <>
                                <span className="text-stone-600 font-medium hidden sm:block">
                                    Hey, {user.displayName.split(" ")[0]}
                                </span>
                                <button
                                    onClick={logout}
                                    className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
                                >
                                    Sign out
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={signInWithGoogle}
                                className="bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600 transition"
                            >
                                Sign in
                            </button>
                        )}
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Content */}
                {isOpen && (
                    <div className="md:hidden mt-4 flex flex-col gap-4 items-center bg-white shadow px-4 pb-4">
                        <Link to="/" className="text-slate-700 hover:text-stone-500 font-medium">Home</Link>
                        <Link to="/about" className="text-slate-700 hover:text-stone-500 font-medium">About</Link>
                        <Link to="/store" className="text-slate-700 hover:text-stone-500 font-medium">Store</Link>
                        <Link to="/contact" className="text-slate-700 hover:text-stone-500 font-medium">Contact</Link>

                        <button
                            onClick={() => setShowCart(true)}
                            className="bg-stone-600 text-white px-4 py-2 rounded-full font-medium hover:bg-stone-700 transition"
                        >
                            Cart
                            {cartQuantity > 0 && (
                                <span className="ml-2 bg-red-500 text-xs text-white rounded-full px-1.5">
                                    {cartQuantity}
                                </span>
                            )}
                        </button>

                        {/* Auth Buttons (Mobile Only) */}
                        {user ? (
                            <>
                                <span className="text-stone-600 font-medium">
                                    Hey, {user.displayName.split(" ")[0]}
                                </span>
                                <button
                                    onClick={logout}
                                    className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
                                >
                                    Sign out
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={signInWithGoogle}
                                className="bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600 transition"
                            >
                                Sign in
                            </button>
                        )}
                    </div>
                )}
            </nav>

            {/* Cart Sidebar */}
            {showCart && <Cart onClose={() => setShowCart(false)} />}
        </>
    );
};

export default Header;
