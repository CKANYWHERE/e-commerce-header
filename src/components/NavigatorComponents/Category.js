import React,{Component} from 'react';
import StyleCategory from '../../css/navigatecomponent/StyleCategory.scss'
import CategoryName from './CategoryName';
import Search from './Search'
class Category extends Component {
    state = {  }
    render() {
        return (
            <nav className="navContainer">
                <h1 className = "Header">
                    GoodFood
                </h1>                 
                <div className="categoryNameContainer">
                    <CategoryName name="☰카테고리" isMain={true}/>
                    <CategoryName name="신상품"/>
                    <CategoryName name="베스트"/>
                    <CategoryName name="오늘의 농작물"/>  
                    <Search/>
                   
                </div>
              </nav>
        );
    }
}
export default Category;