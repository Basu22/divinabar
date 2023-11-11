import { capuccinoItaliano } from "../bancoImg"

export const ItemContenido = ({productos})=>{

    return(
        <>
        {        
            productos.map(item=>(/* para renderizar siempre en paréntesis los maps */
                <article key={item.idProducto} className="contenedorCaja">
                    <section className="contenedorImgCaja">
                        <img className="imgCaja" alt="" src={capuccinoItaliano} />
                    </section>
                    <section className="contenedorTextoCaja">   
                        <section className="contenedorDetalle">
                            <h4 className="detalleTitulo">{item.nombreProducto}</h4>
                            <p className="detalleProducto">{item.detalleProducto}</p>
                        </section>
                        <section className="contenedorPrecio">
                            <p className="detallePrecio">$ {item.precioProducto}</p>
                        </section>
                    </section>
                </article>
            )) 
        }
        </>
   
    )
}