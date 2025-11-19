const url = 'https://api.restful-api.dev/objects';

const fetchData = new Promise((resolve, reject)=>{
    fetch(url)
    .then((response)=>{
        if (response.ok) {
            return response.json();
        }else{
            console.log('Error while fetching data');
        }
    })
    .then((data)=>{
        resolve(data)
    })
    .catch((msg)=>{
        reject(msg)      
    })
})

fetchData
.then((data)=>{
    console.log(data);
})
.catch((msg)=>{
    console.log(msg);
})