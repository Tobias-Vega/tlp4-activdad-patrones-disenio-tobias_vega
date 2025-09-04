import { IEquipo } from './01-singleton';

class InventarioViejo {
  private items: IEquipo[] = [];

  public agregarItem(item: IEquipo): void {
    this.items.push(item);
  }

  public getItems() {
    return this.items;
  }
}

class AdaptadorInventario {

  constructor(private inventarioViejo: InventarioViejo) {}

  public agregarEquipo(nombre: string, tipo: string, estado: string): void {
    const item = { nombre, tipo, estado };
    this.inventarioViejo.agregarItem(item);
  }

  public listarEquipos(): IEquipo[] {
    return this.inventarioViejo.getItems();
  }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());