import React, { useState } from "react";
import facebookRound from '../../assets/facebookRound.svg';
import instagramRound from '../../assets/InstagramRound.svg';
import twitterRound from '../../assets/TwitterRound.svg';
import youtubeRound from '../../assets/YoutubeRound.svg';
import './socialNetworks.css'

export const SocialNetworks: React.FC = ()=>{
    const [selectItem, setSelectItem] = useState<string>('');

    const handleClick = (id: string) => ()=>{
        setSelectItem(id);
    }

    return(
        <div className="social-networks">
            <div className={`social-networks-round ${selectItem === '1' ? 'social-networks-round-active' : ''}`}>
                <img  
                src={facebookRound} 
                alt="icono de facebook" 
                onClick={handleClick('1')}/>
            </div>
            <div className={`social-networks-round ${selectItem === '2' ? 'social-networks-round-active' : ''}`}  >
                <img
                src={instagramRound} 
                alt="icono de instagram" 
                onClick={handleClick('2')}/>
            </div>
            <div className={`social-networks-round ${selectItem === '3' ? 'social-networks-round-active' : ''}`}>
                <img
                src={twitterRound} 
                alt="icono de twitter" 
                onClick={handleClick('3')}/>
            </div>
            <div className={`social-networks-round ${selectItem === '4' ? 'social-networks-round-active' : ''}`}>
                <img
                src={youtubeRound} 
                alt="icnoo de youtube" 
                onClick={handleClick('4')}/>
            </div>
            
        </div>
    )
}