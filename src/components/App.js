import React, {Component} from 'react';
import '../css/App.css'
import {Container, Row, Col, Jumbotron} from 'react-bootstrap';
import Content from './content/Content';
import Title from './Title';
import Header from './Header.js';
import Footer from './Footer.js';
import MessageSent from './MessageSent.js';
import axios from 'axios';


import {
    filterRepos
}
from '../helpers';

class App extends Component {

    constructor() {
        super();
        this.changeIndex = this.changeIndex.bind(this);
        this.loadProjects = this.loadProjects.bind(this);
        this.toggleMessageNotification = this.toggleMessageNotification.bind(this);
    }

    state = {
        selectedNavIndex: 0,
        repoList: {},
        messageSent: false
    }
    
    componentDidMount() {
        this.loadProjects();
    }

    loadProjects = () => {
        axios.get('https://api.github.com/users/Kriegerfaust88/repos?type=owner')
            .then(res => {
                var repoList = filterRepos(res.data);
                this.setState({
                    repoList
                });
            });
    }

    changeIndex(newIndex) {
        const selectedNavIndex = newIndex;
        this.setState({selectedNavIndex});
    }

    toggleMessageNotification(newVal) {
        const messageStatus = newVal;
        this.setState({messageSent: messageStatus});
    }

    render() {

        let messageSent;

        if (this.state.messageSent) {
            messageSent = <div className="messageSent"><MessageSent /></div>;
        } else {
            messageSent = <div className="noMessage"><MessageSent /></div>;
        }

        return (
            <div className="App">
                <Jumbotron>
                    <Header selectedNavIndex={this.state.selectedNavIndex} changeIndex={this.changeIndex}/>
                    <div>{messageSent}</div>
                    <Container className="contentGrid">
                        <Row>
                            <Col className="title-column" xs={12} sm={4} md={4} lg={4}>
                                <Title/>
                            </Col>
                            <Col className="content-column" xs={12} sm={8} md={8} lg={8}>
                                <Row>
                                    <Content selectedNavIndex={this.state.selectedNavIndex} repoList={this.state.repoList} toggleMessageNotification={this.toggleMessageNotification}/>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Footer/>
            </div>
        );
    }
}

export default App;
