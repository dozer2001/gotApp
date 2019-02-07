import React from 'react';
import {shallow} from 'enzyme';
import HousesPage from './HousesPage';


describe('Testing <HousesPage/>', () => {
    const houses = shallow(<HousesPage/>);
    describe('Testing  state', () => {
        it('houses have rendered correctly', () => {
            expect(houses).toMatchSnapshot();
        });
        it('houses state "houses" is empty obj', () => {
            expect(houses.state().selectedHous).toBeObject();
        });

        it('houses state "error" is ', () => {
            expect(houses.state().error).toBeFalsy();
        });
    });
    describe('Habdlers test', () => {
        it('testing houses', () => {
            houses.instance().onItemSelected();
            expect(houses.state().error).toBeFalsy();
        });
        it('testing houses error', () => {
            houses.instance().componentDidCatch();
            expect(houses.state().error).toBeTruthy();
        });

    });
});