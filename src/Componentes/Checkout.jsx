import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'

const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [validMail, setValidMail] = useState('')
    const [orderId, setOrderId] = useState(null)
    const [error, setError] = useState(null)
    const [process, setProcess] = useState(false)
    const {cart, clear, total} = useContext(CartContext)

    const buyerData = (e) => {
        const fieldName = e.target.name;
        let value = e.target.value;
        
        if (fieldName === 'name' || fieldName === 'lastname') {
            value = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]/g, '');
        }
        
        setBuyer({
            ...buyer,
            [fieldName]: value
        })
    }

    const finalizarCompra = async (e) => {
        e.preventDefault();
        
        if(!buyer.name || !buyer.lastname || !buyer.email || !validMail){
            setError('Por favor complete todos los campos');
            return;
        }
        
        const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
        
        if (!soloLetras.test(buyer.name.trim())) {
            setError('El nombre solo puede contener letras');
            return;
        }
        
        if (!soloLetras.test(buyer.lastname.trim())) {
            setError('El apellido solo puede contener letras');
            return;
        }
        
        if (buyer.email !== validMail){
            setError('Los correos no coinciden');
            return;
        }
        
        try {
            setError(null);
            setProcess(true);
            
            const orden = {
                comprador: buyer,
                compras: cart,
                total: total(),
                fecha: serverTimestamp()
            };
            
            const ventas = collection(db, "orders");
            const res = await addDoc(ventas, orden);
            setOrderId(res.id);
            clear();
        } catch (error) {
            console.error('Error al finalizar compra:', error);
            setError('Error al procesar la orden. Por favor intente nuevamente.');
        } finally {
            setProcess(false);
        }
    }

    if(!cart.length && !orderId){
        return <EmptyCart/>
    }
    
    return (
        <div className="container my-5">
            {
                orderId 
                    ? <div className="text-center p-5">
                        <div className="mb-4">
                            <div style={{fontSize: '4rem', color: '#28a745'}}>✓</div>
                        </div>
                        <h2 className="text-success mb-3">¡Muchas gracias por su compra!</h2>
                        <div className="card mx-auto" style={{maxWidth: '500px'}}>
                            <div className="card-body">
                                <h5 className="card-title">Número de Orden</h5>
                                <p className="card-text" style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#007bff'}}>{orderId}</p>
                            </div>
                        </div>
                        <Link className='btn btn-primary btn-lg mt-4' to='/'>Volver a Home</Link>
                    </div>
                    : <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <div className="card shadow-lg">
                                <div className="card-header bg-primary text-white text-center">
                                    <h2 className="mb-0">Finalizar Compra</h2>
                                    <p className="mb-0" style={{fontSize: '0.9rem', opacity: 0.9}}>Complete sus datos para continuar</p>
                                </div>
                                <div className="card-body p-4">
                                    {error && (
                                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                            <strong>Error:</strong> {error}
                                            <button type="button" className="btn-close" onClick={() => setError(null)} aria-label="Close"></button>
                                        </div>
                                    )}
                                    <form onSubmit={finalizarCompra}>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label fw-bold">Nombre</label>
                                            <input 
                                                className='form-control form-control-lg' 
                                                id="name"
                                                name='name' 
                                                type='text' 
                                                placeholder='Ingrese su nombre (solo letras)' 
                                                onChange={buyerData}
                                                pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+"
                                                title="Solo se permiten letras"
                                                required
                                            />
                                            <small className="form-text text-muted">Solo se permiten letras y espacios</small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="lastname" className="form-label fw-bold">Apellido</label>
                                            <input 
                                                className='form-control form-control-lg' 
                                                id="lastname"
                                                name='lastname' 
                                                type='text' 
                                                placeholder='Ingrese su apellido (solo letras)' 
                                                onChange={buyerData}
                                                pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+"
                                                title="Solo se permiten letras"
                                                required
                                            />
                                            <small className="form-text text-muted">Solo se permiten letras y espacios</small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label fw-bold">Correo Electrónico</label>
                                            <input 
                                                className='form-control form-control-lg' 
                                                id="email"
                                                name='email' 
                                                type='email' 
                                                placeholder='Ingrese su correo' 
                                                onChange={buyerData}
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="email2" className="form-label fw-bold">Confirmar Correo</label>
                                            <input 
                                                className='form-control form-control-lg' 
                                                id="email2"
                                                name='email2' 
                                                type='email' 
                                                placeholder='Repita su correo' 
                                                onChange={(e)=> setValidMail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="d-grid">
                                            <button 
                                                type='submit' 
                                                className='btn btn-success btn-lg' 
                                                disabled={process}
                                                style={{
                                                    padding: '12px',
                                                    fontSize: '1.1rem',
                                                    fontWeight: '600'
                                                }}
                                            >
                                                {process ? (
                                                    <>
                                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                        Procesando Orden...
                                                    </>
                                                ) : (
                                                    'Generar Orden'
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Checkout
