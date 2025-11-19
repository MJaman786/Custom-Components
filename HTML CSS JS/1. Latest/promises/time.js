const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise Resolved after 5s');
    }, 5000);
});

promiseOne
    .then((msg) => {
        console.log(msg);
    })
    .catch((error) => {
        console.log(error);
    })

let count = 0;

const mainFunction = () => {
    console.log(`Value of count : ${count}`);
    count++;

    if (count > 8) {
        clearInterval(intervalId);
    }
}
let intervalId = setInterval(mainFunction, 900);

