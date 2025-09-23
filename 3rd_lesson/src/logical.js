const a = 10;
const b = 20;
const c = '30';
const d = 'autumn';
const e = true;
const g = null;

console.log('a < a =', a < a);
console.log('a < b =', a < b);
console.log('a < c =', a < c);
console.log('a < d =', a < d);
console.log('a < e =', a < e);

console.log('a > a =', a > a);
console.log('a > b =', a > b);
console.log('a > c =', a > c);
console.log('a > d =', a > d);
console.log('a > e =', a > e);

console.log('a <= a =', a <= a);
console.log('a <= b =', a <= b);
console.log('a <= c =', a <= c);
console.log('a <= d =', a <= d);
console.log('a <= e =', a <= e);

console.log('a >= a =', a >= a);
console.log('a >= b =', a >= b);
console.log('a >= c =', a >= c);
console.log('a >= d =', a >= d);
console.log('a >= e =', a >= e);

console.log('a == a =', a == a);
console.log('a == b =', a == b);
console.log('a == c =', a == c);
console.log('a == d =', a == d);
console.log('a == e =', a == e);

console.log('a === a =', a === a);
console.log('a === b =', a === b);
console.log('a === c =', a === c);
console.log('a === d =', a === d);
console.log('a === e =', a === e);

console.log('a != a =', a != a);
console.log('a != b =', a != b);
console.log('a != c =', a != c);
console.log('a != d =', a != d);
console.log('a != e =', a != e);

console.log('a !== a =', a !== a);
console.log('a !== b =', a !== b);
console.log('a !== c =', a !== c);
console.log('a !== d =', a !== d);
console.log('a !== e =', a !== e);

console.log('a < b && c > d =', a < b && c > d);
console.log('a < b && c > e =', a < b && c > e);
console.log('a < b || c > d =', a < b || c > d);
console.log('a < b || c > e =', a < b || c > e);
console.log('!(a < b) =', !(a < b));
console.log('!(a > c) =', !(a > c));
console.log('!!(a < b) =', !!(a < b));
console.log('!!(a > c) =', !!(a > c));

const f = g ?? 'this expression is null';
console.log('f =', f);
