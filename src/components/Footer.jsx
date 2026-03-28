import React from 'react';
import { Navigation, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#020509] border-t border-white/10 pt-16 pb-8 relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="md:col-span-1">
                        <a href="#" className="flex items-center gap-2 group mb-6">
                            <Navigation className="w-6 h-6 text-uzbek-gold" />
                            <span className="text-2xl font-serif font-bold tracking-wider text-white">
                                UZB<span className="text-uzbek-gold">TOUR</span>
                            </span>
                        </a>
                        <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                            Мы создаем незабываемые путешествия в самое сердце Центральной Азии. Откройте для себя магию Востока вместе с нами.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-uzbek-gold hover:bg-white/10 transition-all"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-uzbek-gold hover:bg-white/10 transition-all"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-uzbek-gold hover:bg-white/10 transition-all"><Twitter className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6">Навигация</h4>
                        <ul className="space-y-4">
                            <li><a href="#about" className="text-gray-400 hover:text-uzbek-gold text-sm transition-colors">О стране</a></li>
                            <li><a href="#cities" className="text-gray-400 hover:text-uzbek-gold text-sm transition-colors">Города легенды</a></li>
                            <li><a href="#landmarks" className="text-gray-400 hover:text-uzbek-gold text-sm transition-colors">Достопримечательности</a></li>
                            <li><a href="#culture" className="text-gray-400 hover:text-uzbek-gold text-sm transition-colors">Культура и дух</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6">Информация</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-uzbek-gold text-sm transition-colors">Услуги гидов</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-uzbek-gold text-sm transition-colors">Групповые туры</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-uzbek-gold text-sm transition-colors">Частые вопросы</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-uzbek-gold text-sm transition-colors">Советы путешественникам</a></li>
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6">Контакты</h4>
                        <p className="text-gray-400 text-sm font-light flex items-center gap-3 mb-4">
                            <span className="w-2 h-2 rounded-full bg-uzbek-gold"></span>
                            г. Ташкент, ул. Амира Темура, 14
                        </p>
                        <p className="text-gray-400 text-sm font-light flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-full bg-uzbek-gold"></span>
                            +998 90 123 45 67
                        </p>
                        <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Подписаться</h4>
                        <div className="flex">
                            <input type="email" placeholder="Ваш E-mail" className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 w-full text-white focus:outline-none focus:border-uzbek-gold" />
                            <button className="bg-uzbek-gold hover:bg-uzbek-gold-light text-uzbek-deep-blue px-4 rounded-r-lg transition-colors flex items-center justify-center">
                                <Mail className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm font-light">
                        © {new Date().getFullYear()} UZB TOUR. Все права защищены.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Политика конфиденциальности</a>
                        <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Условия использования</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
