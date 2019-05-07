import React,{Component} from 'react';

class Search extends Component {
    state = {  }
    render() {
        return (
            <form className="searchContainer">
                <input type="text" placeholder="검색" className="searchTxt"/>
                <button className="searchBtn"> 
                    <img src={require('../../asset/search.png')} height="30" width="30"
                    alt='dd'/> 
                </button>
            </form>
        );
    }
}

export default Search;