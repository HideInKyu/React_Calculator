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

    let row = [];

    for (let i = 9; i > 0; i--) {
        row.unshift(i);
        console.log(row);
        if (row.length === 3) {
            row.forEach((e) => {
                buttons.push(
                    <MathButton
                        value={e}
                        setCurrentCalc={props.setCurrentCalc}

                    />,
                );
                switch (e) {
                    case 9:
                        buttons.push(
                            <MathButton
                                value={"x"}
                                setCurrentCalc={props.setCurrentCalc}
        
                            />,
                        );
                        break;
                    case 6:
                        buttons.push(
                            <MathButton
                                value={"-"}
                                setCurrentCalc={props.setCurrentCalc}
        
                            />,
                        );
                        break;
                    case 3:
                        buttons.push(
                            <MathButton
                                value={"+"}
                                setCurrentCalc={props.setCurrentCalc}
        
                            />,
                        );
                        break;
                }
            });
            row = [];
        }
        if (i === 1) {
            buttons.push(
                <ChangeCalc img={CalcIcon} />,
                <MathButton
                    value={"0"}
                    setCurrentCalc={props.setCurrentCalc}
                />,
                <MathButton
                    value={"."}
                    setCurrentCalc={props.setCurrentCalc}
                />,
                <MathButton
                    value={"="}
                    setCurrentCalc={props.setCurrentCalc}
                />,
            );
        }
    }

    return (
        <>
            <div className="no-select  BKP">{buttons}</div>
        </>
    );
};

export default BasicKeyPad;
