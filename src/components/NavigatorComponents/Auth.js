import React,{Component} from 'react';
import color from '../../color';
import Modal from './Modal';
import StyleAuth from '../../css/navigatecomponent/StyleAuths.scss'
import { throwStatement } from '@babel/types';
class AuthTxt extends Component {
   
    constructor () {
        super();
    
        this.state = {
            signInVisible: false,
            logInVisible: false
        }
    
        this.signInShowModal = this.signInShowModal.bind(this);
        this.signInHideModal = this.signInHideModal.bind(this);
        this.logInShowModal = this.logInShowModal.bind(this);
        this.logInHideModal = this.logInHideModal.bind(this);
      }
    signInShowModal () {
        this.setState({signInVisible: true});
    }
    signInHideModal () {
        this.setState({signInVisible: false});
    }
    logInShowModal () {
        this.setState({logInVisible: true});
    }
    logInHideModal () {
        this.setState({logInVisible: false});
    }

    render() { 
        return (        
            <div style={{margin:8}}>
            {this.props.iSignIn === true? 
            <div>
                <button onClick={this.signInShowModal} className="authButton">  
                    {this.props.name}
                </button>
            <Modal visible={this.state.signInVisible} selectStyle={"siginInDialog"}>
            <h1 className="categoryDialogTitle">
                회원가입
            </h1>
        <form>
        <p className="dialog__txt">
            <input type="text" placeholder="이름" className="modalTextBox"/>
        </p>
        <p className="dialog__txt">
            <input type="email" placeholder="ID" className="modalTextBox"/>
        </p>
        <p className="dialog__txt">
            <input type="password" placeholder="PW" className="modalTextBox"/>
        </p>
        <p className="dialog__txt">
            <input type="text" placeholder="휴대폰 번호" className="modalTextBox"/>
        </p>
        <p className="dialog__txt">
            <input type="text" placeholder="집주소" className="modalTextBox"/>
        </p>
            <button type="button" className="signInDialogSubmitBtn"> 회원가입</button>
        </form>
        <button onClick={this.signInHideModal} type="button" className="signInDialogCloseBtn">
            Close
        </button>
        </Modal>
        </div>
        :
        <div>
        <button onClick={this.logInShowModal} className="authButton">  
                    {this.props.name}
        </button>
     
          <Modal visible={this.state.logInVisible} selectStyle={"logInDialog"}>
            <h1 className="categoryDialogTitle">
                로그인
            </h1>
        <form>
            <p className="dialog__txt">
                <input type="email" placeholder="ID" className="modalTextBox"/>
            </p>
            <p className="dialog__txt">
                <input type="password" placeholder="PW" className="modalTextBox"/>
            </p>
      
            <button type="button" className="signInDialogSubmitBtn"> 로그인</button>
            </form>
                <button onClick={this.logInHideModal} type="button" className="signInDialogCloseBtn">
                    Close
                </button>
        </Modal>
        </div>
    }
               
              
                <hr align="left"/>
            </div>
        );
    }

};

export default AuthTxt;