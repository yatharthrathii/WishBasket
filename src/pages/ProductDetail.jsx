import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const productsArr = [
    {
        id: 0,
        title: "Colors",
        price: 100,
        images: [
            "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
            "https://prasadyash2411.github.io/ecom-website/img/Album%201-1.png",
            "https://prasadyash2411.github.io/ecom-website/img/Album%201-2.png",
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
            "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
            "https://prasadyash2411.github.io/ecom-website/img/Album%202-1.png",
        ],
        reviews: [{ user: "Rahul", comment: "Good product.", rating: 4 }],
    },
    {
        id: 2,
        title: "Yellow and Black Colors",
        price: 70,
        images: ["https://prasadyash2411.github.io/ecom-website/img/Album%203.png"],
        reviews: [{ user: "Tanmay", comment: "Good product.", rating: 3 }],
    },
    {
        id: 3,
        title: "Blue Color",
        price: 100,
        images: ["https://prasadyash2411.github.io/ecom-website/img/Album%204.png"],
        reviews: [{ user: "Himanshu", comment: "Bad product.", rating: 2.5 }],
    },
];


const ProductDetail = () => {
    const { id } = useParams();
    const product = productsArr.find((p) => p.id === parseInt(id));
    const { addToCart } = useCart();
    const [mainImage, setMainImage] = useState(product?.images?.[0] || "");
    const [zoomed, setZoomed] = useState(false);
    const { user } = useAuth();

    const handleAddToCart = () => {
        if (!user) {
            toast.error("Please log in first to add items to your cart!");
            return;
        }
        addToCart(product);
        toast.success(`${product.title} added to cart!`);
    };

    if (!product)
        return (
            <div className="p-10 text-center text-red-600 font-semibold">
                Product not found
            </div>
        );

    return (
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Images */}
            <div className="flex flex-col items-center">
                <div
                    className={`relative overflow-hidden rounded-lg shadow-md transition-all duration-300 cursor-pointer ${zoomed ? "scale-125" : ""
                        }`}
                    onClick={() => setZoomed(!zoomed)}
                >
                    <img
                        src={mainImage}
                        alt={product.title}
                        className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover"
                    />
                </div>
                <div className="flex gap-3 mt-5">
                    {product.images?.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`${product.title} ${i}`}
                            onClick={() => setMainImage(img)}
                            className={`w-20 h-20 object-cover rounded-md border-2 cursor-pointer transition ${img === mainImage ? "border-amber-500" : "border-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-stone-800 mb-4">
                        {product.title}
                    </h1>
                    <p className="text-2xl font-semibold text-stone-600 mb-6">
                        ₹{product.price}
                    </p>
                    <button
                        onClick={handleAddToCart}
                        className="bg-amber-500 hover:bg-amber-600 transition text-white font-semibold px-6 py-3 rounded-full mb-6"
                    >
                        Add to Cart
                    </button>

                    <div>
                        <h2 className="text-xl font-semibold text-stone-700 mb-4">
                            Customer Reviews
                        </h2>
                        {product.reviews.length === 0 ? (
                            <p className="text-stone-500">No reviews yet.</p>
                        ) : (
                            <div className="space-y-4">
                                {product.reviews.map((rev, index) => (
                                    <div
                                        key={index}
                                        className="bg-stone-50 border border-stone-200 p-4 rounded-lg shadow-sm"
                                    >
                                        <p className="font-semibold text-stone-800">
                                            {rev.user}
                                        </p>
                                        <p className="text-stone-600 italic">"{rev.comment}"</p>
                                        <p className="text-amber-500">
                                            {"⭐".repeat(rev.rating)}{" "}
                                            <span className="text-stone-400 text-sm">
                                                ({rev.rating}/5)
                                            </span>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
