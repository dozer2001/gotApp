import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spiner';
import ErrorMessege from '../errorMessege';
import {ListGroup, ListGroupItem} from 'reactstrap';

const ItemListUl = styled(ListGroup)`

li{cursor: pointer;}`;


export default class ItemList extends Component {

    state = {
        itemList: {},
        error: false,
        loading: true
    };

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    componentDidMount() {
        const {getData} = this.props;


        getData()
            .then((itemList) => {
                this.setState({
                    itemList,
                    loading: false
                })
            })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            const {id} = item;
            const label = this.props.renderItem(item);
            return (
                <ListGroupItem
                    className
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}
                >
                    {label}
                </ListGroupItem>
            )
        })
    }

    render() {
        const {itemList} = this.state;

        if (this.state.loading) {
            return <Spinner/>
        }
        if (this.state.error) {
            return <ErrorMessege/>
        }
        if (!itemList) {
            return <Spinner/>
        }
        const items = this.renderItems(itemList);
        return (
            <ItemListUl>
                {items}
            </ItemListUl>
        );
    }
}