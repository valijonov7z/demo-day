import React from 'react';
import { motion } from 'framer-motion';

const FoodSection = () => {
    const dishes = [
        { name: "Узбекский Плов", desc: "Король узбекской кухни. Рис, мясо, желтая морковь и ароматные специи.", img: "https://adrastravel.com/wp-content/uploads/2021/01/plov-na-lyagane.jpg" },
        { name: "Самса", desc: "Слоеные пирожки с мясом, тыквой или зеленью, приготовленные в тандыре.", img: "https://pbs.twimg.com/media/D98Swp6U4AEqaEQ.jpg" },
        { name: "Лагман", desc: "Домашняя вытянутая лапша с густым мясным соусом и овощами.", img: "https://f-o-o-d.ru/upload/iblock/c25/9043lm6p6ky2xqwvvqwkqdu5a1hol8qo/lagman.jpg" }
    ];

    const restaurants = [
        { name: "Plov Center", type: "Традиционная атмосфера", img: "https://eurasia.travel/wp-content/uploads/2026/02/21.-Plov-centre-in-Tashkent.jpg" },
        { name: "Afsona", type: "Современный узбекский стиль", img: "https://abnbm.uzwebline.com//storage/media/Afsona/2022-10-04%2016.31.42.jpg" },
        { name: "Minzifa", type: "Тапчаны и восточный колорит", img: "https://images.happycow.net/venues/1024/61/83/hcmp61839_410118.jpeg" },
        { name: "Terrassa Cafe", type: "Панорамный вид на старый город", img: "https://touristichka.ru/wp-content/uploads/2024/05/15.jpg" }
    ];

    return (
        <section className="bg-[#081220] relative z-20 py-24 shadow-inner">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Food Top */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-white uppercase tracking-widest mb-6">
                            Вкус <span className="text-uzbek-gold">Узбекистана</span>
                        </h2>
                        <p className="text-gray-400 font-light text-lg mb-8 leading-relaxed">
                            Узбекская кухня — это симфония вкусов. Сочное мясо, обилие свежих овощей, ароматные специи и ручная работа в каждом блюде. Обязательно попробуйте все кулинарные шедевры этой щедрой земли.
                        </p>

                        <div className="space-y-6">
                            {dishes.map((dish, idx) => (
                                <div key={idx} className="flex gap-6 items-center group bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-colors border border-transparent hover:border-uzbek-gold/30 cursor-pointer">
                                    <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                                        <img src={dish.img} alt={dish.name} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-1 group-hover:text-uzbek-gold transition-colors">{dish.name}</h4>
                                        <p className="text-gray-400 text-sm font-light">{dish.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Large image for food */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="relative rounded-3xl overflow-hidden h-[600px] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                            <img src="https://betaren.ru/upload/medialibrary/fe6/fe6806b3db6fb1fd453990bfb9b843bb.jpg" alt="Plov" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-10 left-10">
                                <span className="bg-uzbek-gold text-uzbek-deep-blue font-bold px-4 py-1 rounded-full text-sm mb-4 inline-block">MUST TRY</span>
                                <h3 className="text-4xl font-serif text-white mb-2">Настоящий Плов</h3>
                                <p className="text-gray-300 max-w-sm">Приготовлен в огромном казане по многовековому рецепту</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Restaurants grid */}
                <div className="mt-32">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-serif text-white mb-4">ЛУЧШИЕ РЕСТОРАНЫ</h3>
                        <div className="h-0.5 w-16 bg-uzbek-gold mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {restaurants.map((rest, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${rest.img})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-uzbek-deep-blue via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <span className="text-uzbek-gold text-xs font-bold uppercase tracking-wider mb-1 block">{rest.type}</span>
                                    <h4 className="text-xl font-medium text-white group-hover:text-uzbek-gold-light transition-colors">{rest.name}</h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FoodSection;
