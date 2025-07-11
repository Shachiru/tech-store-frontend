import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="relative mt-16 bg-gray-900/95 backdrop-blur-xl border-t border-white/10 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:via-purple-500 before:to-transparent">
            <div className="max-w-7xl mx-auto px-8 pt-12 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
                    <div className="space-y-4">
                        <h3 className="relative text-white text-xl font-semibold mb-4 after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-indigo-600 after:rounded-sm">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="relative inline-block text-white/70 text-sm transition-all duration-300 ease-out hover:text-blue-400 hover:translate-x-1 before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-px before:bg-gradient-to-r before:from-blue-400 before:to-indigo-500 before:transition-all before:duration-300 hover:before:w-full">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="relative inline-block text-white/70 text-sm transition-all duration-300 ease-out hover:text-blue-400 hover:translate-x-1 before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-px before:bg-gradient-to-r before:from-blue-400 before:to-indigo-500 before:transition-all before:duration-300 hover:before:w-full">
                                    Our Stores
                                </a>
                            </li>
                            <li>
                                <a href="#" className="relative inline-block text-white/70 text-sm transition-all duration-300 ease-out hover:text-blue-400 hover:translate-x-1 before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-px before:bg-gradient-to-r before:from-blue-400 before:to-indigo-500 before:transition-all before:duration-300 hover:before:w-full">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="relative inline-block text-white/70 text-sm transition-all duration-300 ease-out hover:text-blue-400 hover:translate-x-1 before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-px before:bg-gradient-to-r before:from-blue-400 before:to-indigo-500 before:transition-all before:duration-300 hover:before:w-full">
                                    Tech News
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="relative text-white text-xl font-semibold mb-4 after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-indigo-600 after:rounded-sm">
                            Products
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="relative inline-block text-white/70 text-sm transition-all duration-300 ease-out hover:text-blue-400 hover:translate-x-1 before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-px before:bg-gradient-to-r before:from-blue-400 before:to-indigo-500 before:transition-all before:duration-300 hover:before:w-full">
                                    Laptops & PCs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="relative inline-block text-white/70 text-sm transition-all duration-300 ease-out hover:text-blue-400 hover:translate-x-1 before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-px before:bg-gradient-to-r before:from-blue-400 before:to-indigo-500 before:transition-all before:duration-300 hover:before:w-full">
                                    Smartphones
                                </a>
                            </li>
                            <li>
                                <a href="#" className="relative inline-block text-white/70 text-sm transition-all duration-300 ease-out hover:text-blue-400 hover:translate-x-1 before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-px before:bg-gradient-to-r before:from-blue-400 before:to-indigo-500 before:transition-all before:duration-300 hover:before:w-full">
                                    Gaming Gear
                                </a>
                            </li>
                            <li>
                                <a href="#" className="relative inline-block text-white/70 text-sm transition-all duration-300 ease-out hover:text-blue-400 hover:translate-x-1 before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-px before:bg-gradient-to-r before:from-blue-400 before:to-indigo-500 before:transition-all before:duration-300 hover:before:w-full">
                                    Accessories
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="relative text-white text-xl font-semibold mb-4 after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-indigo-600 after:rounded-sm">
                            Customer Support
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="relative inline-block text-white/70 text-sm transition-all duration-300 ease-out hover:text-blue-400 hover:translate-x-1 before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-px before:bg-gradient-to-r before:from-blue-400 before:to-indigo-500 before:transition-all before:duration-300 hover:before:w-full">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="relative inline-block text-white/70 text-sm transition-all duration-300 ease-out hover:text-blue-400 hover:translate-x-1 before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-px before:bg-gradient-to-r before:from-blue-400 before:to-indigo-500 before:transition-all before:duration-300 hover:before:w-full">
                                    Warranty Info
                                </a>
                            </li>
                            <li>
                                <a href="#" className="relative inline-block text-white/70 text-sm transition-all duration-300 ease-out hover:text-blue-400 hover:translate-x-1 before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-px before:bg-gradient-to-r before:from-blue-400 before:to-indigo-500 before:transition-all before:duration-300 hover:before:w-full">
                                    Repairs & Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="relative inline-block text-white/70 text-sm transition-all duration-300 ease-out hover:text-blue-400 hover:translate-x-1 before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-px before:bg-gradient-to-r before:from-blue-400 before:to-indigo-500 before:transition-all before:duration-300 hover:before:w-full">
                                    Return Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="relative text-white text-xl font-semibold mb-4 after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-indigo-600 after:rounded-sm">
                            Stay Connected
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Subscribe to receive exclusive tech deals, product launches and early access offers.
                        </p>
                        <div className="mt-4">
                            <div className="flex flex-col sm:flex-row gap-2 mt-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 border border-white/20 rounded-full bg-white/10 text-white backdrop-blur-md text-sm transition-all duration-300 ease-out placeholder:text-white/50 focus:outline-none focus:border-blue-500/40 focus:bg-white/15"
                                />
                                <button className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-none px-6 py-3 rounded-full cursor-pointer text-sm font-semibold transition-all duration-300 ease-out whitespace-nowrap hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center sm:justify-start gap-4 mt-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white/70 border border-white/10 backdrop-blur-md transition-all duration-300 ease-out hover:bg-blue-600/20 hover:text-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/20" title="Facebook">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white/70 border border-white/10 backdrop-blur-md transition-all duration-300 ease-out hover:bg-purple-600/20 hover:text-white hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20" title="Instagram">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white/70 border border-white/10 backdrop-blur-md transition-all duration-300 ease-out hover:bg-indigo-600/20 hover:text-white hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/20" title="X (Twitter)">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white/70 border border-white/10 backdrop-blur-md transition-all duration-300 ease-out hover:bg-red-600/20 hover:text-white hover:-translate-y-1 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/20" title="YouTube">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <a href="#" className="text-white text-2xl font-bold flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="url(#techGradient)" strokeWidth="2">
                            <defs>
                                <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#3B82F6" />
                                    <stop offset="100%" stopColor="#A855F7" />
                                </linearGradient>
                            </defs>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">TechVerse</span>
                    </a>
                    <div className="flex flex-col md:flex-row items-center md:gap-8 text-white/60 text-sm">
                        <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
                        <p>© {new Date().getFullYear()} TechVerse Inc. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;