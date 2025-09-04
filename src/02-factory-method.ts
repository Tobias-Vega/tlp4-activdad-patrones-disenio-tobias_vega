abstract class Equipos {
  constructor(
    protected tipo: string, 
    protected nombre: string, 
    protected ram: string, 
    protected procesador: string
  ) {}

  public abstract detalles(): string;
}

class Notebook extends Equipos {

  public detalles(): string {
    return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Desktop extends Equipos {

  public detalles(): string {
    return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Servidor extends Equipos {

  public detalles(): string {
    return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class EquipoFactory {

  crearEquipo(tipo: string, nombre: string, ram: string, procesador: string) {
    if (tipo === "Notebook") {
      return new Notebook(tipo, nombre, ram, procesador);
    } else if (tipo === "Desktop") {
      return new Desktop(tipo, nombre, ram, procesador);
    } else if (tipo === "Servidor") {
      return new Servidor(tipo, nombre, ram, procesador);
    } else {
      throw new Error("Tipo de equipo no reconocido");
    }
  }
}

const factory = new EquipoFactory();
const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(notebook.detalles());

const desktop = factory.crearEquipo("Desktop", "HP Pavilion", "32GB", "Intel i9");
console.log(desktop.detalles());

const servidor = factory.crearEquipo("Servidor", "Dell PowerEdge", "128GB", "AMD EPYC");
console.log(servidor.detalles());