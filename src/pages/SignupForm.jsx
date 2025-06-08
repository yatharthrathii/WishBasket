import { useState } from "react";
import { signupWithEmail } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        await signupWithEmail(email, password);
        navigate("/");
    };

    return (
        <div className="bg-stone-100 py-20 px-5">
            <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold text-stone-700 mb-6 text-center">Sign Up</h2>
                <form onSubmit={handleSignup} className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="bg-stone-700 text-white py-3 rounded-lg hover:bg-stone-800 transition"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;
