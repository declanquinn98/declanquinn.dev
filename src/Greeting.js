import './App.css';
import { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import { useSpring, animated, config } from 'react-spring'

import Colors from './Assets/Colors.js';
import downArrow from './Assets/Images/downArrow.png'

const Greeting = () => {

    const timeStep = 3;
    //Initial fade in offset below 0
    const [timer, setTimer] = useState(-2);
    const [text, setText] = useState("G'day");
    const [finished, setFinished] = useState(1);
    const [textOpacity, setTextOpacity] = useState(0);
    const textOpacitySpring = useSpring({ textOpacity, config: config.slow });
    const arrowSpring = useSpring({ finished, config: config.molasses });


    useEffect(() => {
        setTimer(timer + 1);
    }, []);

    useEffect(() => {
        updateTimer();
        if (timer === 0) {
            setText("G'day")
        }
        if (timer === timeStep) {
            setText("My name's Declan.")
        }
        if (timer === timeStep * 2) {
            setText("I'm an IT graduate.")
        }
        if (timer === timeStep * 3) {
            setText("I like web design.")
        }
        if (timer === timeStep * 4) {
            setText("Look what I've done so far.")
        }
        /*
        if (timer === timeStep) {
            setText("This site is under construction")
        }
        */
    }, [timer]);

    const updateTimer = async () => {
        if (timer === 0 || timer % timeStep === 0 && timer > 0) {
            setTextOpacity(1);
        }
        if (timer % timeStep === 2) {
            setTextOpacity(0);
        }

        await new Promise(r => setTimeout(r, 1000));
        if (timer === (timeStep * 5) - 1) {
            setTimer(0);
            setFinished(1);
            return;
        }
        setTimer(timer + 1);
    }

    const arrow1Style = useSpring({
        loop: true,
        from: { top: 0 },
        to: { top: 200 },
        config: config.molasses
    })

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
                    zIndex: 0,
                    width: "75vw",
                    fontWeight: 100,
                    fontSize: "10vw",
                    position: "fixed",
                    fontFamily: "Sora",
                    textAlign: "center",
                    opacity: textOpacitySpring.textOpacity,
                }}
            >
                {text}
            </animated.h1>

            <h1
                style={{
                    position: "absolute",
                    top: "3vw",
                    left: "5vw",
                }}
            >
                {timer % timeStep}
            </h1>
            <h1
                style={{
                    position: "absolute",
                    top: "5vw",
                    left: "5vw",
                }}
            >
                {timer}
            </h1>
            <div
                style={{
                    zIndex: 0,
                    bottom: 0,
                    width: "8vw",
                    height: "8vw",
                    display: "flex",
                    position: "fixed",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <animated.img
                    src={downArrow}
                    style={{
                        zIndex: 0,
                        opacity: 1,
                        width: "33%",
                        position: "absolute",
                        ...arrow1Style
                    }}
                />
            </div>
        </div>
    );
}

export default Greeting;