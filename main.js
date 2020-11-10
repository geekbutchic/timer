// version 0:
// console.log('\u0007');


const userInput = process.argv[2];


const babyTimer = function () {
    console.log('3 seconds has passed');
    console.log(`\u0007`);
}

setTimeout(babyTimer, userInput)


const altUserInput = process.argv.slice(2);











