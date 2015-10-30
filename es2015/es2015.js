'use strict';

/***
 * let
 * */

let a = 1;
let b = 'b';

function fn() {
    //var fnName = arguments.callee.name;// Non-standart
    //console.log(fnName);

    a = 5;
    let b = 10;
    console.log('b in fn', b);
}

fn();

console.log('a', a);
console.log('b', b);