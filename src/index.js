
exports.min = function min(array) {
    if (!Array.isArray(array) || array.length == 0)
        return 0;
    var min = Number.MAX_VALUE;
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min)
            min = array[i];
    }
    return min;
}

exports.max = function max(array) {
    if (!Array.isArray(array) || array.length == 0)
        return 0;
    var max = Number.MIN_VALUE;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max)
            max = array[i];
    }
    return max;
}

exports.avg = function avg(array) {
    if (!Array.isArray(array) || array.length == 0)
        return 0;
    var sum = 0;
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
        count++;
    }
    return sum / count;
}
