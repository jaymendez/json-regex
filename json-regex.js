const delay = ms => new Promise(res => setTimeout(res, ms));

const jsonRegex = (json, regex, ms) => {
    await delay(ms);
};

export default jsonRegex;