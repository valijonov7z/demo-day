import React from 'react';
import { motion } from 'framer-motion';
import { Sun, CreditCard, ShieldCheck } from 'lucide-react';

const TipsSection = () => {
    const tips = [
        {
            icon: <Sun className="w-8 h-8" />,
            title: "Когда ехать",
            desc: "Лучшее время для посещения: весна (апрель-май) и осень (сентябрь-октябрь). Погода идеальна для прогулок, а природа на пике красоты."
        },
        {
            icon: <CreditCard className="w-8 h-8" />,
            title: "Визы и деньги",
            desc: "Безвиз для многих стран. Местная валюта — сум (UZS). Выгоднее расплачиваться наличными на базарах, в отелях и ресторанах принимают Visa/Mastercard."
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Безопасность",
            desc: "Узбекистан стабильно входит в топ самых безопасных стран мира для туристов. Люди очень отзывчивы и всегда готовы помочь гостю."
        }
    ];

    return (
        <section className="bg-[#050B14] relative z-20 py-24 pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif text-white uppercase tracking-widest mb-4"
                    >
                        СОВЕТЫ <span className="text-uzbek-gold">ТУРИСТАМ</span>
                    </motion.h2>
                    <div className="h-1 w-24 bg-uzbek-gold mx-auto mb-6"></div>
                    <p className="text-gray-400 font-light max-w-2xl mx-auto text-lg">
                        Всё, что вам нужно знать перед путешествием в сердце Центральной Азии.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tips.map((tip, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="text-uzbek-gold mb-6 bg-uzbek-gold/10 inline-block p-4 rounded-xl">
                                {tip.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{tip.title}</h3>
                            <p className="text-gray-400 font-light leading-relaxed">
                                {tip.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TipsSection;
