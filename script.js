const selectProductos = document.querySelector("#select-producto");
const selectCantPermitida = document.querySelector("#select-cantidad-permitida");
const selectColores = document.querySelector("#select-colores");
const divDetalle = document.querySelector("#detalle");
/* const divContTarjeta = document.querySelector("#contenedor-tarjeta"); */

var imagenes = [
    "https://d2r9epyceweg5n.cloudfront.net/stores/001/151/835/products/77903100014311-327d3cc4d519e71bfc16270456767301-640-0.jpg",
    "https://http2.mlstatic.com/D_NQ_NP_697922-MLA43494761447_092020-O.jpg",
    "https://www.conradomarket.com.ar/images/000000000011900116171Gaseosa-COCA-COLA-ZERO-x-1,5-L1.jpg",
    "https://carrefourar.vtexassets.com/arquivos/ids/315803/7622201503000_E02.jpg?v=638175130136170000",
    "https://jumboargentina.vtexassets.com/arquivos/ids/775399/Galletitas-Oreo-354gr-1-887492.jpg?v=638163058023670000",
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/093/780/products/serenisima-clasica-751-95fea92d1a27f8e9ab15710914346750-640-0.webp",
    "https://ardiaprod.vtexassets.com/arquivos/ids/186109/Yogur-Entero-Yogs-frutilla-botella-1-Lt-_1.jpg?v=637427579409600000",
    "https://carrefourar.vtexassets.com/arquivos/ids/307713/7791337060821_E01.jpg?v=638137979677870000",
    "https://jumboargentina.vtexassets.com/arquivos/ids/766445/Papas-Pringles-Original-X124gs-1-944089.jpg?v=638104306094430000",
    "https://www.paladini.com.ar/assets/img/productos/productos/danbo.png"

]
var productos = [
    "Producto 1",
    "Producto 2",
    "Producto 3",
    "Producto 4",
    "Producto 5",
    "Producto 6",
    "Producto 7",
    "Producto 8",
    "Producto 9",
    "Producto 10"
];

var rojoAmarillo = [
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow",
    "red",
    "yellow"
]

var verdeVioleta = [
    "green",
    "violet",
    "green",
    "violet",
    "green",
    "violet",
    "green",
    "violet",
    "green",
    "violet"
]

var azulGris = [
    "blue",
    "grey",
    "blue",
    "grey",
    "blue",
    "grey",
    "blue",
    "grey",
    "blue",
    "grey"
]

function generar() {
    var divContTarjeta = document.querySelector("#contenedor-tarjeta");
    divDetalle.innerHTML = "";
    divContTarjeta.innerHTML = "";
    var pProductos = `<p> La cantidad de productos es: ${selectProductos.value}</p>`;
    divDetalle.innerHTML += pProductos;
    var pCantPermitida = `<p> La cantidad de productos permitidos por compra es: ${selectCantPermitida.value}</p>`;
    divDetalle.innerHTML += pCantPermitida;
    var pColores = `<p> Los colores seleccionados a usar son: ${selectColores.value}</p>`;
    divDetalle.innerHTML += pColores;
    for (var i = 0; i < selectProductos.value; i++) {
        var tarjeta = "";
        switch (selectColores.value) {
            case "ninguno":
                tarjeta += `<div class="tarjeta"><img src=` + imagenes[i] + ` width="100px" heigth="100px">`;
                break;
            case "rojo-amarillo":
                tarjeta += `<div class="tarjeta" style="background-color:` + rojoAmarillo[i] + `"> <img src=` + imagenes[i] + ` width="100px" heigth="100px">`;
                break;
            case "verde-violeta":
                tarjeta += `<div class="tarjeta" style="background-color:` + verdeVioleta[i] + `"> <img src=` + imagenes[i] + ` width="100px" heigth="100px">`;
                break;
            case "azul-gris":
                tarjeta += `<div class="tarjeta" style="background-color:` + azulGris[i] + `"> <img src=` + imagenes[i] + ` width="100px" heigth="100px">`;
                break;
            default:
                break;
        }
            tarjeta += `<div class="detalleTarjeta"> <h3>` + productos[i] + `</h3>` +
            `<label>Seleccione pago</label>` +
            `<select class="select" ><option value="efectivo">Efectivo</option>` +
            `<option value="debito">Debito</option>` +
            `<option value="credito">Credito</option></select>` +

            `<label>Seleccione cantidades</label>` +
            `<select class="select" >`;
        for (var j = 1; j <= selectCantPermitida.value; j++) {
            tarjeta += `<option>` + j + `</option>`;
        }
        tarjeta += `</select>` +
            `<button class="buttonComprar" >Comprar</button>`;
        +`</div> </div>`;
        divContTarjeta.innerHTML += tarjeta;
    }
}




