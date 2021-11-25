import './App.css';
import { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import { useSpring, animated, config } from 'react-spring'

import Colors from './Assets/Colors.js';

const Greeting = () => {

    const timeStep = 3;
    const [timer, setTimer] = useState(-1);
    const [text, setText] = useState("G'day");
    const [opacity, setOpacity] = useState(0);
    const opacitySpring = useSpring({ opacity, config: config.slow });

    const [finished, setFinished] = useState(0);
    const arrowEnterSpring = useSpring({ finished, config: config.molasses });

    useEffect(() => {
        setTimer(0);
        console.log(arrowEnterSpring.finished)
    }, []);

    useEffect(() => {
        updateTimer();
        if (timer === 0) {
            setText("G'day")
        }
        /*
        if (timer === timeStep) {
            setText("My name's Declan.")
        }
        if (timer === timeStep * 2) {
            setText("I'm an IT graduate.")
        }
        if (timer === timeStep * 3) {
            setText("I like web development.")
        }
        if (timer === timeStep * 4) {
            setText("Look what I've done so far.")
        }
        */
        if (timer === timeStep) {
            setText("This site is under construction")
        }
    }, [timer]);

    const updateTimer = async () => {
        if (timer === -1 || timer === 0 || timer % timeStep === 0) {
            setOpacity(1);
        }
        if (timer % timeStep === 2) {
            setOpacity(0);
        }

        await new Promise(r => setTimeout(r, 1000));
        if (timer === (timeStep * 5) - 1) {
            setTimer(0);
            setFinished(1);
            return;
        }
        setTimer(timer + 1);
    }



    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <animated.h1
                style={{
                    width: "75vw",
                    fontWeight: 100,
                    fontSize: "10vw",
                    fontFamily: "Sora",
                    textAlign: "center",
                    opacity: opacitySpring.opacity,
                    position: "fixed",
                    zIndex: 0
                }}
            >
                {text}
            </animated.h1>


            <animated.button
                style={{
                    position: "absolute",
                    opacity: arrowEnterSpring.finished,
                    top: arrowEnterSpring.finished.to(yOffset => `${100 - (yOffset * 10)}vh`)
                }}
            >
                GO DOWN
            </animated.button>
        </div>
    );
}

export default Greeting;