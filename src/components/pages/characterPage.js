import React, {Component} from 'react';
import ItemList from '../itemList/index';
import ItemDetails,{Field} from '../itemDetails/index';
import ErrorMessege from '../errorMessege/index';
import gotService from '../services/gotServices';
import RowBlock from '../rowBlock/index';


export default class CharacterPage extends  Component{
    gotService = new gotService();
    state = {
        selectedChar: null,
        error: false
    };

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id,
            error: false
        })
    };

    proverkaPusha(){
        console.log(this.state);
    }
    componentDidCatch() {

        this.setState({
            error: true
        })
    }

        render(){
            if(this.state.error){
                return <ErrorMessege/>
            }
           if(this.selectedChar === null){
               console.log(1);
           }

            const itemList = (
            <ItemList onItemSelected={this.onItemSelected}
                      getData={this.gotService.getAllCharacters}
                      renderItem={({name,gender}) => `${name} (${gender})`}
            />
            );

            const itemDetals= (
                <ItemDetails id={this.state.selectedChar}
                             getData={this.gotService.getCharacter}>
                    <Field field='gender' label='Gender'/>
                    <Field field='born' label='Born'/>
                    <Field field='died' label='Died'/>
                    <Field field='culture' label='Culture'/>
                </ItemDetails>
            );
            return(
                <RowBlock left={itemList} right={itemDetals}/>
            )
        }
}