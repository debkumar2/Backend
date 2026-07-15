let msg = 'Welcome to Node';

let empData = {
    id: 101,
    name: 'John Doe',
    email: 'deb@gmail.com',
    gender: 'Male',
    active: true
}

const disp = (inp) => {
    console.log(`${inp} Hey Buddy`);
}

const fact = (f) => {
    let = t = 1;
    for (let i = 1; i <= f; i++) {
        t = t * i;
    }
    console.log(`Factorial of ${f} is ${t}`);

}

module.exports = { msg, empData, disp, fact }