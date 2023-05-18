const selectProductos = document.querySelector("#select-producto");
const selectCantProducto = document.querySelector("#select-cantidad-producto");
const selectColores = document.querySelector("#select-colores");
const divContenedorProductos = document.querySelector("#contenedor-productos");


function generar(){
    for ( let i = 0; i < (selectProductos.value); i++) {
        divContenedorProductos.innerHTML += `<p> La cantidad de productos a mostrar es: ${i+1} </p>`;
    
    }
}

