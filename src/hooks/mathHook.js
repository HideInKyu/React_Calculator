const math = {
    arith: {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        x: (a, b) => a * b,
        "/": (a, b) => a / b,
        "+/-": (a) => -1 * a,
        "%": (a, b) => (a * b) / 100,
    },
    calc: (string) => {
        const nums = [];
        let index = 0;
        for (let i = 0; i < string.length; i++) {
            if (/^[0-9]$/.test(string[i])) {
                if (nums[index]) {
                    nums[index] = Number(nums[index]) * 10 + Number(string[i]);
                } else {
                    nums[index] = Number(string[i]);
                }
            } else {
                index++;
                nums.push(string[i]);
                index++;
            }
        }
        console.log(arr);
    },
};

export default math;
