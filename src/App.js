import React, { useState, useEffect } from "react";

import BasicKeyPad from "./components/BasicKP";
import Display from "./components/Display.js";

const App = () => {
    const [display, setDisplay] = useState("");
    const [currentCalc, setCurrentCalc] = useState("");

    useEffect(() => {
        console.log("currentCalc Changed: ", currentCalc);
        setDisplay(display + currentCalc);
    }, [currentCalc]);

    return (
        <>
            <Display display={display} />
            <BasicKeyPad
                setCurrentCalc={setCurrentCalc}
                currentCalc={currentCalc}
                setDisplay={setDisplay}
            />
        </>
    );
};

export default App;
