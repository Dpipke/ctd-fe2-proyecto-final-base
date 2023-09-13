export interface INoticia {
  noticia: INoticiasNormalizadas | null,
  setModal: (noticia: INoticiasNormalizadas | null) => void;
  onClose: () => void;
}

export interface INoticias {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: Date; 
  esPremium: boolean;
  imagen: string;
}

export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: number | string;
  esPremium: boolean;
  imagen: string;
  descripcionCorta?: string;
}

export interface INoticiaProps {
  noticia: INoticiasNormalizadas;
  setModal: (noticia: INoticiasNormalizadas | null) => void;
}

export interface IModalNoticiaProps {
  noticia: INoticiasNormalizadas;
  onClose: () => void;
}

export interface IModalPremiumProps {
  onClose: () => void;
}
