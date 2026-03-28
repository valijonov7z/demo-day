import React from 'react';
import { motion } from 'framer-motion';

const GallerySection = () => {
    const images = [
        { src: "https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/cropped-images/-%D0%9A%D0%B0%D0%BB%D0%B0-0-0-0-0-1584091357-0-0-0-0-1584103565.jpg", span: "md:col-span-2 md:row-span-2", alt: "Архитектура" },
        { src: "https://www.advantour.com/img/uzbekistan/uzbek-dishes.jpg", span: "md:col-span-1 md:row-span-1", alt: "Еда" },
        { src: "https://uz.kursiv.media/wp-content/uploads/2025/07/uzbekistan-1024x681-1.webp", span: "md:col-span-1 md:row-span-1", alt: "Люди" },
        { src: "https://uzbekistan.travel/storage/app/media/cropped-images/5952701_xlarge-0-0-0-0-1584517453.jpg", span: "md:col-span-1 md:row-span-1", alt: "Природа" },
        { src: "https://www.advantour.com/img/uzbekistan/culture/music-in-uzbekistan-culture.jpg", span: "md:col-span-1 md:row-span-1", alt: "Культура" },
    ];

    return (
        <section id="gallery" className="bg-[#020509] relative z-20 py-24 pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-white uppercase tracking-widest mb-4">
                            <span className="text-uzbek-gold">ГАЛЕРЕЯ</span> ВПЕЧАТЛЕНИЙ
                        </h2>
                        <div className="h-1 w-24 bg-uzbek-gold mb-4"></div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 text-left md:text-right mt-6 md:mt-0"
                    >
                        <p className="text-gray-400 font-light max-w-sm ml-auto">
                            Почувствуйте атмосферу страны через объектив. Архитектура, природа и искренние улыбки людей.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative rounded-xl overflow-hidden group cursor-pointer ${img.span}`}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${img.src})` }}
                            ></div>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-4 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-sm font-light">{img.alt}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default GallerySection;
