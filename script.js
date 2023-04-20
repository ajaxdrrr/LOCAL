//local storage to store credentials

let namez = document.querySelector('#name');
let phone = document.querySelector('#phone');
let email = document.querySelector('#email');
let password = document.querySelector('#pass');

let regBtn = document.querySelector('#regBtn');

let taskEntries = JSON.parse(localStorage.getItem("taskEntries"));

regBtn.addEventListener("click", e => {

    e.preventDefault();
    getInputs();

});


function getInputs() {

    if (taskEntries == null) {
        taskEntries = [];
    }

    let informations = {

        name: namez.value,
        date: phone.value,
        phone: phone.value,
        email: email.value,
        password: password.value

    }

    taskEntries.push(informations);

    localStorage.setItem("taskEntries", JSON.stringify(taskEntries));

}

