import React, {Component} from 'react';
import ItemDetails,{Field} from '../itemDetails/index';
import gotService from '../services/gotServices';

export default class BooksItem extends Component{
    gotService = new gotService();



    render(){

        return(
            <ItemDetails id = {this.props.bookId}
                         getData={this.gotService.getBook}>
                <Field field='name' label='Name'/>
                <Field field='numberOfPages' label='NumberOfPages'/>
                <Field field='publiser' label='Publiser'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )

    }
}