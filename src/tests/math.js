const checkInteger = (value) => {
    if (typeof value === 'number' ){
        return value % 1 === 0;
    }
        return false;
};

module.exports = {
    checkInteger,
}