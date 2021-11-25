import './App.css';
import { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import { useSpring, animated, config } from 'react-spring'

import Colors from './Assets/Colors.js';


const Portfolio = () => {

    useEffect(() => {
    }, []);


    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: Colors.textBlack,
                color:Colors.natural30,
                zIndex: 1
            }}
        >
            <h2>hello</h2>

        </div>
    );
}

export default Portfolio;