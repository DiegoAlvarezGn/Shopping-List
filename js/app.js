const items = []

const formatoMoneda = (valor) =>{
    return valor.toLocaleString('en-US',{style: 'currency',currency:'USD',minimumFractionDigits:2});
}

const cargarDatos = () => {
    cargarTotal();
    cargarItems();
}

const cargarTotal = () => {
    let suma = 0;
    for(let item of items){
        suma += item.acumulado;
    }
    document.getElementById('total-valor').innerHTML = `Total: ${formatoMoneda(suma)}`;
}

const cargarItems = () => {
    let html = '';
    if(items.length == 0){
        html = mostrarAviso();
    }else{
        for(let item of items){
            html += nuevoItem(item);
        }
    }
    document.getElementById('listaItems').innerHTML = html;
}

const nuevoItem = (item) => {
    return `<div class="elemento">
                <div class="elemento-descripcion">
                    <div class="elemento-atributo">Descripción:</div>
                    <div class="elemento-valor">${item.descripcion}</div>
                </div>
                <div class="elemento-cantidad">
                    <div class="elemento-atributo">Cantidad:</div>
                    <div class="elemento-valor">${item.cantidad}</div>
                </div>
                <div class="elemento-precio">
                    <div class="elemento-atributo">Precio:</div>
                    <div class="elemento-valor">${formatoMoneda(item.precio)}</div>
                </div>
                <div class="elemento-total">
                    <div class="elemento-atributo">Total:</div>
                    <div class="elemento-valor">${formatoMoneda(item.acumulado)}</div>
                </div>
                <div class="elemento-eliminar">
                    <ion-icon onclick="eliminarItem(${item.id})" name="close-circle"></ion-icon>
                </div>
            </div>`
}

const mostrarAviso = () =>{
    return `<div class="elemento aviso">
                <h3>Aún no hay elementos agregados</h3>
                <ion-icon name="cube-outline"></ion-icon>
            </div>`
}

const agregarItem = () => {
    let formulario = document.getElementById('formulario');
    let descripcion = formulario['descripcion'].value;
    let cantidad = formulario['cantidad'].value;
    let precio = formulario['precio'].value;

    if(descripcion !== '' && cantidad !== '' && precio !== '' ){
        if(!isNaN(cantidad) && !isNaN(precio)){
            items.push(new Item(descripcion,Number(cantidad),Number(precio)));
            formulario['descripcion'].value = '';
            formulario['cantidad'].value = '';
            formulario['precio'].value = '';
            cargarTotal();
            cargarItems();
        }
    }
}

const eliminarItem = (id) => {
    let indiceEliminar = items.findIndex(item => item.id === id);
    items.splice(indiceEliminar, 1);
    cargarTotal();
    cargarItems();
}