const promiseOne = new Promise((resolve, reject)=>{
    const request = fetch('https://api.restful-api.dev/objects');
    request
    .then((response)=>{
        if (response.ok) {
            return response.json()
        }else{
            throw new Error("Error while fetching the data");
        }
    })
    .then((data)=>{
        resolve(data);
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

