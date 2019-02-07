import React from 'react';
import {shallow} from 'enzyme';
import RandomChar from './randomChar';


describe('Testing <RandomChar/>', () => {
    const char = shallow(<RandomChar/>);
   describe('Testing snap & state',() => {
       it('randomChar have rendered correctly', () => {
           expect(char).toMatchSnapshot();
       });
       it('RandomChar state "char" is empty obj', () =>{
           expect(char.state().item).toBeObject();
       });
       it('RandomChar state "char" is true', () =>{
           expect(char.state().loading).toBeTruthy();
       });
       it('RandomChar state "error" is ', () =>{
           expect(char.state().error).toBeFalsy();
       });
   });
   describe('Habdlers test', () => {
       it('testing onCharLoaded', () => {
           char.instance().onCharLoaded();
           expect(char.state().loading).toBeFalsy();
       });
       it('testing onError', () => {
           char.instance().onError();
           expect(char.state().loading).toBeFalsy();
           expect(char.state().error).toBeTruthy();
       });
       it('testing updateChar', () => {
           char.instance().updateChar();
           expect(char.state().loading).toBeFalsy();
       });
   });
});