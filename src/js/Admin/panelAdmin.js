import { useState } from "react"
import { db } from "../firebase/connectFirebase"
import { collection, addDoc } from 'firebase/firestore/lite'


export const PanelAdmin = ()=>{

    const subirDocumento = (datos)=>{
        const productos = collection(db,'productos');
        addDoc(productos, datos)
            .then((doc)=>{
                console.log(doc.id)
            })
    }
    
    const [datos, setDatos] = useState(
        {
            nombreProducto:'',
            detalleProducto:'',
            precioProducto:0,
            idCategoria:'',
            idSubcategoria:'',
            activoProducto:true    
        }
    )

    const handleDatos = (e)=>{
        setDatos({
            ...datos,
            [e.target.name]:e.target.value 
        })
    }

    const handleNumeros = (e)=>{
        setDatos({
            ...datos,
            [e.target.name]:Number(e.target.value) 
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        subirDocumento(datos)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder="Nombre Producto" onChange={handleDatos} value={datos.nombreProducto} name='nombreProducto'/>
                <input type='text' placeholder="Detalle Producto"onChange={handleDatos} value={datos.detalleProducto} name='detalleProducto' />
                <input type='number' placeholder="Precio Producto" onChange={handleNumeros} value={datos.precioProducto} name='precioProducto' />
                <input type='text' placeholder="Categoria Producto" onChange={handleDatos} value={datos.idCategoria} name='idCategoria' />
                <input type='text' placeholder="Subcategoria Producto" onChange={handleDatos} value={datos.idSubcategoria} name='idSubcategoria' />
                <input type='checkbox'  onChange={handleDatos} value={datos.activoProducto} name='activoProducto' defaultChecked={true}/>
                <button>Crear</button>
            </form>
        </>
    )

}