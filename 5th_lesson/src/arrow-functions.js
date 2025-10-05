const sumArrayElements3 = arr =>
    arr.reduce((sum, item) => {
        if (typeof item === 'number') {
            return sum + item;
        } else if (typeof item === 'string') {
            return sum + item.length;
        }
        return sum;
    }, 0);

const numArr2 = [10, 20, 30, 40, 50];
const strArr2 = ['eggs', 'banana', 'milk', '100'];

console.log('Sum of numbers: ' + sumArrayElements3(numArr2));
console.log('Sum of strings: ' + sumArrayElements3(strArr2));
