import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState({ title: '', subject: '' });

    const openModal = (title, subject = '') => {
        setModalData({ title, subject });
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal, modalData }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);
