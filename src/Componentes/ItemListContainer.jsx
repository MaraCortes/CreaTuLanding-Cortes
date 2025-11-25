
import { useEffect, useState } from "react"
import {traerProductos} from "../mock/Asyncmock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({mensaje})=> {
    const[data, setData] = useState([])
    const {categoryType}= useParams()

    useEffect(()=>{
        traerProductos()
        .then((res)=> {
            if(categoryType){
                setData(res.filter((prod) => prod.category === categoryType))
            }else{
                setData(res)
            }
        })          
            
    }, [categoryType])

    return(
        <div>
            <h1>{mensaje}</h1>  
             <ItemList data={data}/>          
        </div>       
    )
}


export default ItemListContainer