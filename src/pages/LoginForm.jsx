import { useState } from "react";
import { loginWithEmail, logout } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const LoginForm = () => {
    const [email, setEmail] = useState("yatharthmaheshwari01@gmail.com");
    const [password, setPassword] = useState("123456789");
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await loginWithEmail(email, password);
            toast.success(`Welcome, ${email}!`);
            navigate("/");
        } catch (error) {
            toast.error("Login failed. Please check your credentials.");
            console.log(error); // fixed typo from console.lof
        }
    };

    const handleLogout = async () => {
        await logout();
        toast("Goodbye!", { icon: "👋" });
        navigate("/login");
    };

    if (user) {
        return (
            <div className="h-screen flex items-center justify-center bg-stone-100">
                <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-xl text-center">
                    <h2 className="text-2xl font-bold text-stone-700 mb-6">You are already logged in</h2>
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition"
                    >
                        Sign Out
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-stone-100 py-20 px-5">
            <div className="max-w-md mx-auto p-8 bg-white rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold text-stone-700 mb-6 text-center">Login</h2>
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    New here?{" "}
                    <Link to="/signup" className="text-amber-600 hover:underline font-semibold">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );

};

export default LoginForm;
