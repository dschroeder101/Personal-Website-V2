import React from 'react';
import Navigation from './Navigation';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Navigation selectedNavIndex={this.props.selectedNavIndex} changeIndex={this.props.changeIndex}/>
            </div>
        )
    }
}

export default Header;
