import React,{Component} from "react";
import ListaDeProducto from "./ListaDeProducto"

const arregloProductos=[
    {id:1, Nombre:"Yogurt BELL'S",Descripcion:"Yogurt Bebible BELL'S Vainilla Botella 1Kg",precio:4.40 },
    {id:2, Nombre:"Café BELL'S",Descripcion:"Café Instantáneo BELL'S Naturalmente Fino Lata 200g",precio:14.00 },
    {id:3, Nombre:"Gaseosa Ica Kola",Descripcion:"Gaseosa INCA KOLA sin Azúcar Botella 1.5L Paquete 2un",precio:11.00 },
    {id:4, Nombre:"Gaseosa Coca Cola",Descripcion:"Gaseosa COCA COLA Zero Botella 1.5L Paquete 2un",precio:10.50},
    {id:5, Nombre:"Cereal Costa",Descripcion:"Cereal COSTA Choco cereal y leche Caja 8Un",precio:2.90},
    {id:6, Nombre:"Limpiador Boreal",Descripcion:"Limpiador Multiuso BOREAL Lavanda Botella 1800ml",precio:4.90},
    {id:7, Nombre:"Piqueo BELL'S",Descripcion:"Piqueo BELL'S Papas fritas 185Gr + Piqueo BELL'S Snax 230Gr Paquete 2Un",precio:8.90},
    {id:8, Nombre:"Detergente Bolivar",Descripcion:"Detergente en Polvo BOLÍVAR Active Duo Floral Bolsa 4.5kg",precio:40.10},
    {id:9, Nombre:"Cerveza KOPERWIEK",Descripcion:"Cerveza KOPERWIEK Premium 6 Pack Lata 330ml",precio:12.90},
    {id:10, Nombre:"Agua SAN MATEO",Descripcion:"Agua Mineral SAN MATEO sin Gas Bidón 7L",precio:8.00},
    {id:11, Nombre:"Pañales HUGGIES",Descripcion:"Pañales para Bebé HUGGIES Active Sec Talla XXG Paquete 72un",precio:62.90},
]

class Contenedor extends Component{

    constructor(){
        super()
        this.state={
            ListaProductos:arregloProductos,
            Listacarrito:[],
            Total:0
        }
    }
    escribiendo=(evento)=>{
       // console.log("escribiendo",evento.target.value)
        const texto=evento.target.value;
        this.filtrar(texto)
    }

    filtrar=(texto)=>{
        const listadoFiltrado=[];
       for(let i=0;i<arregloProductos.length;i++){
           const Productos=arregloProductos[i];
           if(Productos.Nombre.toLowerCase().startsWith(texto.toLowerCase())){
               listadoFiltrado.push(Productos);
           }
       }
       this.setState({ListaProductos:listadoFiltrado})
    }


    AgregarAlCarrito= (Productos) =>{
        const {Listacarrito} = this.state
        Listacarrito.push(Productos)
        let precioTotal=0;
        Listacarrito.forEach((item)=>{
              precioTotal+=item.precio;
        })
        this.setState({Listacarrito,Total:precioTotal})
    }
    render(){

        const{ListaProductos,Listacarrito,Total}=this.state
        return(
            <div>
            Buscar Productos
            <div style={{display:"flex",backgroundColor:"green"}}>
              <div style={{flex:1,backgroundColor:"green"}}>
                
              <input  onChange={this.escribiendo}/>
              <ListaDeProducto AgregarAlCarrito={this.AgregarAlCarrito} Productos={ListaProductos} />
                </div>

                    <div style={{flex:1,backgroundColor:"orange"}}>
                     Carrito de Compras
                     <div>Total:{Total}</div>

                     <ListaDeProducto Productos={Listacarrito}/>

                  </div> 
                </div>
                  </div> 


                 
        
        

        )
    }
}

export default Contenedor