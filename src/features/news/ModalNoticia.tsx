import Modal from "./Modal";
import { ImagenModal, CotenedorTexto, TituloModal, DescripcionModal } from "./styled";
import { IModalNoticiaProps } from './types';

const ModalNoticia = ({ noticia, onClose }: IModalNoticiaProps) => {
    if (!noticia) return null;  
    return (
        <Modal onClose={onClose}>
            <ImagenModal src={noticia.imagen} alt="news-image" />
            <CotenedorTexto>
                <TituloModal>{noticia.titulo}</TituloModal>
                <DescripcionModal>{noticia.descripcion}</DescripcionModal>
            </CotenedorTexto>
        </Modal>
    );
};

export default ModalNoticia;
