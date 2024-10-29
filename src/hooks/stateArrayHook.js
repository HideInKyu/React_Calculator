const arrayState = {
    push: (setState, newValue) => {
        setState((prevArray) => [...prevArray, newValue]);
    },
    clear: (setState) => {
        setState([]);
    },
};

export default arrayState;
