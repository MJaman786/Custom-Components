/*

entry ;
intro ;

- how many you can decare a variables
    in js we use var, let, and const

- what is difference between '==' and '==='
    == means {only the value comparison check}
    === means {value + datatype comparison check}

- what is the keyword for declaring constant variable
    const keyword

- what is difference betweeen let and const
    let [
        
        - no redeclaration
        - but can be reassinged

        - example
            let name = "Aman"
            console.log(name); // Aman

            name = "Mitesh"
            console.log(name); // Mitesh
        
    ]
    
    const [
        - no redecalre and no reassingned
    ]

- what is diff betw normal fun() and arraow ()=>{}
    normal function [
        is a traditional way of writing fun().
    ]

    arroe function [
        is a ES6 function.
        simple way of writing function.
    ]

- What is React Router 

- What are types of HOOKS in React

- What is useState() and useEffect() Hook

- What is componet life cycle.

- What are types of components.

- Is Javascript is synchrous or asynchronus language

- Write a program for reversing the array:
    // code ...

*/

// - Create a promise that prints "promise resolved after 5s" in console.

// promise

const superman = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('1st promise resolved after 5s')
    }, 5000);
})

superman
.then((msg)=>{
    console.log(msg);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log('This is finally block');
})


// async await

async function mp() {
    try {
        await new Promise((res, rej)=>{
            setTimeout(()=>{
                res('2nd promise resolved after 10s')
            }, 10000);
        })
        .then((msg)=>{
            console.log(msg);
        })
    } catch (error) {
        console.log(error);
    }
}

mp();


// 
const li = document.createElement('li');
const fruitList = document.querySelector('.fruit-list');

fruitList.appendChild(li);


