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