import React from 'react';
import {shallow} from 'enzyme';
import BooksItem from './BooksItem';


describe('Testing <HousesPage/>', () => {
    const item = shallow(<BooksItem/>);
    it('houses have rendered correctly', () => {
        expect(item).toMatchSnapshot();
    });
});