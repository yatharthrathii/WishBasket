import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const productsArr = [
    {
        id: 0,
        title: "Colors",
        price: 100,
        images: [
            'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        ],
        reviews: [
            { user: "Amit", comment: "Great colors and quality!", rating: 5 },
            { user: "Neha", comment: "Loved it!", rating: 4 },
        ],
    },
    {
        id: 1,
        title: "Black and white Colors",
        price: 50,
        images: [
            'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        ],
        reviews: [],
    },
    {
        id: 2,
        title: "Yellow and Black Colors",
        price: 70,
        images: [
            'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        ],
        reviews: [],
    },
    {
        id: 3,
        title: "Blue Color",
        price: 100,
        images: [
            'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        ],
        reviews: [],
    },
];

const Store = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { user } = useAuth();

    const handleAddToCart = (product) => {
        if (!user) {
            toast.error("Please log in first to add items to your cart!");
            return;
        }
        addToCart(product);
    };

    return (
        <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-white to-stone-100">
            <h2 className="text-3xl font-bold text-stone-800 text-center mb-10">
                Explore Our Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {productsArr.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300"
                    >
                        <div
                            className="overflow-hidden rounded-t-xl cursor-pointer"
                            onClick={() => navigate(`/product/${product.id}`)}
                        >
                            <img
                                src={product.images}
                                alt={product.title}
                                className="w-full h-52 object-cover transform hover:scale-105 transition duration-300"
                            />
                        </div>

                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-stone-700 mb-1">
                                {product.title}
                            </h3>
                            <p className="text-stone-500 font-medium mb-4">₹{product.price}</p>

                            <button
                                onClick={() => handleAddToCart(product)}
                                className="w-full bg-amber-500 text-white py-3 rounded-full font-semibold hover:bg-amber-600 transition duration-300 mb-3"
                            >
                                Add to Cart
                            </button>

                            <button
                                onClick={() => navigate(`/product/${product.id}`)}
                                className="w-full border border-amber-500 text-amber-500 px-2 py-3 rounded-full font-semibold hover:bg-amber-100 transition duration-300"
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Store;