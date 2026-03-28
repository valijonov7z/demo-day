import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useModal } from '../context/ModalContext';

const Hero = () => {
    const { openModal } = useModal();
    const { scrollY } = useScroll();
    const yOffset = useTransform(scrollY, [0, 800], [0, 250]);
    const opacityOffset = useTransform(scrollY, [0, 500], [1, 0]);

    const features = [
        {
            title: "4 города",
            subtitle: "Самарканд, Бухара...",
            image: "https://811417.selcdn.ru/img/2023/10/11/90574b13202ba3fd1faf2e52b14bd64058326530.png"
        },
        {
            title: "10 дней",
            subtitle: "незабываемых эмоций",
            image: "https://blog.dookinternational.com/wp-content/uploads/2016/01/Uzbekistan-Music.jpg"
        },
        {
            title: "Тысячи фото",
            subtitle: "потрясающих видов",
            image: "https://ychef.files.bbci.co.uk/2000x1125/p0hc4l31.jpeg"
        },
        {
            title: "Вкуснейшая еда",
            subtitle: "плов, самса, шашлыки",
            image: "https://uzbekistan.travel/storage/app/media/wepb/gastro_turizm/cropped-images/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%20%D0%B1%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-0-0-0-0-1740051502.webp"

        },
        {
            title: "Атмосфера",
            subtitle: "восточной сказки",
            image: "https://uzbek-travel.com/images/uz/Traditions/Makhalla/up_14280687553951259_0.jpg"
        }
    ];

    return (
        <div className="relative min-h-[110vh] flex flex-col justify-start pt-32 lg:pt-48 overflow-hidden z-10" id="hero">
            {/* Background Image with Parallax */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: yOffset }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('https://trvlland.com/wp-content/uploads/2022/09/uzbekistan_tashkent-3.jpg')`, // Registan view
                    }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-uzbek-deep-blue/80 via-uzbek-deep-blue/40 to-uzbek-deep-blue z-0"></div>
            </motion.div>

            {/* Content */}
            <motion.div
                className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
                style={{ opacity: opacityOffset }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 uppercase tracking-widest opacity-90"
                >
                    UZBEKISTAN
                </motion.h1>

                <div className="max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-2xl md:text-4xl font-serif gold-gradient-text mb-4"
                    >
                        Discover Uzbekistan – The Heart of Central Asia
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-lg md:text-xl text-gray-300 font-light mb-8 leading-relaxed"
                    >
                        Explore ancient cities, rich culture, delicious food, and beautiful nature. <br />
                        <span className="text-white font-medium pt-2 block">
                            Открой для себя Узбекистан — страна древних городов и богатой культуры.
                        </span>
                    </motion.p>

                    <motion.button
                        onClick={() => openModal('Начать путешествие', 'Индивидуальный тур')}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="group relative inline-flex items-center justify-center px-8 py-4 font-medium tracking-wide text-white transition duration-300 ease-out transform rounded-full bg-gradient-to-r from-uzbek-gold to-yellow-600 hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] focus:outline-none"
                    >
                        <span className="absolute inset-0 w-full h-full border-2 border-white/20 rounded-full"></span>
                        <span className="flex items-center gap-2">
                            Начать путешествие
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                    </motion.button>
                </div>
            </motion.div>

            {/* Overlapping Cards Container */}
            <div className="relative z-20 mt-auto pt-24 pb-12 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap md:flex-nowrap justify-center lg:justify-start gap-4 lg:gap-6 mt-12 md:mt-24">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1 + (index * 0.1) }}
                                className="group relative w-full sm:w-[45%] md:w-40 lg:w-48 h-64 rounded-2xl overflow-hidden cursor-pointer shadow-lg shadow-black/50 border border-white/10"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${feature.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-4 w-full">
                                    <h3 className="text-white font-bold text-lg leading-tight mb-1 group-hover:text-uzbek-gold transition-colors">{feature.title}</h3>
                                    <p className="text-gray-300 text-xs font-medium opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">{feature.subtitle}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
