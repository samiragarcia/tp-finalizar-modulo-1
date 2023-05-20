const selectProductos = document.querySelector("#select-producto");
const selectCantPermitida = document.querySelector("#select-cantidad-permitida");
const selectColores = document.querySelector("#select-colores");
const divDetalle = document.querySelector("#detalle");
const divContTarjeta = document.querySelector("#contenedor-tarjeta");



function generar(){
    divDetalle.innerHTML = "";
    var pProductos = `<p> La cantidad de productos es: ${selectProductos.value}</p>`;
    divDetalle.innerHTML += pProductos;
    var pCantPermitida = `<p> La cantidad de productos permitidos por compra es: ${selectCantPermitida.value}</p>`;
    divDetalle.innerHTML += pCantPermitida;
    var pColores = `<p> Los colores seleccionados a usar son: ${selectColores.value}</p>`;
    divDetalle.innerHTML += pColores;
    for (var i = 0; i < selectProductos.value; i++){
        var tarjeta = `<div> <img src="https://d2r9epyceweg5n.cloudfront.net/stores/001/151/835/products/77903100014311-327d3cc4d519e71bfc16270456767301-640-0.jpg">`+
    `<h3>Producto 1</h3>`+
    `<label>Seleccione pago</label>`+
    `<select><option value="efectivo">Efectivo</option>`+
    `<option value="debito">Debito</option>`+
    `<option value="credito">Credito</option></select>`+

    `<label>Seleccione cantidades</label>`+
    `<select>`; 
    for (var j = 1; j <= selectCantPermitida.value; j++){
        tarjeta += `<option>`+ j +`</option>`;
    }
    tarjeta += `</select>`+
    `<button>Comprar</button>`;
    +`</div>`;
    divContTarjeta.innerHTML += tarjeta;
    }
    
}



