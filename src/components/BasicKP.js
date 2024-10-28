import React from "react";
import MathButton from "./MathButton";
import ChangeCalc from "./ChangeCalc";
import CalcIcon from "../../public/assets/calc.png";

const BasicKeyPad = (props) => {
    const buttons = [];
    const topRow = ["AC", "+/-", "%", "÷"];
    for (let i = 0; i < topRow.length; i++) {
        buttons.push(
            <MathButton
                value={topRow[i]}
                setCurrentCalc={props.setCurrentCalc}
                currentCalc={props.currentCalc}
            />,
        );
    }

    for (let i = 9; i > 0; i--) {
        buttons.push(
            <MathButton
                value={i.toString()}
                setCurrentCalc={props.setCurrentCalc}
                currentCalc={props.currentCalc}
            />,
        );

        switch (i) {
            case 7:
                buttons.push(
                    <MathButton
                        value={"+"}
                        setCurrentCalc={props.setCurrentCalc}
                        currentCalc={props.currentCalc}
                    />,
                );
                break;
            case 4:
                buttons.push(
                    <MathButton
                        value={"-"}
                        setCurrentCalc={props.setCurrentCalc}
                        currentCalc={props.currentCalc}
                    />,
                );
                break;
            case 1:
                buttons.push(
                    <MathButton
                        value={"+"}
                        setCurrentCalc={props.setCurrentCalc}
                        currentCalc={props.currentCalc}
                    />,
                );
                break;
        }
    }

    return (
        <>
            <div className="no-select  BKP">{buttons}</div>
        </>
    );
};

export default BasicKeyPad;
