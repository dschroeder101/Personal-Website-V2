import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="content-area">
                <h2>Hey there!</h2>
                <br />
                <p>I am a Software Engineer living in Vancouver, British Columbia, Canada.</p>
                <p>You can check out a portfolio of my GitHub repositories under the 'Projects' tab.</p>
                <p>In my spare time, I love to fly (and crash) RC aircraft and build <a href="http://kriegerfaust.imgur.com/">scale models</a>.</p>
            </div>
        );
    }
}

export default About;
