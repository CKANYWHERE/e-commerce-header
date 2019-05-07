import React,{Component} from 'react';
import color from '../../color';
import StyleAuth from '../../css/maincomponent/StyleAuths.scss'
class AuthTxt extends Component {
   

    render() {
      
        return (
            
            <div style={{margin:8}}>
                <button className="authButton">  
                    {this.props.name}
                </button>
                <hr align="left"/>
            </div>
        );
    }

};

export default AuthTxt;