import React,{Component} from 'react';
import Auth from './Auth';

import color from '../../color';
import StyleAuth from '../../css/maincomponent/StyleAuths.scss'

class MainComponent extends Component{
    render(){
        return(

        <div className="mainHeadContainer">

            <div className="header">
               <div className="deliveryContainer">
                    <button className="deliveryButton">
                        <b>우리지역 야간배송 조회 ></b>
                     </button>
                </div>
            
                <div className="authHeader">
                    <Auth name ="회원가입" iSignIn={true}/>
                    <Auth name ="로그인"/> 
                    <Auth name ="상품등록"/>  
                </div>
            </div>

            <div className="mainLogoContainer">
                <img src = {require('../../asset/mainlogo2.jpg')}
                alt="../../asset/MainLogo.png" height="100" width="100"/>
            </div>
            
        </div>
            
        )

    }

}

export default MainComponent;