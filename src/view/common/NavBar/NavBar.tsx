import {useState} from 'react';
import logo from '../../../assets/react.svg';
import {Link} from "react-router-dom";

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-[1000] h-20 bg-white/95 backdrop-blur-xl border-b border-gray-200/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-gray-50/30 opacity-90 -z-10"></div>

            <div
                className="max-w-[1400px] mx-auto flex justify-between items-center h-full px-8 max-md:px-4 max-sm:px-3">
                <div
                    className="relative text-gray-900 text-2xl max-md:text-xl max-sm:text-lg font-extrabold tracking-tight cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-slate-700 group">
                    <img src={logo} alt="Logo"/>
                    SR
                    {/* Premium underline effect */}
                    <div
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-600 to-slate-400 transition-all duration-300 ease-out group-hover:w-full"></div>
                </div>

                {/* Enhanced Burger Menu */}
                <div
                    className={`flex md:hidden flex-col cursor-pointer p-2.5 rounded-xl bg-gray-50/80 backdrop-blur-md border border-gray-200/50 shadow-sm transition-all duration-300 ease-out hover:bg-gray-100/80 hover:scale-105 hover:shadow-md ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    <div
                        className={`w-6 h-0.5 bg-gray-800 my-0.5 transition-all duration-300 ease-out rounded-sm ${isMenuOpen ? 'transform rotate-[-45deg] translate-x-[-5px] translate-y-[6px]' : ''}`}></div>
                    <div
                        className={`w-6 h-0.5 bg-gray-800 my-0.5 transition-all duration-300 ease-out rounded-sm ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div
                        className={`w-6 h-0.5 bg-gray-800 my-0.5 transition-all duration-300 ease-out rounded-sm ${isMenuOpen ? 'transform rotate-45 translate-x-[-5px] translate-y-[-6px]' : ''}`}></div>
                </div>

                {/* Navigation Links */}
                <div
                    className={`flex gap-3 items-center transition-all duration-300 ease-out max-md:fixed max-md:top-20 max-md:left-0 max-md:right-0 max-md:bg-white/95 max-md:backdrop-blur-xl max-md:border-b max-md:border-gray-200/60 max-md:flex-col max-md:gap-2 max-md:py-8 max-md:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] max-md:z-[999] ${isMenuOpen ? 'max-md:transform max-md:translate-y-0 max-md:opacity-100 max-md:visible' : 'max-md:transform max-md:-translate-y-full max-md:opacity-0 max-md:invisible'}`}>
                    <Link
                        to="/"
                        className="relative overflow-hidden text-gray-700 text-base font-medium py-2.5 px-5 rounded-xl transition-all duration-300 ease-out backdrop-blur-md border border-gray-200/40 bg-gray-50/30 hover:text-gray-900 hover:bg-gray-100/60 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gray-300/20 hover:border-gray-300/60 active:translate-y-0 max-md:py-3 max-md:px-6 max-md:mx-4 max-md:rounded-xl max-md:text-base max-md:text-center max-md:bg-gray-50/50 max-md:hover:scale-[1.02] max-md:hover:translate-y-0 max-sm:mx-2 group"
                        onClick={closeMenu}
                    >
                        <div
                            className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 group-hover:left-full"></div>
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="relative overflow-hidden text-gray-700 text-base font-medium py-2.5 px-5 rounded-xl transition-all duration-300 ease-out backdrop-blur-md border border-gray-200/40 bg-gray-50/30 hover:text-gray-900 hover:bg-gray-100/60 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gray-300/20 hover:border-gray-300/60 active:translate-y-0 max-md:py-3 max-md:px-6 max-md:mx-4 max-md:rounded-xl max-md:text-base max-md:text-center max-md:bg-gray-50/50 max-md:hover:scale-[1.02] max-md:hover:translate-y-0 max-sm:mx-2 group"
                        onClick={closeMenu}
                    >
                        <div
                            className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 group-hover:left-full"></div>
                        About
                    </Link>
                    <Link
                        to="/services"
                        className="relative overflow-hidden text-gray-700 text-base font-medium py-2.5 px-5 rounded-xl transition-all duration-300 ease-out backdrop-blur-md border border-gray-200/40 bg-gray-50/30 hover:text-gray-900 hover:bg-gray-100/60 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gray-300/20 hover:border-gray-300/60 active:translate-y-0 max-md:py-3 max-md:px-6 max-md:mx-4 max-md:rounded-xl max-md:text-base max-md:text-center max-md:bg-gray-50/50 max-md:hover:scale-[1.02] max-md:hover:translate-y-0 max-sm:mx-2 group"
                        onClick={closeMenu}
                    >
                        <div
                            className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 group-hover:left-full"></div>
                        Services
                    </Link>
                    <Link
                        to="/contact"
                        className="relative overflow-hidden text-gray-700 text-base font-medium py-2.5 px-5 rounded-xl transition-all duration-300 ease-out backdrop-blur-md border border-gray-200/40 bg-gray-50/30 hover:text-gray-900 hover:bg-gray-100/60 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gray-300/20 hover:border-gray-300/60 active:translate-y-0 max-md:py-3 max-md:px-6 max-md:mx-4 max-md:rounded-xl max-md:text-base max-md:text-center max-md:bg-gray-50/50 max-md:hover:scale-[1.02] max-md:hover:translate-y-0 max-sm:mx-2 group"
                        onClick={closeMenu}
                    >
                        <div
                            className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 group-hover:left-full"></div>
                        Contact
                    </Link>
                    <Link
                        to="/shopping-cart"
                        className="relative overflow-hidden text-gray-700 text-base font-medium py-2.5 px-5 rounded-xl transition-all duration-300 ease-out backdrop-blur-md border border-gray-200/40 bg-gray-50/30 hover:text-gray-900 hover:bg-gray-100/60 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gray-300/20 hover:border-gray-300/60 active:translate-y-0 max-md:py-3 max-md:px-6 max-md:mx-4 max-md:rounded-xl max-md:text-base max-md:text-center max-md:bg-gray-50/50 max-md:hover:scale-[1.02] max-md:hover:translate-y-0 max-sm:mx-2 group"
                        onClick={closeMenu}
                    >
                        <div
                            className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 group-hover:left-full"></div>
                        My Cart
                    </Link>

                    {/* Enhanced Sign In Button */}
                    <button className="relative bg-gradient-to-r from-slate-800 to-slate-700 border-none rounded-xl px-6 py-2.5 cursor-pointer hover:from-slate-700 hover:to-slate-600 hover:shadow-lg hover:shadow-slate-800/25 transition-all duration-300 ease-out backdrop-blur-md group/btn active:scale-[0.98]">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                        <Link
                            to="/login"
                            onClick={closeMenu}
                            className="relative text-base font-semibold text-white no-underline tracking-wide"
                        >
                            Sign In
                        </Link>
                    </button>
                </div>
            </div>
        </nav>
    );
}