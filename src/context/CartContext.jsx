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


const itemCantidad = (id)=>{
    const itemCart = cart.find((product)=>product.id === id)

    if(itemCart){
        return itemCart.cantidad
    }else{
        
        return 0
    }
}





const total = () => {
    return cart.reduce((acc, product) => acc + (product.price * product.cantidad), 0)
}

    return (
        <CartContext.Provider value={{cart, clear, removeItem, addItem, itemCantidad, total}}>
            {children}
        </CartContext.Provider>

    )
}