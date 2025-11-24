const productos = [
    {id: '01',
    name: 'Pavlova',
    description: 'comodo',
    price: 235.000,
    category: 'sillones',
    img:'/img/pavlova.jpg',
    stock: 20
    },

    {id: '02',
    name: 'Marquise',
    description: 'Para dormir',
    price: 235.000,
    category: 'sillones',
    img:'/img/marquise.jpg',
    stock: 20
    },

    {id: '03',
    name: 'Cheese Cake',
    description: 'Para ver tele',
    price: 235.000,
    category: 'sillones',
    img:'/img/cheeseCakeFrutos Rojos.jpg',
    stock: 20
    },

    {id: '04',
    name: 'Lemon Pie',
    description: '',
    price: 235.000,
    category: 'sillones',
    img:'/img/LemonPie.jpg',
    stock: 20
    }

   
]


export const traerProductos = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
           resolve(productos)            
        },3000)
    })
}

// let error = false
// export const traerProductos = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(error){
//                 reject('Hubo un error intente mas tarde')
//             }else{

//                 resolve(products)
//             }
//         },3000)
//     })
// }

// export const  productoId = (id)=>{
//     console.log({id:id})
//     return new Promise ((resolve)=>{
//         setTimeout(()=>{
//             //harcodeado
//             // resolve(products[1])
//             //dinamico 
//             let producto= productos.find((item)=> item.id === id)
//             resolve(producto)
//         },3000)
//     })
// }