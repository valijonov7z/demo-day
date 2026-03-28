import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Coffee, Gem, Music } from 'lucide-react';

const CultureSection = () => {
    const cultureFeatures = [
        { icon: <Heart className="w-8 h-8" />, title: "Гостеприимство", desc: "Узбекское гостеприимство — это не просто традиция, это образ жизни. Гость здесь всегда в почёте." },
        { icon: <Gem className="w-8 h-8" />, title: "Традиции", desc: "Свадьбы, Навруз и семейные праздники отмечаются с невероятным размахом и колоритом." },
        { icon: <Music className="w-8 h-8" />, title: "Танцы и музыка", desc: "Ритмы дойры и изящные движения национального танца передают всю энергию народа." },
        { icon: <Coffee className="w-8 h-8" />, title: "Чайная культура", desc: "Пиала зеленого чая — обязательный атрибут любой беседы и трапезы." }
    ];

    const clothes = [
        { name: "Атлас и Адрас", desc: "Знаменитые шёлковые и хлопковые ткани с узнаваемым узором", img: "https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/atlas-0-0-0-0-1596096432.jpg" },
        { name: "Чапан", desc: "Традиционный стеганый халат, богато расшитый золотом", img: "https://frankfurt.apollo.olxcdn.com/v1/files/qg7ql6vmclzd3-UZ/image;s=1075x1308" },
        { name: "Тюбетейка", desc: "Национальный головной убор с уникальным для каждого региона узором", img: "https://images.uzum.uz/d6igmlrvgbktbpvms63g/original.jpg" }
    ];

    return (
        <section id="culture" className="bg-[#081220] relative z-20 py-24 shadow-inner">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Culture Top Section */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif uppercase tracking-widest text-white mb-4"
                    >
                        ДУША <span className="text-uzbek-gold">ВОСТОКА</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 font-light max-w-2xl mx-auto text-lg mb-16"
                    >
                        Культура Узбекистана уникальна и многогранна. Это яркие краски, теплые улыбки и глубокое уважение к традициям предков.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {cultureFeatures.map((feat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 text-center"
                            >
                                <div className="w-16 h-16 mx-auto bg-uzbek-gold/20 text-uzbek-gold rounded-full flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                                    {feat.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                                <p className="text-gray-400 text-sm font-light leading-relaxed">{feat.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* National Clothes Layout Section */}
                <div className="mt-32">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/3"
                        >
                            <h2 className="text-3xl md:text-4xl font-serif text-white uppercase tracking-widest mb-6 border-l-4 border-uzbek-gold pl-6">
                                Национальная <br /><span className="text-uzbek-gold">Одежда</span>
                            </h2>
                            <p className="text-gray-400 font-light text-lg mb-8 leading-relaxed">
                                Яркие паттерны адраса и атласа стали мировым трендом. Традиционные мотивы вплетаются в современную моду, создавая уникальный узбекский стиль, который покоряет подиумы.
                            </p>

                            <div className="space-y-6">
                                {clothes.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 group">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-transparent group-hover:border-uzbek-gold transition-colors flex-shrink-0">
                                            <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg group-hover:text-uzbek-gold transition-colors">{item.name}</h4>
                                            <p className="text-gray-400 text-sm font-light">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-2/3 grid grid-cols-2 gap-4 h-[600px]"
                        >
                            <div className="flex flex-col gap-4 h-full pt-12">
                                <div className="rounded-2xl overflow-hidden h-2/5 relative group">
                                    <div className="absolute inset-0 bg-[url('https://www.siut.uz/templates/yootheme/cache/de/natclothing-debeb2c4.jpeg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
                                </div>
                                <div className="rounded-2xl overflow-hidden h-3/5 relative group">
                                    <div className="absolute inset-0 bg-[url('https://img.freepik.com/premium-photo/uzbek-national-clothes-shop-bukhara-uzbekistan_564806-2918.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 h-full pb-12">
                                <div className="rounded-2xl overflow-hidden h-3/5 relative group">
                                    <div className="absolute inset-0 bg-[url('https://www.advantour.com/img/uzbekistan/traditions/traditional-clothes/zarchapan.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
                                    <div className="absolute inset-0 border-[8px] border-uzbek-gold/20 rounded-2xl z-10 pointers-events-none"></div>
                                </div>
                                <div className="rounded-2xl overflow-hidden h-2/5 relative group">
                                    <div className="absolute inset-0 bg-[url('https://i.ytimg.com/vi/DmIGENJQPkE/sddefault.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CultureSection;
