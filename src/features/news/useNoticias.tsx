import { useEffect, useState } from "react";
import { obtenerNoticias, INoticias } from "./fakeRest";
import { INoticiasNormalizadas } from "./types";

export const titulo = (titulo: String) => {
  const convertirTitulo = titulo.split(" ").map((string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }).join(" ");

  return convertirTitulo;
}

export const calcularMinutos = (fecha: Date) => {
  const ahora = new Date();
  const minutosTranscurridos = Math.floor(
      (ahora.getTime() - fecha.getTime()) / 60000
  );
  return minutosTranscurridos;
};

export const noticiasNormalizadas = (noticias: INoticias[]) => {
  return noticias.map((n) => ({
      id: n.id,
      titulo: titulo(n.titulo),
      descripcion: n.descripcion,
      fecha: `Hace ${calcularMinutos(n.fecha)} minutos`,
      esPremium: n.esPremium,
      imagen: n.imagen,
      descripcionCorta: n.descripcion.substring(0, 100),
  }));
};

