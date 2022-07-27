class Item{
    static cantidadItems = 0;

    constructor(descripcion, cantidad,precio){
        this._descripcion = descripcion;
        this._cantidad = cantidad;
        this._precio = precio;
        this._acumulado = cantidad*precio;
        this._id = ++Item.cantidadItems;
    }

    get descripcion(){
        return this._descripcion;
    }

    set descripcion(descripcion){
        this._descripcion = descripcion;
    }

    get cantidad(){
        return this._cantidad;
    }

    set cantidad(cantidad){
        this._cantidad = cantidad;
        this._acumulado = this._precio * this._cantidad;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
        this._acumulado = this._precio * this._cantidad;
    }
    
    get acumulado(){
        return this._acumulado;
    }

    get id(){
        return this._id;
    }
}