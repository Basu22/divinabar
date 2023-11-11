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
            precioProducto:'',
            idCategoria:'',
            idSubcategoria:'',
            activoProducto:'',
        }
    )
    
    const handleDatos = (e)=>{
        setDatos({
            ...datos,
            [e.target.name]:e.target.value,
        })
        console.log({[e.target.name]:e.target.value})
    }

    const handleNumeros = (e)=>{
        setDatos({
            ...datos,
            [e.target.name]:Number(e.target.value) 
        })
        console.log({[e.target.name]:e.target.value})
    }

    const handleBoolean= (e)=>{
        setDatos({
            ...datos,
            [e.target.name]:e.target.checked 
        })
        console.log({[e.target.name]:e.target.checked})
    }

    const handleSubmit = (e)=>{
    e.preventDefault()
    subirDocumento(datos)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label id='nombreProducto'>Nombre Producto</label>
                <input id='inputNombre' type='text' placeholder="Nombre Producto" onChange={handleDatos} value={datos.nombreProducto} name='nombreProducto'/>
                <label id='detalleProducto'>Detalle Producto</label>
                <input id='inputDetalle' type='text' placeholder="Detalle Producto"onChange={handleDatos} value={datos.detalleProducto} name='detalleProducto' />
                <label id='precioProducto' >Precio</label>
                <input id='inputPrecio' type='number' placeholder="Precio Producto" onChange={handleNumeros} value={datos.precioProducto} name='precioProducto' />
                <label id='categoriaProducto' >Categoria Producto</label>
                <input id='inputCategoria' type='text' placeholder="Categoria Producto" onChange={handleDatos} value={datos.idCategoria} name='idCategoria' />
                <label id='subcatProducto' >Subcategoria Producto</label>
                <input id='inputSubcat' type='text' placeholder="Subcategoria Producto" onChange={handleDatos} value={datos.idSubcategoria} name='idSubcategoria' />
                <label id='textoCheckbox' >Activo?</label>
                <input id='checkbox' type='checkbox' onChange={handleBoolean} value={datos.activoProducto.checked} name='activoProducto' defaultChecked={false}/>
                <button id='button'>Crear</button>
            </form>
        </>
    )

}