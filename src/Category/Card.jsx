import { useCart } from "../context/CartContext";

const Card = () => {
  const { addToCart } = useCart();

  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {productsArr.map((item, index) => (
        <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-48 object-cover rounded-t-xl"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-stone-700">{item.title}</h3>
            <p className="text-stone-500 mb-4">₹{item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="w-full bg-amber-500 text-white py-2 rounded-full font-medium hover:bg-amber-600 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
