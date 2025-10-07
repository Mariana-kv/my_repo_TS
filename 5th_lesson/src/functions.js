function sumArrayElements1(arr) {
    return arr.reduce((sum, item) => {
        if (typeof item === 'number') {
            return sum + item;
        } else if (typeof item === 'string') {
            return sum + item.length;
        }
        return sum;
    }, 0);
}

const numArr1 = [10, 20, 30, 40, 50];
const strArr1 = ['eggs', 'banana', 'milk', '100'];

console.log('Sum of numbers: ' + sumArrayElements1(numArr1));
console.log('Sum of strings: ' + sumArrayElements1(strArr1));

