const arr1 = ['cat', 'dog', 'elephant'];
const arr2 = [10, 15, 20];
const arr3 = [true, false, true];
const arr4 = ['table', 100, true];

console.log('----- PUSH -----');

arr1.push('tiger');
arr2.push(25);
arr3.push(false);
arr4.push(200);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

console.log('----- SHIFT -----');

console.log(arr1.shift());
console.log(arr2.shift());
console.log(arr3.shift());
console.log(arr4.shift());

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

console.log('----- UNSHIFT -----');

console.log(arr1.unshift('lion'));
console.log(arr2.unshift(500));
console.log(arr3.unshift(false));
console.log(arr4.unshift('chair'));

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

console.log('----- FILTER -----');

const filterArray1 = arr1.filter(item => item.length > 3);
console.log(filterArray1);

const filterArray2 = arr2.filter(item => item > 15);
console.log(filterArray2);

const filterArray3 = arr3.filter(item => item - true);
console.log(filterArray3);

const filterArray4 = arr4.filter(item => typeof item === 'number');
console.log(filterArray4);

console.log('----- FIND -----');

const findArray1 = arr1.find(item => item.length === 3);
console.log(findArray1);

const findArray2 = arr2.find(item => item < 15);
console.log(findArray2);

const findArray3 = arr3.find(item => item === false);
console.log(findArray3);

const findArray4 = arr4.find(item => typeof item === 'string');
console.log(findArray4);

console.log('----- SORT -----');

const sortArray1 = arr1.sort((a, b) => a.length - b.length);
console.log(sortArray1);

const sortArray2 = arr2.sort((a, b) => a - b);
console.log(sortArray2);

const sortArray3 = arr3.sort((a, b) => a - b);
console.log(sortArray3);

const sortArray4 = arr4.sort();
console.log(sortArray4);

console.log('----- CONCAT -----');
const concatArray1Array2 = arr1.concat(arr2);
console.log(concatArray1Array2);

const concatArray3Array4 = arr3.concat(arr4);
console.log(concatArray3Array4);

console.log('----- INCLUDES -----');
const includesArray1 = arr1.includes('dog');
console.log(includesArray1);

const includesArray2 = arr2.includes('100000');
console.log(includesArray2);

const includesArray3 = arr3.includes(true);
console.log(includesArray3);

const includesArray4 = arr4.includes('chair');
console.log(includesArray4);

console.log('----- JOIN -----');
const joinArray1 = arr1.join(',');
console.log(joinArray1);

const joinArray2 = arr2.join('-');
console.log(joinArray2);

const joinArray3 = arr3.join('//');
console.log(joinArray3);

const joinArray4 = arr4.join('~~~');
console.log(joinArray4);

console.log('----- ...arr1, ...arr3 -----');
const spreadArray1Array3 = [...arr1, ...arr3];
console.log(spreadArray1Array3);

console.log('----- REDUCE -----');
const reduceArray1 = arr1.reduce((acc, word) => acc + ' ' + word);
console.log(reduceArray1);

const reduceArray2 = arr2.reduce((acc, num) => acc + num, 15);
console.log(reduceArray2);

const reduceArray3 = arr3.reduce((acc, item) => acc + (!item ? 1 : 0), 0);
console.log(reduceArray3);

const reduceArray4 = arr4.reduce((acc, item) => acc + (typeof item === 'number' ? item : 0), 0);
console.log(reduceArray4);

console.log('----- FOR EACH -----');
arr1.forEach((item) => {
    console.log(item);
});

arr2.forEach(num => {
    console.log(num * 5);
});

arr3.forEach(item => {
    if (item === true) {
        console.log('This is true');
    } else {
        console.log('This is false');
    }
});

arr3.forEach(item => {
    if (item === '500') {
        console.log('This is correct item');
    } else {
        console.log('There is no correct item in the array');
    }
});

console.log('----- MAP -----');
const mapArray1 = arr1.map(item => item.length);
console.log(mapArray1);

const mapArray2 = arr2.map(item => item / 5);
console.log(mapArray2);

const mapArray3 = arr3.map(item => !item);
console.log(mapArray3);

const mapArray4 = arr4.map(item => 'Value: ' + item);
console.log(mapArray4);
