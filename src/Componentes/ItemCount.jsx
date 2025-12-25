// import {useState, useEffect} from 'react'

// const ItemCount = ({stock, onAdd}) => {
//     const [count, setCount]= useState(1)
//         const sumar = ()=> {
//             if(count < stock){
//                 setCount(count + 1)
//             }
//         }

//         const restar = ()=> {
//             if(count > 0){

//                 setCount( count - 1)
//             }
//         }

//         const comprar = ()=>{
//             onAdd(count)
//         }
//   return (
//     <>
//     {
//         stock > 0 
//         ?<div>
//         <button className='btn btn-danger' onClick={restar}>-</button>
//         <span className='btn'>{count}</span>
//         <button className='btn btn-success'onClick={sumar}>+</button>
      
//          <button className='btn btn-primary' onClick={()=>onAdd(count)} disabled={stock === 0 || count === 0}>Comprar</button>

//     </div>
//     : <p>Lo sentimos, por el momento no hay unidades disponibles 😭</p>
//     }
//     </>
//   )
// }

// export default ItemCount


import {useState} from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)
    
    const sumar = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    const restar = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }

    return (
        <>
            {
                stock > 0 
                    ? <div className="d-flex flex-column gap-3 align-items-start">
                        <div className="d-flex align-items-center gap-3">
                            <button 
                                className='btn btn-outline-secondary' 
                                onClick={restar}
                                disabled={count <= 1}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '2px solid #6c757d'
                                }}
                            >
                                −
                            </button>
                            <span 
                                style={{
                                    minWidth: '50px',
                                    textAlign: 'center',
                                    fontSize: '1.3rem',
                                    fontWeight: '600',
                                    padding: '8px 16px',
                                    backgroundColor: '#f8f9fa',
                                    borderRadius: '8px',
                                    border: '1px solid #dee2e6'
                                }}
                            >
                                {count}
                            </span>
                            <button 
                                className='btn btn-outline-success'
                                onClick={sumar}
                                disabled={count >= stock}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '2px solid #28a745'
                                }}
                            >
                                +
                            </button>
                        </div>
                        <button 
                            className='btn btn-primary' 
                            onClick={()=>onAdd(count)} 
                            disabled={stock === 0 || count === 0}
                            style={{
                                padding: '10px 30px',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                borderRadius: '8px',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Agregar al Carrito
                        </button>
                    </div>
                    : <p className="text-danger">Lo sentimos, por el momento no hay unidades disponibles 😭</p>
            }
        </>
    )
}

export default ItemCount