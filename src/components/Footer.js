import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                <ul className="socialMediaList">
                    <li>
                        <a className="btn btn-block btn-lg btn-social btn-facebook" href="https://www.facebook.com/daniel.schroeder.9041">
                            <i className="fa fa-facebook fa-3x"></i>
                        </a>
                    </li>
                    <li>
                        <a className="btn btn-block btn-lg btn-social btn-github" href="https://github.com/Kriegerfaust88">
                            <i className="fa fa-github fa-3x"></i>
                        </a>
                    </li>
                    <li>
                        <a className="btn btn-block btn-lg btn-social btn-instagram" href="https://www.instagram.com/dschroeder_44/">
                            <i className="fa fa-instagram fa-3x"></i>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Footer;