// version 0:
// console.log('\u0007');
// control z and bg 

// const time = process.argv[2]

// Version 1
// const babyTimer = function () {
//     console.log('3 seconds has passed');
//     console.log(`\u0007`);
// }

// setTimeout(babyTimer, 3000)

// // Version 2
// // clean version by using reminder function
// setTimeout(babyTimer, time * 1000);

// Understanding Version 
// const time = process.argv[2];

// setTimeout(function() {
//     console.log(time + ' seconds have passed!');
//     console.log(`\u0007`);
// }, time * 1000);


// Version 3

const times = process.argv.slice(2)

for (const time of times) {
    setTimeout(function () {
        console.log(`\u0007`);
        console.log(`This is your reminder that ${time} seconds have passed`);
    }, time * 1000)
}


// const times = process.argv.slice(2);

// for (const time of times) {
//     setTimeout(function () {
//         console.log('\u0007');
//         console.log('Reminder');
//     }, time * 1000)
// }



// setTimeout(function(){
//     console.log(`\u0007`);
//     console.log('3 seconds has passed!')
// }, 3000)

// const time = process.argv[2];

// setTimeout(function(){
//     console.log('\u0007');
// }, time * 1000);




