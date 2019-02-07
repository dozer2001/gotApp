import React from "react";
import './errorMessege.css';
import img from './error.jpg';

const ErrorMessege = () =>{
    return (
        <>
        <img alt="no img" src={img}></img>
        <span>Something goes wrong</span>
        </>);
};
export default ErrorMessege;