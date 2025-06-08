import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="py-16 px-6 bg-stone-100 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-600 leading-tight mb-4">
                        Discover Your Next <span className="text-amber-400">Favorite Album</span>
                    </h1>
                    <p className="text-lg text-stone-600 mb-6">
                        Explore handpicked classics and trending hits — all in one basket.
                    </p>
                    <button className="bg-amber-500 text-white font-medium px-6 py-3 rounded-full hover:bg-amber-600 transition duration-300">
                        <Link to="/store">Shop Now</Link>
                    </button>
                </div>
                <div className="flex-1">
                    <img
                        src="HeroSectionImg.avif"
                        alt="Hero Banner"
                        className="w-full h-auto rounded-xl shadow-lg"
                    />
                </div>
            </div>
        </section>

    );
};

export default HeroSection;
