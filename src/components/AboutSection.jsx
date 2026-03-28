import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
    const infoPoints = [
        {
            title: "История",
            desc: "Один из древнейших очагов цивилизации, земли которого помнят Александра Македонского и Чингисхана.",
            img: "https://preview.redd.it/genghis-khan-vs-alexander-the-great-v0-4bprkt4xul1b1.png?width=1080&crop=smart&auto=webp&s=4e7601f4899b1f21c28569110e2cabd27bab98b3"
        },
        {
            title: "Шёлковый путь",
            desc: "Сердце Великого шёлкового пути, соединявшее Восток и Запад на протяжении тысячелетий.",
            img: "https://www.turkestantravel.com/wp-content/uploads/2020/09/silkroad-770x440.jpg",
            offset: true
        },
        {
            title: "Культура",
            desc: "Родина великих учёных, поэтов и мыслителей: Авиценны, Улугбека, Алишера Навои.",
            img: "https://fencing.uz/uploads/content/1588067660_%D1%83%D0%B5%D0%BA%D0%B5.jpg"
        }
    ];

    return (
        <section id="about" className="py-24 bg-uzbek-deep-blue relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-white tracking-widest uppercase mb-4">
                            О СТРАНЕ
                        </h2>
                        <div className="h-1 w-24 bg-uzbek-gold"></div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2 mt-8 md:mt-0"
                    >
                        <p className="text-gray-400 font-light text-lg">
                            Узбекистан — государство в самом центре Центральной Азии. <br />
                            <span className="text-uzbek-gold">Столица:</span> Ташкент | <span className="text-uzbek-gold">Язык:</span> узбекский
                        </p>
                    </motion.div>
                </div>

                {/* Timeline Layout */}
                <div className="flex flex-col md:flex-row relative mt-20">

                    <div className="md:w-1/3 mb-10 md:mb-0 pr-8">
                        <h3 className="text-2xl font-serif text-white mb-6">
                            Величие сквозь века
                        </h3>
                        <p className="text-gray-400 font-light mb-6">
                            Вам не нужно беспокоиться о маршрутах или поисках гидов — мы покажем самые красивые места, расскажем их скрытые легенды и угостим лучшим пловом. Просто наслаждайтесь путешествием.
                        </p>
                    </div>

                    <div className="md:w-2/3 relative pl-0 md:pl-12">
                        {/* Vertical Line for Desktop */}
                        <div className="hidden md:block absolute left-2 top-0 bottom-0 w-px bg-white/20"></div>

                        <div className="space-y-20">
                            {infoPoints.map((point, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                                    className={`relative flex flex-col md:flex-row items-center md:items-start gap-6 ${point.offset ? 'md:ml-24' : ''}`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="hidden md:block absolute -left-11 top-6 w-3 h-3 rounded-full bg-uzbek-gold shadow-[0_0_10px_#D4AF37]"></div>

                                    {/* Content */}
                                    <div className="w-full md:w-1/2 group">
                                        <div className="overflow-hidden rounded-lg shadow-lg shadow-black/50 border border-white/10">
                                            <img
                                                src={point.img}
                                                alt={point.title}
                                                className="w-full h-48 object-cover transform transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                    </div>

                                    <div className="w-full md:w-1/2 pt-2 text-center md:text-left">
                                        <h4 className="text-xl font-medium text-white mb-2 group-hover:text-uzbek-gold transition-colors">{point.title}</h4>
                                        <p className="text-sm text-gray-400 font-light leading-relaxed">{point.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
