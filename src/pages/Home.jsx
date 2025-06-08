const tourData = [
    { date: "JUL 16", location: "MUMBAI, MH", venue: "NCPA Auditorium" },
    { date: "JUL 19", location: "DELHI, DL", venue: "Indira Gandhi Indoor Stadium" },
    { date: "JUL 22", location: "BANGALORE, KA", venue: "Bangalore Palace Grounds" },
    { date: "JUL 29", location: "CHENNAI, TN", venue: "Shriram Bharatiya Kala Kendra" },
    { date: "AUG 2", location: "KOLKATA, WB", venue: "Nicco Park Amphitheatre" },
    { date: "AUG 7", location: "PUNE, MH", venue: "Shivaji Mandir" },
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
