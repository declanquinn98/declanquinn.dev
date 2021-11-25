import './App.css';
import { useState, useEffect } from "react";

import Greeting from './Greeting.js';
import Portfolio from './Portfolio.js';
import Colors from './Assets/Colors.js';

const App = () => {


    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                color: Colors.textBlack,
                backgroundColor: Colors.natural30,
            }}
        >
            <Greeting />
            <Portfolio />

        </div>
    );
}




export default App;
