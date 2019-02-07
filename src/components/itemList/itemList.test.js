import React from 'react';
import {mount} from 'enzyme';
import ItemList from './itemList';
import gotService from '../services/gotServices'

describe('Testing <ItemList/>', () => {
    const service = new gotService();
    const list = mount(<ItemList
        getData={service.getAllHouses}
        renderItem={({name}) => name}/>);
    it('Click in itemList must rerender all list in 1 instance', () => {
        list.setState({itemList: [{name: 'efwe', id: 1}, {name: 'efwe', id: 2}]});
        expect(list.find('ul')).toHaveLength(0)
    })
});