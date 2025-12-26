import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'

const Checkout = () => {
   
    const [buyer, setBuyer] = useState({
        name: '',
        lastname: '',
        email: '',
        emailConfirm: ''
    })
    
    const [orderId, setOrderId] = useState(null)
    const [error, setError] = useState(null)
    const [process, setProcess] = useState(false)
    const { cart, clear, total } = useContext(CartContext)

    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        
        const cleanValue = (name === 'name' || name === 'lastname') 
            ? value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]/g, '') 
            : value;

        setBuyer({
            ...buyer,
            [name]: cleanValue
        })
    }

    const finalizarCompra = async (e) => {
        e.preventDefault();
        
       
        if (buyer.email !== buyer.emailConfirm) {
            setError('Los correos electrónicos no coinciden');
            return;
        }

        try {
            setError(null);
            setProcess(true);

            
            const orden = {
                comprador: {
                    nombre: buyer.name,
                    apellido: buyer.lastname,
                    email: buyer.email
                },
                items: cart,
                total: total(),
                fecha: serverTimestamp()
            };

            const ventas = collection(db, "orders");
            const res = await addDoc(ventas, orden);
            
            setOrderId(res.id);
            clear(); 
        } catch (err) {
            console.error(err);
            setError('Hubo un error al procesar su pedido. Intente nuevamente.');
        } finally {
            setProcess(false);
        }
    }

   
    if (!cart.length && !orderId) {
        return <EmptyCart />
    }

    return (
        <div className="container my-5">
            {orderId ? (
                <div className="text-center p-5">
                    <div className="mb-4">
                        <div style={{ fontSize: '4rem', color: '#28a745' }}>✓</div>
                    </div>
                    <h2 className="text-success mb-3">¡Muchas gracias por su compra!</h2>
                    <div className="card mx-auto shadow-sm" style={{ maxWidth: '500px' }}>
                        <div className="card-body">
                            <h5 className="card-title">Número de Orden</h5>
                            <p className="card-text font-monospace" style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#007bff' }}>
                                {orderId}
                            </p>
                        </div>
                    </div>
                    <Link className='btn btn-primary btn-lg mt-4' to='/'>Volver a la tienda</Link>
                </div>
            ) : (
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow-lg">
                            <div className="card-header bg-primary text-white text-center py-3">
                                <h2 className="mb-0">Finalizar Compra</h2>
                                <small className="opacity-75">Por favor, complete sus datos</small>
                            </div>
                            <div className="card-body p-4">
                                {error && (
                                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                        {error}
                                        <button type="button" className="btn-close" onClick={() => setError(null)}></button>
                                    </div>
                                )}
                                
                                <form onSubmit={finalizarCompra}>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Nombre</label>
                                        <input 
                                            className='form-control' 
                                            name='name' 
                                            type='text' 
                                            value={buyer.name}
                                            onChange={handleInputChange}
                                            required 
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Apellido</label>
                                        <input 
                                            className='form-control' 
                                            name='lastname' 
                                            type='text' 
                                            value={buyer.lastname}
                                            onChange={handleInputChange}
                                            required 
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Email</label>
                                        <input 
                                            className='form-control' 
                                            name='email' 
                                            type='email' 
                                            value={buyer.email}
                                            onChange={handleInputChange}
                                            required 
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label fw-bold">Confirmar Email</label>
                                        <input 
                                            className='form-control' 
                                            name='emailConfirm' 
                                            type='email' 
                                            value={buyer.emailConfirm}
                                            onChange={handleInputChange}
                                            required 
                                        />
                                    </div>

                                    <div className="d-grid">
                                        <button 
                                            type='submit' 
                                            className='btn btn-success btn-lg' 
                                            disabled={process}
                                        >
                                            {process ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2"></span>
                                                    Procesando...
                                                </>
                                            ) : 'Generar Orden'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Checkout