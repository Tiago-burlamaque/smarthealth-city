import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <div className="mx-4 mt-4">
                <div className="
                    bg-white/10
                    backdrop-blur-md
                    border border-white/20
                    rounded-2xl
                    shadow-lg
                ">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                        {/* Logo */}
                        <h1 className="text-white font-bold text-xl md:text-2xl">
                            SmartHealth City
                        </h1>

                        {/* Botão mobile */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="md:hidden text-white text-2xl"
                        >
                            {open ? "✕" : "☰"}
                        </button>

                        {/* Menu desktop */}
                        <nav className="hidden md:block">
                            <ul className="flex gap-8 text-white">
                                <li>
                                    <Link to="/" className="hover:text-cyan-300 transition">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/avaliacao" className="hover:text-cyan-300 transition">
                                        Avaliação
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard" className="hover:text-cyan-300 transition">
                                        Dashboard
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Menu mobile */}
                    {open && (
                        <div className="md:hidden px-6 pb-4">
                            <ul className="flex flex-col gap-4 text-white">
                                <li>
                                    <Link
                                        to="/"
                                        onClick={() => setOpen(false)}
                                        className="block hover:text-cyan-300"
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/avaliacao"
                                        onClick={() => setOpen(false)}
                                        className="block hover:text-cyan-300"
                                    >
                                        Avaliação
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/dashboard"
                                        onClick={() => setOpen(false)}
                                        className="block hover:text-cyan-300"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}

                </div>
            </div>
        </header>
    );
}

export default Header;