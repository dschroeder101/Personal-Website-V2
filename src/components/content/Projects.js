import React from 'react';
import Project from './Project';

class Projects extends React.Component {

    render() {
        return (
            <div className="content-area">
                <div className="list-of-projects">
                    {Object.keys(this.props.repoList).map(key => <Project key={key} details={this.props.repoList[key]}/>)
}
                </div>
            </div>
        );
    }
}

export default Projects;
