import React from 'react';
import { motion } from 'framer-motion';
import { useModal } from '../context/ModalContext';

const NatureSection = () => {
    const { openModal } = useModal();
    const landscapes = [
        {
            title: "Горы Тянь-Шаня",
            desc: "Величественные вершины, кристально чистые озера и альпийские луга. Идеально для хайкинга и зимних видов спорта.",
            img: "https://moya-planeta.ru/upload/images/xl/28/a3/28a348bf6a5840c70d497ff26937fafd086d3ccc.jpg"
        },
        {
            title: "Пустыня Кызылкум",
            desc: "Красные пески, юртовые лагеря и караваны верблюдов под звездным небом.",
            img: "https://eurasia.travel/wp-content/uploads/2024/12/1.-KyzylKum-Desert.jpg"
        },
        {
            title: "Озеро Айдаркуль",
            desc: "Бирюзовое чудо в самом сердце пустыни, где останавливаются стаи розовых пеликанов.",
            img: "https://fergana.agency/siteapi/media/images/ad588ecc-ee8f-473e-a345-1f8e59a46bbd.jpeg"
        }
    ];

    return (
        <section className="py-24 bg-uzbek-deep-blue relative z-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-white uppercase tracking-widest mb-4"
                    >
                        ПРИРОДНЫЕ <span className="text-uzbek-gold">КРАСОТЫ</span>
                    </motion.h2>
                    <div className="h-1 w-24 bg-uzbek-gold mx-auto mb-6"></div>
                    <p className="text-gray-400 font-light max-w-2xl mx-auto text-lg">
                        Узбекистан — это не только древняя архитектура, но и потрясающие контрасты природы: от заснеженных гор до бескрайних пустынь.
                    </p>
                </div>

                <div className="space-y-12">
                    {landscapes.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] shadow-2xl flex items-center ${idx % 2 !== 0 ? 'justify-end' : 'justify-start'}`}
                        >
                            {/* Background */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${item.img})` }}
                            ></div>
                            <div className="absolute inset-0 bg-black/40"></div>

                            {/* Content box */}
                            <div className={`relative z-10 p-8 md:p-12 w-full md:w-1/2 bg-black/40 backdrop-blur-md h-full flex flex-col justify-center border-x border-white/10 ${idx % 2 !== 0 ? 'border-l border-white/20' : 'border-r border-white/20'}`}>
                                <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">{item.title}</h3>
                                <p className="text-gray-200 font-light text-lg leading-relaxed mb-6">
                                    {item.desc}
                                </p>
                                <button
                                    onClick={() => openModal(item.title, 'Экотуризм')}
                                    className="self-start text-uzbek-gold font-medium uppercase tracking-wider flex items-center gap-2 group"
                                >
                                    Исследовать
                                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default NatureSection;
