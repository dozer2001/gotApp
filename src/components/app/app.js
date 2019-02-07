import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../pages/characterPage';
import BooksPage from '../pages/BooksPage';
import HousesPage from '../pages/HousesPage';
import BooksItem from '../pages/BooksItem';
import StartPage from '../pages/StartPage';
import ErrorMessege from '../errorMessege';
import gotService from '../services/gotServices';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import img from "./got.jpeg";
import styled from 'styled-components';


const AppBack = styled.div`
background-image: url(${img})
    overflow-x: hidden;
    background: url('img/got.jpeg') center center no-repeat;
    background-size: cover;
    font-size: 16px;
    height: 100%;	

`;

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            dis: true,
            error: false
        };
        this.CharDissepia = this.CharDissepia.bind(this)
    }

    gotService = new gotService();

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    CharDissepia() {
        this.setState(() => {
            return {
                dis: !this.state.dis
            }
        })

    }

    render() {
        const dissepia = this.state.dis ? <RandomChar/> : null;
        if (this.state.error) {
            return <ErrorMessege/>
        }
        return (
            <Router>
                <AppBack>
                    <Container>
                        <Header/>
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {dissepia}
                                <button onClick={this.CharDissepia}>Klick me</button>
                            </Col>
                        </Row>
                        <Route path='/' exact component={StartPage}/>
                        <Route path='/characters' component={CharacterPage}/>
                        <Route path='/houses' component={HousesPage}/>
                        <Route path='/books'  exact component={BooksPage}/>
                        <Route path='/books/:id' render={
                            ({match}) => {
                                const {id} = match.params;
                                return <BooksItem bookId = {id}/>}
                        }
                        />
                    </Container>
                </AppBack>
            </Router>
        )
    }
};
