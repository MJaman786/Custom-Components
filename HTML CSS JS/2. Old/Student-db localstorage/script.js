const uname = document.querySelector('#name');
const uemail = document.querySelector('#email');
const ucourse = document.querySelector('#course');

const tbody = document.querySelector('tbody');

const addBtn = document.querySelector('.add-btn');
const clsBtn = document.querySelector('.cls-btn');

let myArray = [] = JSON.parse(localStorage.getItem('myArray')) || [];

function renderTable() {
    tbody.innerHTML = '';
    myArray.forEach((value, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${value.Objname}</td>
                <td>${value.Objemail}</td>
                <td>${value.Objcourse}</td>
                <td><button class="cls-btn" onclick="removeItem(${index})">Clear</button></td>
            </tr> 
        `
    })
}

addBtn.addEventListener('click', () => {
    // e.preventDefault()
    let obj = {
        Objname: uname.value,
        Objemail: uemail.value,
        Objcourse: ucourse.value
    }
    myArray.push(obj);
    localStorage.setItem('myArray', JSON.stringify(myArray));
    renderTable();
    uname.value = '';
    uemail.value = '';
    ucourse.value = '';
})

function removeItem(i) {
    myArray.splice(i, 1);
    localStorage.setItem('myArray', JSON.stringify(myArray));
    renderTable()
}

window.onload = ()=>{
    renderTable();
}