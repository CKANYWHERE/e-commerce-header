import React,{Component} from 'react';
import Modal from './Modal';

class MainCategoryName extends Component {
  constructor () {
    super();

    this.state = {
        visible: false
    }

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  showModal () {
      this.setState({visible: true});
  }
  hideModal () {
      this.setState({visible: false});
  }
    render() {
        return (
          <div className="categoryMainName">
            <button className="categoryMainButton" onClick={this.showModal} >
              {this.props.name}
            </button>
            
            <Modal visible={this.state.visible} selectStyle={"categoryDialog"}>
            <h1 className="categoryDialogTitle">
               카테고리
            </h1>
            <p className="dialog__txt">
              <a href="#"> #채소,과일</a>
            </p>
            <p className="dialog__txt">
              <a href="#"> #육류</a>
            </p>
            <p className="dialog__txt">
              <a href="#">#유제품</a>
            </p>
            <p className="dialog__txt">
              <a href="#">  #면,양념,오일</a>
            </p>
            <p className="dialog__txt">
              <a href="#"> #베이비,키즈</a>
            </p>
            <p className="dialog__txt">
              <a href="#">#수산,해산,건어물</a>
            </p>
            <p className="dialog__txt">
              <a href="#"> #음료,떡,간식</a>
            </p>
            <button onClick={this.hideModal} type="button" className="categoryDialogbtn">
                Close
            </button>
            </Modal>
          </div>
        );
    }
}

export default MainCategoryName;