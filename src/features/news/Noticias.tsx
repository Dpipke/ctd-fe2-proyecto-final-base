import { useEffect, useState } from "react";
import useNoticias from "./useNoticias";
import ModalPremium from "./ModalPremium";
import ModalNoticia from "./ModalNoticia";
import Noticia from "./Noticia";

import { 
    ContenedorNoticias, 
    TituloNoticias, 
    ListaNoticias, 
    // TarjetaNoticia, 
    // FechaTarjetaNoticia, 
    // DescripcionTarjetaNoticia, 
    // ImagenTarjetaNoticia, 
    // TituloTarjetaNoticia, 
    // BotonLectura 
} from "./styled";
import { INoticiasNormalizadas } from './types';


const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

    const handleCloseModal = () => {
        setModal(null);
    }

    return (
        <ContenedorNoticias>
            <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
            <ListaNoticias>
                {noticias.map(noticia => (
                    <Noticia key={noticia.id} noticia={noticia} setModal={setModal} />
                ))}
            </ListaNoticias>

            {modal && (
                modal.esPremium ? (
                    <ModalPremium onClose={handleCloseModal} />
                ) : (
                    <ModalNoticia noticia={modal} onClose={handleCloseModal} />
                )
            )}
        </ContenedorNoticias>
    );
};

export default Noticias;
