# Js Pro

### Console logging

#### Logging all object at once

```
const foo = {name: 'tom', age: 30};
const bar = {name: 'john', age: 40};

console.log({foo, bar});
```

#### Css Style 

```
console.log('%c my message','color:orange;font-weight:bold;background:red;');
```

#### Table
Display array of objects in a table directly

```
const foo = {name: 'tom', age: 30};
const bar = {name: 'john', age: 40};

console.table([foo,bar]);

```


#### Keep Track of time
If you want to benchmark the performance.

```
console.time('looper');
for (var i = 0; i < 1000000; i++) {

}
console.timeEnd('looper');
```

**NOTE** here the string used `looper` should be same for both the console `time` and `timeEnd`


#### Trace From Where

```
const deleteMe = () => console.trace('You are here'); // provides info about the this is from and where it is called.

deleteMe();

```

