const promiseOne = new Promise((resolve, reject)=>{
    const request = fetch('https://api.restful-api.dev/objects');
    request
    .then((request)=>{
        if (request.ok) {
            resolve(request.json());
        }else{
            reject(request.statusText)
        }
    })
    .catch((error)=>{
        console.log(error);
    })
})

promiseOne
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

