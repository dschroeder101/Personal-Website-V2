import React from 'react';
import { Image } from 'react-bootstrap';
import profilePic from './../profilePic.jpg';

class Title extends React.Component {
    render() {
        return (
            <div className="title-area">
                <h1>
                    Daniel Schroeder
                </h1>
                <Image className="title-image" src={profilePic} circle responsive/>
            </div>
            );
    }
}

export default Title;
