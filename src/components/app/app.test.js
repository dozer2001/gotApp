import React from 'react';
import {shallow} from 'enzyme';
import App from './app';


describe('Testing <App/>', () => {
    const app = shallow(<App/>);
    describe('Testing snap & state', () => {
        it('app have rendered correctly', () => {
            expect(app).toMatchSnapshot();
        });
        it('app state "app" is empty obj', () => {
            expect(app.state().dis).toBeTruthy();
        });
        it('app state "error" is ', () =>{
            expect(app.state().error).toBeFalsy();
        });

    });
});