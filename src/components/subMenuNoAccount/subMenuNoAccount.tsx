import './subMenuNoAccount.css'
import facebooIcon from '../../assets/facebooKIcon.png'
import googleIcon from '../../assets/googleIcon.png'
import { ButtonTransparent } from '../buttonTransparent/buttonTransparent'
import { ButtonRed } from '../buttonRed/buttonRed'
import { Link } from 'react-router'

export const SubMenuNoAccount = ()=>{
    
    const handlerClickFacebook = ()=>{
        console.log("Facebook");
    }
    const handlerClickGoogle = ()=>{
        console.log("google");
    }
    const handlerClickButton = ()=>{

    }
    
    return (
        <div className='sub-menu-no-account-container'>
            <div className='sub-menu-no-account-container-triangle'></div>
            <div className='sub-menu-no-account'>
                <ButtonTransparent handlerClick={handlerClickFacebook} textButton='Ingresar con facebook' image={facebooIcon}/>
                <ButtonTransparent handlerClick={handlerClickGoogle} textButton='Ingresar con google' image={googleIcon}/>
                <div className='sub-menu-no-account-info'>
                    <div className='sub-menu-no-account-line'></div>
                    <p className='sub-menu-no-account-info-title'>o ingresa con tu email</p>
                    <div className='sub-menu-no-account-line'></div>
                </div>
                <Link to='/auth'>
                    <ButtonRed textButton='Ingresar' handlerClick={handlerClickButton}/>
                </Link>
            </div>
        </div>
    )
}