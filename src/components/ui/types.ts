// src/types.ts
export interface User {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  rol: string;
  status: "activo" | "inactivo";
}
export interface Estacion {
  id: number;
  nombre: string;
  modelo: string;
  longitud: number;
  latitud: number;
  responsable: string;
  status: "activo" | "inactivo";
}