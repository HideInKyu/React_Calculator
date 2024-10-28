import React, { useState } from "react";

import BasicKeyPad from "./components/BasicKP";
import Display from "./components/Display.js";

const App = () => {
    const [display, setDisplay] = useState("");
    const [currentCalc, setCurrentCalc] = useState("");

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
