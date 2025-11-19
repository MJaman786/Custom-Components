let url = 'https://jsonplaceholder.typicode.com/posts';

const mainContainer = document.querySelector('.main-container');

const fetchData = async () => {
    try {
        const request = await fetch(url);
        let data = await request.json();
        // data = data.slice(0, 100);
        console.log(data);

        mainContainer.innerHTML = '';
        data.map((data, index) => {
            mainContainer.innerHTML += `
                <div class="card-container">
                    <div class="card-head">
                        <div class="card-id">${data.id}</div>
                        <div class="card-title">${data.title}</div>
                    </div>
                    <div class="card-body">
                        <p class="card-desc">${data.body}</p>
                    </div>
                </div>
            `;
        });

    } catch (error) {
        console.log(`Error while receing data`);
        console.log(error);
    }
}

fetchData();