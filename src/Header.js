import React, {Component} from 'react';

class Header extends Component{
    render() {
        return (
            <div className="Header">
            <img src={require('./pic/logo2.png')} alt="" height="32px"/>             
            </div>
        );
    }

}

export default Header;
