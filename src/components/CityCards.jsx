import React from 'react';
import { motion } from 'framer-motion';

const CityCards = () => {
    const cities = [
        {
            name: "Самарканд",
            desc: "Изумрудный город, перекресток культур и столица империи Тамерлана. Знаменит площадью Регистан.",
            img: "https://blog-cdn.kupibilet.ru/blog/images/1033/cover.webp"
        },
        {
            name: "Бухара",
            desc: "Город-музей под открытым небом, где время остановилось среди минаретов и древних торговых куполов.",
            img: "https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/e322b8ca-6adc-44fa-8053-d11d19a30793//-/format/webp/-/quality/smart_retina/-/stretch/off/-/resize/1900x/"
        },
        {
            name: "Хива",
            desc: "Ичан-Кала — сердце Хивы, сказочный лабиринт глинобитных стен и лазурных куполов.",
            img: "https://dolorestravel.com/uploads/ModelContentRow/39/service_content-5d77b1d2d5dd8.jpg"
        },
        {
            name: "Нукус",
            desc: "Современный город на северо-западе, знаменитый музеем Савицкого — Лувром в песках.",
            img: "https://www.advantour.com/img/uzbekistan/nukus/nukus-museum/nukus-museum6.jpg"
        }
    ];

    return (
        <section id="cities" className="py-24 bg-[#081220] relative z-20 shadow-inner">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif uppercase tracking-widest text-white mb-4"
                    >
                        ГОРОДА <span className="text-uzbek-gold">ЛЕГЕНДЫ</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 font-light max-w-2xl mx-auto text-lg"
                    >
                        Откройте для себя главные жемчужины Узбекистана, каждый город хранит свои неповторимые тайны.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cities.map((city, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="group relative rounded-2xl overflow-hidden cursor-pointer h-96 border border-white/5 shadow-2xl glass-panel"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                style={{ backgroundImage: `url(${city.img})` }}
                            />

                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-uzbek-deep-blue border-b-2 border-transparent transition-all duration-500 group-hover:from-uzbek-deep-blue/90 group-hover:via-uzbek-deep-blue/40 group-hover:border-uzbek-gold"></div>

                            <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-2">
                                <div className="w-10 h-1 bg-uzbek-gold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <h3 className="text-2xl font-serif text-white mb-2 drop-shadow-lg">{city.name}</h3>
                                <p className="text-gray-300 text-sm font-light opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 transition-all duration-500 ease-in-out">
                                    {city.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CityCards;
