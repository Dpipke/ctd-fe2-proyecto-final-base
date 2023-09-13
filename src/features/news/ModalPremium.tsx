import Modal from "./Modal";
import { ImagenModal, CotenedorTexto, TituloModal, DescripcionModal, BotonSuscribir } from "./styled";
import {SuscribeImage} from "../../assets/index";
import { INoticia, IModalPremiumProps } from "./types";


const ModalPremium = ({ onClose }: IModalPremiumProps) => {
    return (
    <Modal onClose={onClose}>
        <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
        <CotenedorTexto>
            <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
            <DescripcionModal>
                Suscríbete a nuestro newsletter y recibe noticias de nuestros personajes favoritos.
            </DescripcionModal>
            <BotonSuscribir onClick={() => {
                setTimeout(() => {
                    alert("Suscripto!");
                    onClose();
                }, 1000);
            }}>
                Suscríbete
            </BotonSuscribir>
        </CotenedorTexto>
    </Modal>
    )
};

export default ModalPremium;
