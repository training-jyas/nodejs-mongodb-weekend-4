let sum = (a, b, callback) => {
    if (typeof a === 'number' && typeof b === 'number') {
        callback('success add');
        console.log(a + b);
    } else {
        callback('arguments should be numbers');
    }
};

let main = () => {
    let callback = (message) => {
        console.log(message);
    };
    sum(10, '20', callback);
};

main();