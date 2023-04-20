//local storage to store credentials

let namez = document.querySelector('#name');
let phone = document.querySelector('#phone');
let email = document.querySelector('#email');
let password = document.querySelector('#pass');
let username = document.querySelector('#useremail');
let userpass = document.querySelector('#userpass');
let resSpan = document.querySelector('#msg');

let loginBtn = document.querySelector('#login');
let regBtn = document.querySelector('#regBtn');

let userCredentials = JSON.parse(localStorage.getItem("taskEntries"));

let err_border = "2px solid #eb4646";
let no_err_border = "1px solid gray";

let msg = [];

regBtn.addEventListener("click", e => {

    e.preventDefault();
    registerCredential();

});

loginBtn.addEventListener("click", e => {

    e.preventDefault();
    authenticateCredentials();

});

function registerCredential() {

    if (userCredentials == null) {
        userCredentials = [];
    }

    let informations = {

        name: namez.value,
        date: phone.value,
        phone: phone.value,
        email: email.value,
        password: password.value

    }

    userCredentials.push(informations);

    localStorage.setItem("taskEntries", JSON.stringify(userCredentials));

}

username.addEventListener("keyup", () => {

    username.length >= 1 ? username.style.border = err_border : username.style.border = no_err_border ; resSpan.innerHTML = "";

});

userpass.addEventListener("keyup", () => {

    userpass.length >= 1 ? userpass.style.border = err_border : userpass.style.border = no_err_border ; resSpan.innerHTML = "";

});

function authenticateCredentials() {

    if (!username.value.length >= 1 && !userpass.value.length >= 1) {

        username.style.border = err_border;
        userpass.style.border = err_border;
        resSpan.classList.toggle('error');
        msg.push("Email and Password is required");
        resSpan.innerHTML = msg;
        msg.pop();

    } else if (!username.value.length >= 1) {

        username.style.border = err_border;
        resSpan.classList.toggle('error');
        msg.push("Email is required");
        resSpan.innerHTML = msg;
        msg.pop();

    } else if (!userpass.value.length >= 1) {

        userpass.style.border = err_border;
        resSpan.classList.toggle('error');
        msg.push("Password is required");
        resSpan.innerHTML = msg;
        msg.pop();

    } else {

        for ( let i = 0; i < userCredentials.length; i++ ) {

            if (username.value === userCredentials[i].email && userpass.value === userCredentials[i].password) {
    
                window.location.href = "./index.html";
    
            } else {
    
                userpass.style.border = err_border;
                username.style.border = err_border;
                resSpan.classList.toggle('error');
                msg.push("Credentials doesn't match our record");
                resSpan.innerHTML = msg;
                msg.pop();
    
            }
    
        }

    }

}

