import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import styled from 'styled-components';

const Term = styled.span`
font-weight: bold;`;
const TopRandomBlock = ({item}) => {
    const {name, gender, born, died, culture} = item;
    return (
        <>
        <h4>Random Character: {name}</h4>
        <ListGroup className=" list-group-flush">
            <ListGroupItem className="d-flex justify-content-between">
                <Term>Gender </Term>
                <span>{gender}</span>
            </ListGroupItem>
            <ListGroupItem className="d-flex justify-content-between">
                <Term>Born </Term>
                <span>{born}</span>
            </ListGroupItem>
            <ListGroupItem className="d-flex justify-content-between">
                <Term>Died </Term>
                <span>{died}</span>
            </ListGroupItem>
            <ListGroupItem className="d-flex justify-content-between">
                <Term>Culture </Term>
                <span>{culture}</span>
            </ListGroupItem>
        </ListGroup>
        </>
    )
};
export default TopRandomBlock;