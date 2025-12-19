import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import {doc, getDoc} from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const [cargando, setCargando] = useState(true)
    const [invalid, setInvalid] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        const traerProducto = async () => {
            try {
                setCargando(true);
                setInvalid(false);
                
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                const docRef = doc(db, "product-cakes", id);
                const res = await getDoc(docRef);
                
                if(res.exists() && res.data()){
                    setDetalle({id: res.id, ...res.data()});
                } else {
                    setInvalid(true);
                }
            } catch (error) {
                console.error('Error al obtener producto:', error);
                setInvalid(true);
            } finally {
                setCargando(false);
            }
        };

        traerProducto();
    }, [id]);

    if (cargando) {
        return <LoaderComponent text={'Cargando detalle de producto'}/>
    }

    if (invalid || !detalle || !detalle.id) {
        return (
            <div className="text-center p-5">
                <h2>Producto no encontrado</h2>
                <p>El producto que buscas no existe o fue eliminado.</p>
                <Link to="/" className="btn btn-primary">Volver al inicio</Link>
            </div>
        )
    }

    return <ItemDetail detalle={detalle}/>
}

export default ItemDetailContainer
