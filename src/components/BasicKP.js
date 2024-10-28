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
                setDisplay={props.setDisplay}
            />,
        );
    }
    for (let i = 1; i <= 9; i++) {
        buttons.push(
            <MathButton
                value={i.toString()}
                setCurrentCalc={props.setCurrentCalc}
                currentCalc={props.currentCalc}
                setDisplay={props.setDisplay}
            />,
        );
        if (i % 9 === 0) {
            buttons.push(
                <MathButton
                    value={"-"}
                    setCurrentCalc={props.setCurrentCalc}
                    setCurreclc={props.currentCalc}
                    setDisplay={props.setDisplay}
                />,
            );
        } else if (i % 6 === 0) {
            buttons.push(
                <MathButton
                    value={"+"}
                    setCurrentCalc={props.setCurrentCalc}
                    setDisplay={props.setDisplay}
                    setCurreclc={props.currentCalc}
                />,
            );
        } else if (i % 3 === 0) {
            buttons.push(
                <MathButton
                    value={"X"}
                    setCurrentCalc={props.setCurrentCalc}
                    setCurreclc={props.currentCalc}
                    setDisplay={props.setDisplay}
                />,
            );
        }

        if (i === 9) {
            buttons.push(<ChangeCalc img={CalcIcon} />);
            buttons.push(
                <MathButton
                    value={"0"}
                    setCurrentCalc={props.setCurrentCalc}
                    setCurreclc={props.currentCalc}
                    setDisplay={props.setDisplay}
                />,
            );
            buttons.push(
                <MathButton
                    value={"."}
                    setCurrentCalc={props.setCurrentCalc}
                    setCurreclc={props.currentCalc}
                    setDisplay={props.setDisplay}
                />,
            );
            buttons.push(<MathButton value={"="} />);
        }
    }

    return (
        <>
            <div className="no-select  BKP">{buttons}</div>
        </>
    );
};

export default BasicKeyPad;
