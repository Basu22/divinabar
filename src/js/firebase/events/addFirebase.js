import { db } from "../connectFirebase";
import { collection, addDoc } from 'firebase/firestore/lite'

export const addFirebase = (datos, coleccion)=>{
        
    
    const productos = collection(db,coleccion);
    addDoc(productos, datos)
        .then((doc)=>{
            console.log(doc.id)
        })


}

