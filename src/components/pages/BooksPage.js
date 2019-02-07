import React, {Component} from 'react';
import ItemList from '../itemList';
import ErrorMessege from '../errorMessege';
import gotService from '../services/gotServices';
import {withRouter} from 'react-router-dom'


 class BooksPage extends Component{
    gotService = new gotService();
    state = {
        error: false
    };


    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render(){
        if(this.state.error){
            return <ErrorMessege/>
        }
        return(
            <ItemList onItemSelected={(id)=>{
                this.props.history.push(id)
            }}
                      getData={this.gotService.getAllBooks}
                      renderItem={(item) => `${item.name} `}
            />
        )
    }
}

export default withRouter(BooksPage)