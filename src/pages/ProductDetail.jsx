import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const productsArr = [
    {
        id: 0,
        title: "Lag Ja Gale",
        price: 120,
        images: [
            "https://www.jansatta.com/wp-content/uploads/2018/02/lagjagale.jpg",
        ],
        reviews: [
            { user: "Amit", comment: "Such a soulful song!", rating: 5 },
            { user: "Neha", comment: "Always brings back memories.", rating: 4 },
        ],
    },
    {
        id: 1,
        title: "Tum Hi Ho",
        price: 150,
        images: [
            "https://a10.gaanacdn.com/gn_img/albums/d41WjnWPLq/41Wjzk0NWP/size_m.webp"
        ],
        reviews: [
            { user: "Rahul", comment: "Love Arijit’s voice!", rating: 5 },
            { user: "Pooja", comment: "My all-time favorite.", rating: 5 },
        ],
    },
    {
        id: 2,
        title: "Tujh Mein Rab Dikhta Hai",
        price: 130,
        images: [
            "https://a10.gaanacdn.com/gn_img/albums/7rVW1aRWk5/rVW1pY53k5/size_m.webp"
        ],
        reviews: [
            { user: "Sneha", comment: "So romantic and pure!", rating: 4.5 },
            { user: "Manish", comment: "Melody at its best.", rating: 4 },
        ],
    },
    {
        id: 3,
        title: "Channa Mereya",
        price: 140,
        images: [
            "https://i.scdn.co/image/ab67616d0000b273045f73dc8a716c781c5e1812"
        ],
        reviews: [
            { user: "Karan", comment: "Heart-touching lyrics!", rating: 5 },
            { user: "Ritu", comment: "Perfect for emotional days.", rating: 4 },
        ],
    },
    {
        id: 4,
        title: "Kal Ho Naa Ho",
        price: 110,
        images: [
            "https://m.media-amazon.com/images/M/MV5BZTczMDQ0N2EtMTY4NS00ODJhLTk4MzQtOGJmZGRmY2M4MWQwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        ],
        reviews: [
            { user: "Deepak", comment: "Timeless classic!", rating: 5 },
            { user: "Alka", comment: "Always uplifts my mood.", rating: 4.5 },
        ],
    },
    {
        id: 5,
        title: "Tera Ban Jaunga",
        price: 135,
        images: [
            "https://c.saavncdn.com/807/Kabir-Singh-Hindi-2019-20240131131003-500x500.jpg"
        ],
        reviews: [
            { user: "Vikas", comment: "Beautiful composition.", rating: 4 },
            { user: "Anjali", comment: "Love the romantic vibe.", rating: 4.5 },
        ],
    },
    {
        id: 6,
        title: "Pee Loon",
        price: 125,
        images: [
            "https://i1.sndcdn.com/artworks-CzEZ3uBvYIbRcFZI-VcSDyw-t500x500.jpg"
        ],
        reviews: [
            { user: "Raj", comment: "Smooth and catchy.", rating: 4 },
            { user: "Sana", comment: "One of my favorites.", rating: 4.5 },
        ],
    },
    {
        id: 7,
        title: "Ae Dil Hai Mushkil",
        price: 140,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0wtl-k3F_LHwb4e2IiM97AMpglnXvr0k0Ng&s"
        ],
        reviews: [
            { user: "Neeraj", comment: "Emotional and powerful!", rating: 5 },
            { user: "Mira", comment: "Arijit never disappoints.", rating: 5 },
        ],
    }
];

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
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
    };

    if (!product) {
        return (
            <div className="p-10 text-center text-red-600 font-semibold">
                Product not found
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10">
            {/* Back Button */}
            <button
                onClick={() => navigate("/store")}
                className="mb-6 flex items-center gap-2 text-stone-700 hover:text-stone-900 font-medium transition"
            >
                <span className="text-xl">←</span> Back to Store
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
                            className="bg-amber-500 hover:bg-amber-600 transition text-white font-semibold px-6 py-3 rounded-full mb-4"
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
                                            <p className="font-semibold text-stone-800">{rev.user}</p>
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
        </div>
    );
};

export default ProductDetail;
