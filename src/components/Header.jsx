import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-stone-900 shadow-md px-6 py-4">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <h1 className="text-2xl font-extrabold text-stone-100 tracking-tight">WishBasket</h1>

                <div className="hidden md:flex gap-8 items-center">
                    {["Home", "About", "Store", "Contact"].map((link) => (
                        <a key={link} href="#" className="text-stone-300 hover:text-amber-400 font-medium transition">
                            {link}
                        </a>
                    ))}
                    <button className="bg-amber-500 text-white px-4 py-2 rounded-full font-medium hover:bg-amber-600 transition">
                        Cart
                    </button>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden mt-4 flex flex-col gap-4 items-center bg-stone-800 shadow px-4 pb-4">
                    {["Home", "About", "Store", "Contact"].map((link) => (
                        <a key={link} href="#" className="text-stone-300 hover:text-amber-400 font-medium">
                            {link}
                        </a>
                    ))}
                    <button className="bg-amber-500 text-white px-4 py-2 rounded-full font-medium hover:bg-amber-600 transition">
                        Cart
                    </button>
                </div>
            )}
        </nav>

    );
};

export default Header;
