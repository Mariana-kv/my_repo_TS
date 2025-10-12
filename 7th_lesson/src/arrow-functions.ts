const sumArrayElements3 = (arr: (number | string)[]): number =>
    arr.reduce((sum: number, item: number | string): number => {
        if (typeof item === 'number') {
            return sum + item;
        } else if (typeof item === 'string') {
            return sum + item.length;
        }
        return sum;
    }, 0);

const numArr2: number[] = [10, 20, 30, 40, 50];
const strArr2: string[] = ['eggs', 'banana', 'milk', '100'];

console.log('Sum of numbers: ' + sumArrayElements3(numArr2));
console.log('Sum of strings: ' + sumArrayElements3(strArr2));
