import React from 'react';
import {shallow} from 'enzyme';
import BooksPage from './BooksPage';


describe('Testing <BooksPage/>', () => {
        const books = shallow(<BooksPage/>);
        it('houses have rendered correctly', () => {
            expect(books).toMatchSnapshot();
        });



});