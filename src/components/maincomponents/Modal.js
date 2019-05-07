import React,{Component} from 'react';
import StyleCategory from '../../css/maincomponent/StyleCategory.scss';

class Modal extends React.Component {
  constructor () {
      super();

      this.state = {
          isVisible: false
      };
  }
  componentDidMount () {
      if (this.state.isVisible) {
          this.show();
      }
  }
  show () {
      this.state.isVisible = true;
      this.dialog.showModal();
  }
  hide () {
      this.state.isVisible = false;
      this.dialog.close();
  }
  componentWillReceiveProps (props) {
      if (props.visible !== this.state.isVisible) {
          this.state.isVisible = props.visible;

          if (this.state.isVisible) {
              this.show();
          } else {
              this.hide();
          }
      }
  }
  render () {
      this.state.isVisible = this.props.visible;

      return (
          <dialog className="categoryDialog" ref={(ref) => this.dialog = ref}>
              {this.props.children}
          </dialog>
      );
  }
};


export default Modal;