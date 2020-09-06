// You should implement your task here.

module.exports = function towelSort(matrix) {
    let isOdd = true;
    let result = [];
    if (matrix === undefined) return result;
    for (let key of matrix) {
        if (isOdd) {
            result.push(key);
            isOdd = false;
        } else {
            result.push(key.reverse());
            isOdd = true;
        }
    }
    return [].concat(...result);
}
