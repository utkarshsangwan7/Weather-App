import React from 'react';
import './Header.css';
import Search from './search.svg';
import Icon from './weather.png';

class Header extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div className='header'>
                <nav className='Navigation'>
                    <div className='gradient'></div>
                    <ul className='list' height='auto'>
                        <li><img className='item' alt='' src={Icon} width='300px' height='auto'/></li>
                        <li><p className='item'>Weather App</p></li>
                        <li><p className='item'>Home</p></li>
                        <li><p className='item'>About</p></li>
                    </ul>
                </nav>
                <div className='input-bar'>
                    <div className='inner-input-bar-wrapper'>
                        <div className='inner-input-bar'>
                            <img src={Search} alt='' className='search' onClick={this.props.onClickSearch}></img>
                            <input type='text' name = 'location' placeholder='Search Location' onChange={this.props.onInputValueChange}></input>
                        </div>
                    </div>
                </div>
            </div>    
        );
    }
}

export default Header;
