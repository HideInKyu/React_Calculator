import React, { useState, useRef } from "react";

const Display = (props) => {
    return (
        <>
            <div className="display">
                <h1 className="current">{props.display}</h1>
            </div>
        </>
    );
};

export default Display;
