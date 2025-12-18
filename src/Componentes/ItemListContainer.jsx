
// import { useEffect, useState } from "react"
// import {traerProductos} from "../mock/Asyncmock"
// import ItemList from "./ItemList"
// import { useParams } from "react-router-dom"

// const ItemListContainer = ({mensaje})=> {
//     const[data, setData] = useState([])
//     const {categoryType}= useParams()

//     useEffect(()=>{
//         traerProductos()
//         .then((res)=> {
//             if(categoryType){
//                 setData(res.filter((prod) => prod.category === categoryType))
//             }else{
//                 setData(res)
//             }
//         })          

//     }, [categoryType])

//     return(
//         <div>
//             <h1>{mensaje}</h1>  
//              <ItemList data={data}/>          
//         </div>       
//     )
// }


// export default ItemListContainer


import { useEffect, useState } from "react"
import { getProducts } from "../mock/Asyncmock"
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
        setLoading(true)
        const productColeccion = ? query(collection(db, "product-cakes"), where("category", "==", type)) : collection(db, "product-cakes")
        getDocs(productColeccion)
                .then((res) => {
                    console.log(res)
                    console.log(res.docs)
                    const list = res.docs.map((doc) => {
                        return {
                            id: doc.id,
                            ...doc.data()
                        }
                    })
                    setData(list)
                })
        .catch ((error) => console.log(error))
        .finally(() => setLoading(false))
},[type])










// useEffect(()=>{
//     setLoading(true)
//     //pedir datos
//     getProducts()//retorna una promesa
//     .then((res)=> {
//         if(type){
//             //filtrar
//              setData(res.filter((prod)=> prod.category === type))
//         }else{
//             //devuelvo todo
//             setData(res)
//         }
//     })//tratar la promesa y guardarlo en un estado
//     .catch((error)=> console.log(error))//atrapar el error
//     .finally(()=> setLoading(false))

//     //esta a la escucha del cambio de categoria
// },[type])


//return anticipado
// if(loading){
//     // return <p>Cargando productos...</p>
//     return <div style={{width:'100%', height:'85vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
//         <Spinner/>
//         <p>Cargando productos...</p>
//     </div>
// }

return (

    <>
        {
            loading
                ? <LoaderComponent text={type ? `Cargando categoria ${type}...` : 'Cargando Productos...'} />
                : <div>
                    <h1 className='text-success'>{mensaje} {type && <span style={{ textTransform: 'capitalize', color: 'red' }}>{type}</span>}</h1>
                    {/* <Input/> */}
                    <ItemList data={data} />
                </div>
        }
    </>


)
}
export default ItemListContainer 