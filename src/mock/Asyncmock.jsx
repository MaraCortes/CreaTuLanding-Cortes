const productos = [
    {
        id: '01',
        name: 'Postre Tiramisú',
        description: 'Postre italiano con vainillas bañadas en café, queso crema',
        price: 45.000,
        category: 'postres',
        img: '/img/Tiramisu.webp',
        stock: 20
    },

    {
        id: '02',
        name: 'Marquise',
        description: 'Base de brownie de chocolate, con dulce de leche y merengue',
        price: 65.000,
        category: 'tartas',
        img: '/img/marquise.jpg',
        stock: 7
    },

    {
        id: '03',
        name: 'Mini Rogel',
        description: 'Porción de torta de capas de masas secas, dulce de leche, merengue. 120 gr.',
        price: 15.000,
        category: 'postres',
        img: '/img/Mini Rogel.webp',
        stock: 15
    },

    {
        id: '04',
        name: 'Lemon Pie',
        description: 'base de masa quebrada, rellena de crema de limón, cubierta con merengu',
        price: 49.000,
        category: 'tartas',
        img: '/img/LemonPie.jpg',
        stock: 8
    },

    {
        id: '05',
        name: 'Tarta de Frutilla',
        description: 'tarta de masa dulce, crema chantilly, frutillas y espejo de gelatina',
        price: 65.000,
        category: 'tartas',
        img: '/img/tarta Frutilla.webp',
        stock: 4
    },


    {
        id: '06',
        name: 'Torta Cumple',
        description: 'Torta de masa de vainilla, crema, mousse de vainilla, dulce de leche',
        price: 60.000,
        category: 'tortas',
        img: '/img/Torta Cumple.webp',
        stock: 5
    },

    {
        id: '07',
        name: 'Chesse Cake frutos rojos',
        description: 'Base crocante de galletas y manteca, crema, queso, frutos rojos de estación',
        price: 75.000,
        category: 'tortas',
        img: '/img/Torta Chesse Cake frutos rojos.webp',
        stock: 6
    },

    {id: '08',
    name: 'Mousse de Chocolate',
    description: 'Postre con una base de brownie, cubierta con una crema suave y espumosa de chocolate y una capa de dulce de leche, finalizando con merengue en la parte superior',
    price: 45.000,
    category: 'tortas',
    img:'/img/Mouse de Chocolate.webp',
    stock: 5
    }

]


export const traerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
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

export const traerUnProducto = (id) => {
    console.log({ id: id })
    return new Promise((resolve) => {
        setTimeout(() => {
            let producto = productos.find((item) => item.id === id)
            resolve(producto)
        }, 2000)
    })
}