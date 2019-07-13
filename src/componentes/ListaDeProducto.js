import React, {Component} from "react";

class ListaDeProducto extends Component{
   clickProducto =(item) =>{
       const {AgregarAlCarrito} = this.props
 console.log("Haciendo click en el Producto", item)
     if(typeof AgregarAlCarrito === "function"){
     AgregarAlCarrito(item);
    }
   }
   
    render(){
        const{Productos}=this.props
        return(
            <div>
 <div>
 {Productos.map((item, index)=>{

    return(
 <div onClick={()=>{this.clickProducto(item)}} key={index}>
  Productos: {item.Nombre}
  <br></br>
  /Descripcion: {item.Descripcion} 
  <br></br>
    / Precio=S/{item.precio} 
 </div>

  )
  })}
  </div>
</div>
 )
}
   
}

export default ListaDeProducto
