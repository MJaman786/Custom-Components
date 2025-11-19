const addIcon = document.querySelector('.add-icon');
const text = document.querySelector('#text');

let myTask = JSON.parse(localStorage.getItem('myTask')) || [];

addIcon.addEventListener('click', () => {

    let mytext = text.value;
    let myDate = new Date().toLocaleString('en-Us', {
        weekday: 'short',
        month: 'short',
        year: '2-digit',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })

    let myObj = {
        text: mytext,
        date: myDate
    }

    myTask.unshift(myObj);
    
    text.value = ''

    displayData()
    saveToLocalStorage(myTask)
})
console.log(myTask);

const saveToLocalStorage = (myTask)=>{
    localStorage.setItem('myTask', JSON.stringify(myTask));
}

const taskList = document.querySelector('.task-list');
const displayData = () => {
    taskList.innerHTML = ''
    if (myTask.length <= 0) {
        taskList.innerHTML = `
            <div class="empty-container">
                <i class="fi fi-rr-disc-drive empty-icon"></i>
                <p class="empty-text">There are no any Task</p>
            </div>
        ` 
    }else{
        myTask.forEach((value, index, arr) => {
        taskList.innerHTML += `
            <div class="task">
                <div class="data-container">
                    <div class="task-container">
                        <div class="task-title">${value.text}</div>
                        <div class="task-time">${value.date}</div>
                    </div>
                    <div class="action-con" onclick="clearTask(${index})">
                        <div class="cls-btn"><i class="fi fi-rr-trash"></i></div>
                    </div>
                </div>
            </div>
        `
        });
    }
}

const clearTask = (index)=>{
    myTask.splice(index, 1);
    saveToLocalStorage(myTask)
    displayData()
}

displayData()