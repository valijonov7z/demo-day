import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Navigation } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Navbar = () => {
    const { openModal } = useModal();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'О стране', href: '#about' },
        { name: 'Города', href: '#cities' },
        { name: 'Культура', href: '#culture' },
        { name: 'Галерея', href: '#gallery' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-uzbek-deep-blue/90 backdrop-blur-md py-4 shadow-lg shadow-black/50 border-b border-uzbek-gold/10' : 'bg-transparent py-6'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <Navigation className="w-6 h-6 text-uzbek-gold group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-2xl font-serif font-bold tracking-wider text-white">
                        UZB<span className="text-uzbek-gold">TOUR</span>
                    </span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-uzbek-gold transition-colors duration-300 relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-uzbek-gold transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}

                    <button
                        onClick={() => openModal('Купить тур', 'Бронирование тура')}
                        className="bg-uzbek-gold/10 text-uzbek-gold border border-uzbek-gold/50 px-6 py-2 rounded-full font-medium hover:bg-uzbek-gold hover:text-uzbek-deep-blue transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                    >
                        Купить тур
                    </button>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center relative z-[60]">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-white hover:text-uzbek-gold transition-colors p-2 -mr-2"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6 pointer-events-none" /> : <Menu className="w-6 h-6 pointer-events-none" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-uzbek-deep-blue/95 backdrop-blur-xl border-t border-uzbek-gold/10"
                >
                    <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-base font-medium text-gray-300 hover:text-uzbek-gold w-full text-center py-2"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                openModal('Купить тур', 'Бронирование тура');
                            }}
                            className="bg-uzbek-gold text-uzbek-deep-blue w-full px-6 py-3 rounded-full font-semibold mt-4"
                        >
                            Купить тур
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
