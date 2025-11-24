
import { useEffect, useState } from "react"
import {traerProductos} from "../mock/Asyncmock"
import ItemList from "./ItemList"

const ItemListContainer = ({mensaje})=> {
    const[data, setData] = useState([])

    useEffect(()=>{
        traerProductos()
        .then((res)=> setData(res))
    }, [])

    console.log('Soy ItemListContainer', data)
    return(
        <div>
            <h1>{mensaje}</h1>
            {/* {data.map((prod)=> <p key = {prod.id}>{prod.id}</p> )} */}
            <ItemList data= {data} />
        </div>
    )
}

export default ItemListContainer