import React from 'react';
import { motion } from 'framer-motion';
import { useModal } from '../context/ModalContext';

const LandmarksSection = () => {
    const { openModal } = useModal();
    const landmarks = [
        {
            title: "Ансамбль Регистан",
            location: "Самарканд",
            desc: "Сердце древнего Самарканда. Три грандиозных медресе, покрытых лазурной майоликой, создают неповторимый архитектурный ансамбль, который по праву считается одним из красивейших в мире.",
            img: "https://uzbekistan.travel/storage/app/media/cropped-images/Registan-Square-in-Samarkand-at-Night-Time-0-0-0-0-1594028943.jpg",
            span: "md:col-span-2 md:row-span-2"
        },
        {
            title: "Старый город",
            location: "Бухара",
            desc: "Лабиринт узких улочек, минарет Калян и древние торговые купола.",
            img: "https://upload.wikimedia.org/wikipedia/commons/a/a8/2012_Bukhara_7515821196.jpg",
            span: "md:col-span-1 md:row-span-1"
        },
        {
            title: "Ичан-Кала",
            location: "Хива",
            desc: "Город-крепость, полностью сохранивший свой средневековый облик.",
            img: "https://uzbekistan.travel/storage/app/media/Rasmlar/cropped-images/shutterstock_1409913623-0-0-0-0-1737971122.jpg",
            span: "md:col-span-1 md:row-span-1"
        },
        {
            title: "Шахи-Зинда",
            location: "Самарканд",
            desc: "Улица-некрополь из ослепительно синих мавзолеев, хранящих легенды веков.",
            img: "https://www.advantour.com/img/uzbekistan/samarkand/shakhi-zinda/shakhi-zinda-necropolis4.jpg",
            span: "md:col-span-1 md:row-span-1"
        },
        {
            title: "Аральское море",
            location: "Каракалпакстан",
            desc: "Кладбище кораблей на дне ушедшего моря — пейзаж, напоминающий другую планету.",
            img: "https://ocean.ru/images/news/2024/09_10_005.jpg",
            span: "md:col-span-1 md:row-span-1"
        }
    ];

    return (
        <section id="landmarks" className="py-24 bg-uzbek-deep-blue relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-uzbek-gold/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-2/3"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif uppercase tracking-widest text-white mb-4">
                            ГЛАВНЫЕ <span className="text-uzbek-gold">ДОСТОПРИМЕЧАТЕЛЬНОСТИ</span>
                        </h2>
                        <div className="h-1 w-24 bg-uzbek-gold mb-6"></div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/3 text-right hidden md:block"
                    >
                        <button
                            onClick={() => openModal('Карта достопримечательностей', 'Запрос карты маршрута')}
                            className="text-gray-300 hover:text-uzbek-gold transition-colors font-medium border-b border-transparent hover:border-uzbek-gold pb-1"
                        >
                            Смотреть все места на карте →
                        </button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {landmarks.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className={`group relative rounded-2xl overflow-hidden shadow-2xl glass-panel ${item.span}`}
                        >
                            {/* Background */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                style={{ backgroundImage: `url(${item.img})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <div className="flex justify-between items-end w-full">
                                    <div className="w-2/3">
                                        <span className="text-uzbek-gold text-xs font-bold tracking-wider uppercase mb-2 block">{item.location}</span>
                                        <h3 className="text-2xl md:text-3xl font-serif text-white mb-3 group-hover:text-uzbek-gold transition-colors">{item.title}</h3>
                                        <p className="text-gray-300 text-sm font-light leading-relaxed mb-4 line-clamp-2 md:opacity-0 md:-translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => openModal(item.title, `Экскурсия: ${item.title}`)}
                                            className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-uzbek-gold hover:text-uzbek-deep-blue hover:border-uzbek-gold text-white rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                                        >
                                            Подробнее
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default LandmarksSection;
