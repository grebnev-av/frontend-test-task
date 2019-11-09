import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchActivityData, setGivenType } from '../actions/act';
import "bootswatch/paper/bootstrap.css";
import { Navbar,NavDropdown, MenuItem, Nav, Row, Col } from "react-bootstrap";
import '../styles/App.css';
import styled from 'styled-components';

const AppS = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #bbb;
    overflow: hidden;
`;

const AppContainer = styled.div`
    width: 400px;
    min-height: 500px;
    background-color: #fff;
    @media only screen and (max-width: 768px) {
        height: 100vh;
    }
`;

const AppContainerPadd = styled.div`
    padding: 10px 15px;
`;

const Activity = styled.div`
    border-radius: 4px;
    border: 1px solid #bbb;
    padding: 0 15px;
    font-size: 16px;
    margin: 10px 0;
`;

const ActivityH1 = styled.h1`
    font-size: 30px;
`;

const ActivityP = styled.p`
    font-size: 20px;
`;

class ActivityDisplay extends Component{

    collectActivityData(type){
        let URL = `http://www.boredapi.com/api/activity?type=${this.props.activities[type].value}`;
        this.props.fetchActivityData(URL);
    }


    componentWillReceiveProps(nextProps) {
        if(this.props.givenType !== nextProps.givenType){
            this.collectActivityData(nextProps.givenType);
        }
    }

    componentDidMount() {
        this.collectActivityData(this.props.givenType);
    }

    render() {
        let activityData = this.props.activityData;
            if(activityData.activity){
                return (
                    <Activity>
                        <ActivityH1>
                            { activityData.activity }
                        </ActivityH1>
                        <ActivityP>
                            Accessibility: <b>{ activityData.accessibility }</b>
                        </ActivityP>
                        <ActivityP>
                            Type: <b>{ activityData.type }</b>
                        </ActivityP>
                        <ActivityP>
                            Participants: <b>{ activityData.participants }</b>
                        </ActivityP>
                        <ActivityP>
                            Price: <b>{ activityData.price }</b>
                        </ActivityP>
                        <ActivityP>
                            Key: <b>{ activityData.key }</b>
                        </ActivityP>
                    </Activity>
                );
            }
        return (
            <div>
                Loading data for activity...
            </div>
            );

       }
}

class App extends Component {

    render() {
        return (
            <AppS>
                <AppContainer>
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                                I'm bored
                            </Navbar.Brand>
                        </Navbar.Header>
                    </Navbar>
                    <AppContainerPadd>
                        <Row>
                            <Col md={12} sm={12} lg={12} >
                                <Nav
                                    bsStyle="pills"
                                    activeKey={this.props.givenType}
                                    onSelect={(index) => {
                                        this.props.setGivenType(index);
                                    }}>
                                        <NavDropdown
                                            eventKey="4"
                                            title="Select type"
                                            id="nav-dropdown">
                                            {this.props.activities.map((typeActivity, index) => (
                                                <MenuItem key={index} eventKey={index}>{typeActivity.name}</MenuItem>
                                            ))}
                                        </NavDropdown>
                                </Nav>
                            </Col>
                            <Col
                                md={12}
                                sm={12}
                                lg={12}>
                                <ActivityDisplay
                                    key={0}
                                    activities={this.props.activities}
                                    activityData={this.props.activityData}
                                    givenType={this.props.givenType}
                                    fetchActivityData={this.props.fetchActivityData}
                                />
                            </Col>
                        </Row>
                    </AppContainerPadd>
                </AppContainer>
            </AppS>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        activityData: state.activityData,
        activities: state.activities,
        givenType: state.givenType
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchActivityData: (url) => dispatch(fetchActivityData(url)),
        setGivenType: (index) => dispatch(setGivenType(index)),
    };
};

export default connect(
mapStateToProps,
mapDispatchToProps)(App);

