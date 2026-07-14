const test = require('./custom');

console.log(test.msg);
for (let key in test.empData) {
    console.log(`${key} : ${test.empData[key]}`);
}
test.disp("Mr.Deb");

test.fact(5);


