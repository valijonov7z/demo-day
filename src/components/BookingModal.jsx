import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const BookingModal = () => {
    const { isOpen, closeModal, modalData } = useModal();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            closeModal();
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closeModal}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                ></motion.div>

                {/* Modal Window */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-lg bg-uzbek-deep-blue border border-uzbek-gold/30 shadow-[0_0_40px_rgba(0,0,0,0.8)] rounded-3xl overflow-hidden glass-panel"
                >
                    {/* Decorative header */}
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-uzbek-gold/20 to-transparent opacity-50 pointer-events-none"></div>

                    <button
                        type="button"
                        onClick={closeModal}
                        className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-50 bg-black/20 rounded-full p-2 cursor-pointer"
                    >
                        <X className="w-5 h-5 pointer-events-none" />
                    </button>

                    <div className="p-8 md:p-10 relative z-10">
                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center h-64 text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                >
                                    <CheckCircle2 className="w-20 h-20 text-uzbek-gold mb-6" />
                                </motion.div>
                                <h3 className="text-2xl font-serif text-white mb-2">Заявка отправлена!</h3>
                                <p className="text-gray-400 font-light">Мы скоро свяжемся с вами.</p>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-3xl font-serif text-white mb-2">{modalData.title || "Оставьте заявку"}</h3>
                                <p className="text-gray-400 font-light mb-8">
                                    {modalData.subject ? `Интересует: ${modalData.subject}` : 'Оставьте свои контакты, и мы поможем организовать идеальное путешествие.'}
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Ваше имя"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py- relatext-white focus:outline-none focus:border-uzbek-gold py-4 transition-colors font-light"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            required
                                            placeholder="Номер телефона"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-uzbek-gold transition-colors font-light"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            placeholder="Дополнительные пожелания"
                                            rows="3"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-uzbek-gold transition-colors font-light resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-uzbek-gold hover:bg-uzbek-gold-light text-uzbek-deep-blue font-bold tracking-wider uppercase rounded-xl py-4 mt-4 transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                                    >
                                        Отправить заявку
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default BookingModal;
