import React from 'react'
import './AuthRegistration.css'

export const AuthRegistration: React.FC = ()=>{
    return(
        <div className='panel-auth-registration'>
            <h3 className='panel-auth-registration-title'>Registrate</h3>
            <div className='panel-auth-registration-line-container'>
                <div className='panel-auth-registration-line'></div>
                <p className='panel-auth-registration-line-text'>o registrate con tu email</p>
                <div className='panel-auth-registration-line'></div>
            </div>
            <form className='panel-auth-registration-form'>
                <label className='panel-auth-registration-form-label' htmlFor="name">Nombre/s</label>
                <span className='panel-auth-registration-form-span'>*</span>
                <input className='panel-auth-registration-form-input' type="text" name='name'/>
                <label className='panel-auth-registration-form-label' htmlFor='email'>Email</label>
                <span className='panel-auth-registration-form-span'>*</span>
                <input  className='panel-auth-registration-form-input'type="email" name='email'/>
                <label className='panel-auth-registration-form-label' htmlFor="address">Direccion</label>
                <span className='panel-auth-registration-form-span'>*</span>
                <input className='panel-auth-registration-form-input' type="text" name='address'/>
                <input className='panel-auth-registration-form-input' type="file" name='image'/>
                <label className='panel-auth-registration-form-label' htmlFor="password">Contrasena</label>
                <span className='panel-auth-registration-form-span'>*</span>
                <input type="text" />
            </form>
        </div>
    )
}