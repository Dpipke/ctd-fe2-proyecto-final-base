import { useEffect, useState } from "react";
import { obtenerNoticias } from "./fakeRest";
import { INoticiasNormalizadas, INoticias } from "./types";

const normalizarNoticias = (noticias: INoticias[]): INoticiasNormalizadas[] => {
  return noticias.map(n => {
    const titulo = n.titulo.split(" ")
      .map((str: string) => str.charAt(0).toUpperCase() + str.slice(1))
      .join(" ");
    
    const minutosTranscurridos = Math.floor(
      (new Date().getTime() - n.fecha.getTime()) / 60000
    );
    
    return {
      ...n,
      titulo,
      fecha: `Hace ${minutosTranscurridos} minutos`,
      descripcionCorta: n.descripcion.substring(0, 100)
    };
  });
}


const useNoticias = (): INoticiasNormalizadas[] => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);

  useEffect(() => {
    const obtenerInformacion = async () => {
      const respuesta = await obtenerNoticias();
      setNoticias(normalizarNoticias(respuesta));
    };
    obtenerInformacion();
  }, []);

  return noticias;
};

export default useNoticias;
