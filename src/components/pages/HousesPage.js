import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails,{Field} from '../itemDetails';
import ErrorMessege from '../errorMessege';
import gotService from '../services/gotServices';
import RowBlock from '../rowBlock';


export default class HousesPage extends Component{
    gotService = new gotService();
    state = {
        selectedHous: {},
        error: false
    };

    onItemSelected = (id) => {

        this.setState({
            selectedHous: id,
            error: false
        })
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


        const itemList = (
            <ItemList onItemSelected={this.onItemSelected}
                      getData={this.gotService.getAllHouses}
                      renderItem={(item) => `${item.name} `}
            />
        );

        const housDetals= (
            <ItemDetails id={this.state.selectedHous}
                         getData={this.gotService.getHouse}
                         >
                <Field field='name' label='Name'/>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='overlord' label='Overlord'/>
                <Field field='ancestralWeapons' label='AncestralWeapons'/>
            </ItemDetails>

    );
        return(

            <RowBlock left={itemList} right={housDetals}/>
        )
    }
}