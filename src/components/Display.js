import React, { useState, useRef } from "react";

import History from "./History";

const Display = (props) => {
    return (
        <>
            <div className="display">
                <h1 className="current">{props.display}</h1>
                <History historyAns={props.historyAns} />
            </div>
        </>
    );
};

export default Display;
