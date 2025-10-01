const a = 10;
const b = 20;
const c = '30';
const d = 'autumn';

if (a < b || c > d) {
    console.log('This is true');
}

if (a * b === 500 && a < b) {
    console.log('This is false');
} else {
    console.log('This is true');
}

if (a > b) {
    console.log('This is false');
} else if (a ** 2 === 200 && a + b === 30) {
    console.log('This is also false');
} else {
    console.log('All conditions are false, so this is true');
}
