import React, {Component} from 'react';
import gotService from '../services/gotServices'
import styled from 'styled-components';
import Spinner from '../spiner';
import ErrorMessege from '../errorMessege';

import TopRandomBlock from '../TopRandomBlock'

const RandomBlock = styled.div`
    {background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;}
    h4{
    margin-bottom: 20px;
    text-align: center;}
    `;


export default class RandomChar extends Component {

    gotService = new gotService();

    state = {
        item: {},
        loading: true,
        error: false
    };

    componentDidMount(){
        this.updateChar();
        this.timerId =  setInterval(this.updateChar, 1500);
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    onCharLoaded = (item) => {
        this.setState({
            item,
            loading: false
        })

    };
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });

    };


    updateChar = () => {
        const id = Math.floor(Math.random() * 140 + 25);
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    };

    render() {
        const {item, loading, error} = this.state;
        const errorMessage = error ? <ErrorMessege/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <TopRandomBlock item={item}/> : null;
        return (
            <RandomBlock className="rounded">
                {errorMessage}
                {spinner}
                {content}
            </RandomBlock>
        );
    }
}


