import React from 'react';
import {shallow} from 'enzyme';
import CharacterPage from './characterPage';


describe('Testing <CharacterPage/>', () => {
    const character = shallow(<CharacterPage/>);
    describe('Testing  state', () => {
        it('houses have rendered correctly', () => {
            expect(character).toMatchSnapshot();
        });
        it('houses state "houses" is empty obj', () => {
            expect(character.state().selectedChar).toBeNull();
        });

        it('houses state "error" is ', () => {
            expect(character.state().error).toBeFalsy();
        });
    });
    describe('Habdlers test', () => {
        it('testing character', () => {
            character.instance().onItemSelected();
            expect(character.state().error).toBeFalsy();
        });

    });
});