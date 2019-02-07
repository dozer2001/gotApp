import React from 'react';
import {shallow} from 'enzyme';
import header from './header';


describe('Testing <header/>', () => {
    it('header have rendered correctly', () => {
        const header = shallow(<header/>);
        expect(header).toMatchSnapshot();

    })
});