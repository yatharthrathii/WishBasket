import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        toast.loading("Submitting your details...", { id: "submit" });

        try {
            await axios.post("https://your-firebase-db.firebaseio.com/contacts.json", formData);
            setSubmitted(true);
            setFormData({ name: "", email: "", phone: "" });
            toast.success("Thank you! We'll contact you soon.", { id: "submit" });
        } catch (err) {
            toast.error("Something went wrong! Please try again.", { id: "submit" });
            console.log(err)
        }

        setLoading(false);
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-12 font-sans">
            <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-10">
                <h2 className="text-3xl font-bold text-stone-700 mb-8 text-center tracking-wide">
                    Contact Us
                </h2>

                {submitted ? (
                    <div className="text-green-600 text-center font-semibold text-lg">
                        Thank you! We’ll contact you soon.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            placeholder="Your Name"
                            onChange={handleChange}
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 text-gray-800 font-medium"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Your Email"
                            onChange={handleChange}
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 text-gray-800 font-medium"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            placeholder="Phone Number"
                            onChange={handleChange}
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 text-gray-800 font-medium"
                            required
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-stone-600 text-white py-3 rounded-lg font-semibold hover:bg-stone-700 transition disabled:opacity-50"
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Contact;
