import React,{Component} from 'react';
import StyleCategory from '../../css/navigatecomponent/StyleCategory.scss';
import MainCategoryName from './MainCategoryName';
class CategoryName extends Component {
    state = { isMain:false }
    render() {
        return (
            <div className="categoryName"> 
              
                {this.props.isMain === true ?  
                    <MainCategoryName className="categoryButton" isMain={true} name={this.props.name}/>
                 : <button className="categoryButton">{this.props.name}</button>}
                        
           </div>   
                
        );
    }
}
export default CategoryName;