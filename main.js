class Reloj {
    constructor(nombre, marca, tipo, precio) {
      this.nombre = nombre;
      this.marca = marca;
      this.tipo = tipo;
      this.precio = precio;
    }
}
  
const coleccionDeRelojes = [];

function agregarRelojPrompt() {
    const nombre = prompt('Ingrese el nombre del reloj:');
    const marca = prompt('Ingrese la marca del reloj:');
    const tipo = prompt('Ingrese el tipo de reloj (Deportivo o Casual):');
    const precio = parseFloat(prompt('Ingrese el precio del reloj:'));
    
    const nuevoReloj = new Reloj(nombre, marca, tipo, precio);
    coleccionDeRelojes.push(nuevoReloj);
    
    alert(`El reloj ${nombre} ha sido agregado a la colección.`);
}

function buscarReloj(nombre) {
    const relojEncontrado = coleccionDeRelojes.find(reloj => reloj.nombre === nombre);
    if (relojEncontrado) {
      alert(`El reloj ${nombre} ha sido encontrado en la colección. Tipo: ${relojEncontrado.tipo}. Precio: ${relojEncontrado.precio}.`);
    } else {
      alert(`El reloj ${nombre} no está presente en la colección.`);
    }
  }
  
function filtrarPorTipo(tipo) {
    const relojesFiltrados = coleccionDeRelojes.filter(reloj => reloj.tipo === tipo);
    const nombresDeRelojesFiltrados = relojesFiltrados.map(reloj => reloj.nombre);
    
    if (nombresDeRelojesFiltrados.length > 0) {
      alert(`Los relojes del tipo ${tipo} son: ${nombresDeRelojesFiltrados.join(', ')}.`);
    } else {
      alert(`No se encontraron relojes del tipo ${tipo} en la colección.`);
    }
}
  
function ordenarPorPrecio() {
    const relojesOrdenados = coleccionDeRelojes.sort((a, b) => a.precio - b.precio);
    const nombresDeRelojesOrdenados = relojesOrdenados.map(reloj => reloj.nombre);
    
    alert(`Los relojes ordenados por precio son: ${nombresDeRelojesOrdenados.join(', ')}.`);
  }
  

function eliminarReloj(nombre) {
    const index = coleccionDeRelojes.findIndex(reloj => reloj.nombre === nombre);
    if (index !== -1) {
      coleccionDeRelojes.splice(index, 1);
      alert(`El reloj ${nombre} ha sido eliminado de la colección.`);
    } else {
        alert(`El reloj ${nombre} no está presente en la colección.`);
    }
}

let saludo = prompt(`ingrese 1 si quiere ingresar con el servicio de compra, caso contrario ingrese 0`);
while(saludo!="0"){
    let voto=prompt(`ingrese:
    1. añadir reloj
    2. buscar reloj
    3. filtrar por tipo
    4. ordenar los precios
    5. eliminar un reloj
    0. terminar programa`)
    switch(voto){
        case "1":
            agregarRelojPrompt();
            break
        case "2":
            buscarReloj(prompt(`nombre del reloj que quiere buscar`));
            break
        case "3":
            filtrarPorTipo(prompt(`tipo de reloj casual o deportivo`))
            break
        case "4":
            ordenarPorPrecio()
            break
        case "5":
            eliminarReloj(prompt(`Nombre del reloj que quiera eliminar`))
            break
        default:
            saludo = "0"
            break
    }
}


