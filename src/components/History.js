import React from "react";

const history = (props) => {
    const historyAns = props.historyAns;
    const answers = [];
    if (historyAns.length > 0) {
        historyAns.forEach((e) => {
            answers.push(<h3>{e}</h3>);
        });
    }

    return (
        <>
            <div className="history">{answers}</div>
        </>
    );
};

export default history;
