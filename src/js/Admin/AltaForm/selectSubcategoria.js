import { useState, useEffect } from "react";
import { db } from "../../firebase/connectFirebase";
import { collection, getDocs } from 'firebase/firestore/lite'

export const SelectSubcategorias = ({handle, defaultSubcategoria})=>{

    const [ subcategorias, setSubcategorias ] = useState([ ])
    useEffect(()=>{
        
        const subcat = collection(db,'subcategorias');
        
        getDocs(subcat)
        .then((res)=>{
            setSubcategorias(
                res.docs.map((res)=>{
                    return  {
                        idSubcat:res.id, 
                        ...res.data()
                    }
                })
                )
            })
        
        },[])
        
        /* para controlar lo que devuelve la base de datos */
        /* console.log(subcategorias) */
        

        return(
                <select id='inputSubcategoria' name="idSubcategoria" onChange={handle} >
                    {
                        subcategorias.map(opt=>{
                            return (defaultSubcategoria===opt.idSubcategoria) ? <option key={opt.idSubcat} value={opt.idSubcategoria} selected>{opt.nombreSubcategoria}</option> : <option key={opt.idSubcat} value={opt.idSubcategoria}>{opt.nombreSubcategoria}</option>
                        })
                    }
                </select>
        )

    }
    
