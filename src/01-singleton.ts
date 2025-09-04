export interface IEquipo {
  nombre: string;
  tipo: string;
  estado: string;
}
class Inventario {

  private static instancia: Inventario;
  private equipos: IEquipo[] = [];

  constructor() {}

  public static obtenerInstancia(): Inventario {
    if (!Inventario.instancia) {
      Inventario.instancia = new Inventario();
    }
    return Inventario.instancia;
  }

  public agregarEquipo(nombre: string, tipo: string, estado: string): void {
    const equipo = { nombre, tipo, estado };
    this.equipos.push(equipo);
  }

  public listarEquipos() {
    return this.equipos;
  }
}

const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log(inventario.listarEquipos());