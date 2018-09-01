console.log('console 11');

setTimeout(() => {
    console.log('settimeout 1');
}, 3000);

setTimeout(() => {
    console.log('settimeout 2');
}, 0);

console.log('console 2');