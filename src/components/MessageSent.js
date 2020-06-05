import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class MessageSent extends React.Component {
    render() {
        return (
            <CSSTransitionGroup
                component="div"
                className="messageSent"
                transitionName="messageSent"
                transitionEnterTimeout={250}
                transitionLeaveTimeout={250}
            >
                <div>
                    <p>Your message has been sent! Thank you!</p>
                </div>
            </CSSTransitionGroup>
        );
    }
}

export default MessageSent;

