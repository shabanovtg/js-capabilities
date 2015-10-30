'use strict';

/***
 * Army functions
 * */
function makeArmy() {
    var shooters = [];

    for (var i = 0; i < 10; i++) {
        (function(a) { // функция для перехвата i
            var shooter = function() { // функция-стрелок
                console.log('shot', a); // выводит свой номер
            };
            shooters.push(shooter);
        })(i); // передача в ф-ю i
    }

    return shooters;
}

var army = makeArmy();
army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9


/***
 * Army functions ES2015
 * */
function makeArmy2015() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        shooters.push(function() {
            console.log('shot2015', i); // выводит свой номер
        });
    }

    return shooters;
}

var army2015 = makeArmy2015();
army2015[0](); // 0
army2015[5](); // 5