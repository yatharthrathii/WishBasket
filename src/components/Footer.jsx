import {
    Instagram,
    Github,
    Linkedin,
    Twitter,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-stone-900 text-stone-300 py-10 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Left Side */}
                <div className="text-center md:text-left">
                    <h2 className="text-lg font-semibold tracking-wide text-stone-200">WishBasket</h2>
                    <p className="text-sm text-stone-400 mt-1">
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                {/* Right Side: Social Links */}
                <div className="flex gap-6">
                    <a
                        href="https://linkedin.com/in/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition duration-300"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={22} />
                    </a>
                    <a
                        href="https://github.com/your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition duration-300"
                        aria-label="GitHub"
                    >
                        <Github size={22} />
                    </a>
                    <a
                        href="https://x.com/your-handle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition duration-300"
                        aria-label="X"
                    >
                        <Twitter size={22} />
                    </a>
                    <a
                        href="https://instagram.com/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition duration-300"
                        aria-label="Instagram"
                    >
                        <Instagram size={22} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
