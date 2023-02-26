module.exports = function reverse (n) {
    return Math.abs(n).toString().split("").reverse().join("");
    // Math.abs() - возвращаем абсолютное число
    // toString() - делаем строку
    // split() - разбиваем строку на элементы массива
    // reverse() - переворачиваем массив 
    // join() - cобираем все элементы обратно в строку
};