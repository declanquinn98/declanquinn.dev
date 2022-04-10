import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import BoneyardCollective from "./boneyardCollective";
import Colors from './Assets/Colors.js';

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/collective" element={<BoneyardCollective />} />
            </Routes>
        </BrowserRouter>
    );
}

const Home = () => {
    return (
        <iframe style={{ width: '100vw', height: '200vh' }} src="https://boneyardcollective.gatsbyjs.io" title="Boneyard Collective"></iframe>
    );
}

const BoneyardCollective = () => {


    return (
        <iframe style={{ width: '100vw', height: '200vh' }} src="https://boneyardcollective.gatsbyjs.io" title="Boneyard Collective"></iframe>
    );
}

export default App;