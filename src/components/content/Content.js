import React from 'react';

import About from './About';
import Projects from './Projects';
import Contact from './Contact';

class Content extends React.Component {
    render() {
        switch (this.props.selectedNavIndex) {
            default: return (<About/>);
            case 0:
                    return (<About/>);
            case 1:
                    return (<Projects repoList={this.props.repoList}/>);
            case 2:
                    return (<Contact toggleMessageNotification={this.props.toggleMessageNotification}/>);
        }
    }
}

export default Content;
