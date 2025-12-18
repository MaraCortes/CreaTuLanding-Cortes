import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider=({ children }) => {
    const [cart, setCart] = useState([])


    const addItem = (Item, quantity) =>{
        if(isInCart(Item.id)){
            setCart(
                cart.map((product)=>{
                    if(product.id === Item.id){
                        return{...product, cantidad: product.cantidad + quantity}
                    }else{
                        return product
                    }
                })
            )
        }else{
            setCart([...cart, {...Item, cantidad:quantity}])
        }



}

const clear = () =>{
    setCart([])

}


const removeItem = (id) =>{
    setCart (cart.filter((product) => product.id !== id))

}

const isInCart = (id) =>{
    return cart.some((product)=>product.id === id)

}

// OPCIONAL 
const itemCantidad = (id)=>{
    const itemCart = cart.find((product)=>product.id === id)

    if(itemInCar){
        return itemInCar.cantidad
    }else{
        // no existe
        return 0
    }
}





    return (
        <CartContext.Provider> value{{cart, clear, removeItem, addItem, itemCantidad}}
            {children}
        </CartContext.Provider>

    )
}