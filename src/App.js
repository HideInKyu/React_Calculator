import React, { useState, useEffect } from "react";

import BasicKeyPad from "./components/BasicKP";
import Display from "./components/Display.js";

import arrayState from "./hooks/stateArrayHook.js";
import math from "./hooks/mathHook.js";

const App = () => {
    const arith = ["+", "-", "÷", "x"];
    const [display, setDisplay] = useState("");
    const [currentCalc, setCurrentCalc] = useState("");
    const [historyAns, setHistoryAns] = useState([]);

    useEffect(() => {
        if (currentCalc === "CLEAR") {
            setDisplay("");
        } else if (currentCalc === "=") {
            math.calc(display);
            arrayState.push(setHistoryAns, "answer");
        } else {
            console.log(display);
            if (
                arith.includes(display[display.length - 1]) &&
                arith.includes(currentCalc)
            ) {
                setDisplay(display.slice(0, -1));
            }
            setDisplay((prevDisplay) => prevDisplay + currentCalc);
            setCurrentCalc("");
        }
    }, [currentCalc]);

    return (
        <>
            <Display display={display} historyAns={historyAns} />
            <BasicKeyPad
                setCurrentCalc={setCurrentCalc}
                setDisplay={setDisplay}
            />
        </>
    );
};

export default App;
