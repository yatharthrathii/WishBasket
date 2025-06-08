import { useNavigate } from "react-router-dom";
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