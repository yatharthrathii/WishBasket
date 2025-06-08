const tourData = [
    { date: "JUL 16", location: "DETROIT, MI", venue: "DTE ENERGY MUSIC THEATRE" },
    { date: "JUL 19", location: "TORONTO, ON", venue: "BUDWEISER STAGE" },
    { date: "JUL 22", location: "BRISTOW, VA", venue: "JIGGY LUBE LIVE" },
    { date: "JUL 29", location: "PHOENIX, AZ", venue: "AK-CHIN PAVILION" },
    { date: "AUG 2", location: "LAS VEGAS, NV", venue: "T-MOBILE ARENA" },
    { date: "AUG 7", location: "CONCORD, CA", venue: "CONCORD PAVILION" },
];

const Home = () => {
    return (
        <section className="py-16 px-4 bg-stone-100 text-stone-800">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-10">Upcoming Tours</h2>

                <div className="grid gap-6 sm:grid-cols-2">
                    {tourData.map((tour, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-xl p-6 border border-stone-200 hover:shadow-xl transition"
                        >
                            <div className="text-amber-600 font-bold text-xl mb-2">{tour.date}</div>
                            <div className="text-lg font-semibold">{tour.location}</div>
                            <div className="text-sm text-stone-500 mb-4">{tour.venue}</div>
                            <button className="mt-auto bg-stone-800 text-white py-2 px-4 rounded-full hover:bg-stone-700 transition text-sm font-medium">
                                BUY TICKETS
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Home;
