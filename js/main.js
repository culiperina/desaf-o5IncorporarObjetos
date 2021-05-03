// Creo la clase Producto para los cursos 
class Producto {
    constructor(id,nombre, precio) {
    this.id=id;
    this.nombre = nombre;
    this.precio= precio;
    this.envio=0.20;
    this.vendido= false;
    }

vender(){
        this.vendido = true;
    }

sumarEnvio(){
        this.precio= this.precio+(this.precio * this.envio);
    }
}

const producto1 = new Producto(1,"Curso Básico",250);
const producto2 = new Producto(2,"Curso Intermedio",450);
const producto3 = new Producto(3,"Curso Avanzado",1000);
producto1.vender();
producto2.vender();
producto3.sumarEnvio();


console.log (producto1);
console.log (producto2);
console.log (producto3);


// Solicito que ingrese el producto que quiere
let compra= parseInt(prompt ("Ingresá qué producto querés comprar: \n 1. Curso Básico $250 \n 2. Curso Intermedio $450 \n 3. Curso Avanzado $1000"));

const funcioncompra = (compraseleccionada) => {
switch (compraseleccionada) {
  case 1:
    alert ("Excelente elección! Agregaste " + producto1+ " al carrito.");
                       

  break;
  case 2:
    alert ("Excelente elección! Agregaste " + producto2 + " al carrito.");


    break;
    case 3:
      alert ("Excelente elección! Agregaste " + producto3 + " al carrito.");

      break;
      default:
        alert ("No seleccionaste ningún producto");
        break; 
}
}

while (compra<=3 && compra>0){
funcioncompra(compra);
compra= parseInt(prompt ("Ingresá qué producto querés comprar: \n 1. Curso Básico $250 \n 2. Curso Intermedio $450 \n 3. Curso Avanzado $1000 \n 4. Finalizar compra envío"));
 }
alert("Compra finalizada, el total es $"+ precio);