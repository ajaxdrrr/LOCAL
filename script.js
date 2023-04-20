//local storage to store credentials

let name = document.querySelector('#name');
let phone = document.querySelector('#phone');
let email = document.querySelector('#email');
let password = document.querySelector('#pass');

let regBtn = document.querySelector('#regBtn');


regBtn.addEventListener("click", e => {

    e.preventDefault();
    getInputs();

});


function getInputs() {

    let informations = {
        task: taskInput.value,
        date: dateInput.value,
        id: taskEntries.length + 1
    }

    taskEntries.push(taskItem);

    localStorage.setItem("taskEntries", JSON.stringify(taskEntries));

}

