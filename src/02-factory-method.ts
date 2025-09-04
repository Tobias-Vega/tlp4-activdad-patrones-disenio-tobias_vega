class Notebook {
  tipo: string;
  nombre: string;
  ram: string;
  procesador: string;

  constructor(tipo: string, nombre: string, ram: string, procesador: string) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.ram = ram;
    this.procesador = procesador;
  }
}

class EquipoFactory {
  
  crearEquipo(tipo: string): void {
    if (tipo === "Notebook") {
    }
  }


}