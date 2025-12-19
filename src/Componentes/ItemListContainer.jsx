import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"

const ItemListContainer = ({ mensaje }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const { type } = useParams()

    useEffect(() => {
        const traerProductos = async () => {
            try {
                setLoading(true);
                
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                const productColeccion = type
                    ? query(
                        collection(db, "product-cakes"),
                        where("category", "==", type)
                      )
                    : collection(db, "product-cakes");

                const res = await getDocs(productColeccion);
                const list = res.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setData(list);
            } catch (error) {
                console.error('Error al cargar productos:', error);
            } finally {
                setLoading(false);
            }
        };

        traerProductos();
    }, [type]);

    return (
        <>
            {
                loading
                    ? <LoaderComponent text={type ? `Cargando categoria ${type}...` : 'Cargando Productos...'} />
                    : <div>
                        <h1 className='text-success'>{mensaje} {type && <span style={{ textTransform: 'capitalize', color: 'red' }}>{type}</span>}</h1>
                        <ItemList data={data} />
                    </div>
            }
        </>
    )
}

export default ItemListContainer
