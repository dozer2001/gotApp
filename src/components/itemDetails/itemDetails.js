import React, {Component} from 'react';
import styled from 'styled-components';
import {ListGroup, ListGroupItem} from 'reactstrap';
import Spinner from '../spiner';
import ErrorMessege from '../errorMessege';

const CharsDetails = styled.div `
  background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4{
     margin-bottom: 20px;
     text-align: center;}
    
`;
const SelectError = styled.div`
    color: #fff;
    text-align: center;
    font-size: 26px;`;

const Field = ({item, field, label}) => {
    return (
        <ListGroupItem className="d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </ListGroupItem>
    )
};
export {
    Field
}
export default class ItemDetails extends Component {
    state = {
        item: {},
        loading: true,
        error: false,

    };

    componentDidMount() {
        this.updateItem();


    }
    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) {
            this.updateItem();
        }

    }
    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    updateItem() {
        const {getData} = this.props;
        const {id} = this.props;

        if (!id) {
            return;
        }
        getData(id)

            .then((item) => {
                this.setState({
                    item,
                    loading: false,
                })
            })
    }


    render() {
        if (!this.state.item) {
            return <SelectError>Please celect a character</SelectError>
        }


        if (this.state.error) {
            return <ErrorMessege/>
        }
        if (this.state.loading) {
            return <Spinner/>
        }


        const {item} = this.state;
        const {name} = item;

        return (
            <CharsDetails>
                <h4>{name}</h4>
                <ListGroup className="list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) =>{
                            return React.cloneElement(child, {item})
                    })
                    }
                </ListGroup>
            </CharsDetails>
        );
    }
}