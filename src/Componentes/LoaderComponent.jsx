import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoaderComponent = ({text}) => {
  return (
     <div style={{
       width:'100%', 
       height:'85vh', 
       display:'flex', 
       justifyContent:'center', 
       alignItems:'center', 
       flexDirection:'column'
     }}>
            <Spinner 
              animation="border" 
              variant='primary'
              style={{
                width: '1.5rem',
                height: '1.5rem',
                borderWidth: '2px'
              }}
            />
            <p className='mt-3' style={{fontSize: '0.95rem', color: '#6c757d'}}>{text}</p>
        </div>
  )
}

export default LoaderComponent