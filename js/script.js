const foo = {name: 'tom', age: 30};
const bar = {name: 'john', age: 40};

console.log({foo, bar});


console.log('%c my message', 'color:orange;font-weight:bold;background:red;');

console.table([foo, bar]);


console.time('looper');
for (var i = 0; i < 1000000; i++) {

}
console.timeEnd('looper');


const deleteMe = () => console.trace('You are here');

deleteMe();

