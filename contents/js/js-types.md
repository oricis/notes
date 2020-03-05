# JS types

    let arr = [];
    let num = 65;
    let obj = {};
    let str = '';

    // Checking empties
        console.log(str === ''); // true
        console.log(arr === []); // false

    // Things that are objects
        console.log(typeof(null)); // object
        console.log(typeof([]));   // object
        console.log(typeof(null)); // object

    // Other datatypes
        console.log(typeof(num)); // number
        console.log(typeof(str)); // string
        console.log(typeof(xxx)); // undefined

    // To sized an Array:
        arr.length;

    // To sized an Object:
        let arrFromObject = Object.entries(obj);
        arrFromObject.length;

    // To check an empty Array
        console.log(arr.length === 0);

    // To check an empty Object
        console.log(Object.entries(obj).length === 0);


Una función JS sin un tipo de retorno específico retorna un undefined.

***

[Go to index](../../README.md)
