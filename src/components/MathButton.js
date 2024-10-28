import React from "react";

const MathButton = (props) => {
    const handleClick = () => {
        const setCurrentCalc = props.setCurrentCalc;
        const value = props.value;
        if (value === "AC") {
            setCurrentCalc("CLEAR");
        } else {
            setCurrentCalc(value);
        }
    };

    return (
        <div className="no-select circleButton" onClick={handleClick}>
            <span className="no-select  number">{props.value}</span>
        </div>
    );
};

export default MathButton;
