
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix && matrix.length !== 0) {
        matrix.forEach((item, index) => {if (index % 2 !== 0) item.reverse()});
        return matrix.reduce((acc, val) => acc.concat(val), []);
    }
    else {return []}
}
