import React from 'react';
import {mount,} from 'enzyme';
import ItemDetails from './itemDetails';
import gotService from '../services/gotServices'


describe('Testing <ItemDetails/>', () => {
    const detalis = mount(<ItemDetails/>);
    const service = new gotService();
    const list = mount(<ItemDetails
        getData={service.getAllHouses}
        renderItem={({name}) => name}/>);

    describe('Testing  state', () => {
        it('itemDetalise have rendered correctly', () => {
            expect(detalis).toMatchSnapshot();
        });
         it('andomChar state "detalis" is empty obj', () => {
             expect(detalis.state().item).toBeObject();
         });
        it('RandomChar state "detalis" is true', () =>{
            expect(detalis.state().loading).toBeTruthy();
        });
        it('RandomChar state "error" is ', () =>{
            expect(detalis.state().error).toBeFalsy();
        });

    });
    describe('Habdlers test', () => {
        it('testing detalis', () => {
            detalis.instance().updateItem();
            expect(detalis.state().loading).toBeTruthy();
        });

    });

});
