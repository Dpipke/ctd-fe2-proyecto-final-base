import React from 'react';
import { ContenedorModal, TarjetaModal, CloseButton } from "./styled";
import { CloseButton as Close } from "../../assets";

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => (
    <ContenedorModal>
        <TarjetaModal>
            <CloseButton onClick={onClose}>
                <img src={Close} alt="close-button" />
            </CloseButton>
            {children}
        </TarjetaModal>
    </ContenedorModal>
);

export default Modal;
