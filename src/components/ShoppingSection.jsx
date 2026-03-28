import React from 'react';
import { motion } from 'framer-motion';
import { useModal } from '../context/ModalContext';

const ShoppingSection = () => {
    const { openModal } = useModal();
    const markets = [
        {
            name: "Чорсу",
            location: "Ташкент",
            desc: "Огромный базар под голубым куполом. Здесь можно найти всё: от горячих лепешек и специй до шелка и керамики.",
            type: "Традиционные товары",
            img: "https://www.advantour.com/img/uzbekistan/tashkent/chorsu/chorsu.jpg"
        },
        {
            name: "Сиабский базар",
            location: "Самарканд",
            desc: "Самый большой и древний рынок Самарканда. Славится самаркандскими лепешками и невероятным выбором сухофруктов.",
            type: "Еда и сувениры",
            img: "https://touristpro.com/api/files/ed1c078c-2415-4909-9a2c-0f1cb0f3796f"
        },
        {
            name: "Торговые купола",
            location: "Бухара",
            desc: "Токи Саррофон, Токи Заргарон — древние купола, где мастера тысячелетиями продают ковры, ножи и украшения.",
            type: "Ремесленничество",
            img: "https://www.centralasia-travel.com/uploads/gallery/1234/65.jpg"
        }
    ];

    return (
        <section className="py-24 bg-uzbek-deep-blue relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-white uppercase tracking-widest mb-4"
                    >
                        Восточный <span className="text-uzbek-gold">Базар</span>
                    </motion.h2>
                    <div className="h-1 w-24 bg-uzbek-gold mb-6"></div>
                    <p className="text-gray-400 font-light max-w-2xl text-lg">
                        Где купить национальную одежду, сувениры и окунуться в атмосферу настоящего Востока.
                        Увезите с собой частичку Узбекистана.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {markets.map((market, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.15 }}
                            className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-uzbek-gold/50 transition-colors duration-500 flex flex-col"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${market.img})` }}
                                />
                                <div className="absolute top-4 left-4 bg-uzbek-deep-blue/80 backdrop-blur-sm px-3 py-1 rounded-full border border-uzbek-gold/30">
                                    <span className="text-uzbek-gold text-xs font-bold uppercase tracking-wider">{market.location}</span>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <span className="text-gray-400 text-sm font-light mb-2">{market.type}</span>
                                <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-uzbek-gold transition-colors">{market.name}</h3>
                                <p className="text-gray-300 text-sm font-light leading-relaxed mb-8 flex-grow">
                                    {market.desc}
                                </p>

                                <div className="flex gap-4 mt-auto">
                                    <button
                                        onClick={() => openModal(market.name, 'Шоппинг тур')}
                                        className="flex-1 bg-uzbek-gold hover:bg-uzbek-gold-light text-uzbek-deep-blue font-semibold py-3 rounded-xl transition-colors"
                                    >
                                        Посетить
                                    </button>
                                    <button
                                        onClick={() => openModal('Фотогалерея базара', `Смотреть фото: ${market.name}`)}
                                        className="px-6 border border-white/20 hover:border-white text-white rounded-xl transition-colors"
                                    >
                                        Смотреть
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ShoppingSection;
