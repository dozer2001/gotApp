import React, {Component} from 'react';
import styled from 'styled-components';
import img from './img/StartPage.jpg'

const BlickDiv = styled.div`
margin:0 auto`;
const DivImg = styled.div`
 
    margin-bottom: 50px;
    margin-left: auto;   `

const Title = styled.h1`
color: white`;
export default class BooksItem extends Component {

    render() {

        return (
            <>
            <BlickDiv>
                <Title>Здесь вы можете познакомиться с вселенной Игры Престолов </Title>
            </BlickDiv>
            <DivImg>

                <img alt="no img" src={img}></img>
            </DivImg>
            </>
        )

    }
}