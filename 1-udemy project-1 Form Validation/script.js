var form = document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");
var passwordshow = document.getElementById("passwordshow")
var passwordshow1 = document.getElementById("passwordshow1")

function showError(input, message) {
    var formControl = input.parentElement;
    console.log(formControl)
    formControl.className = "form-control error";
    var small = formControl.querySelector("small");
    small.innerText = message;


}

function showSuccess(input) {
    console.log(input)
    var formControl = input.parentElement;
    formControl.className = "form-control success";

}
///user name for input
function getUserId(input) {
var getInputId = input.id;
    return (getInputId.charAt(0).toUpperCase() + input.id.slice(1));

}
// min and max field checking
function checkInputLength(input, min, max) {

    if (input.value.length < min) {
        showError(input, "please fill min 5 character");
    } else if (input.value.length > max) {
        showError(input, "please fill max 10 character");

    } else {
        showSuccess(input);
    }

}
///password format checking
function checkValidPassword(input) {
    const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
    if (re.test(input.value)) {
        showSuccess(password)
    } else {
        showError(password, "password Must fill this format(@,0-9,A,a)")

    }
}
// email format checking
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
        showSuccess(email)
} else {
        showError(email, "please enter valid email")

}
}

//password ckeck equal or not
function checkPassword(input1, input2) {
if (input1.value !== input2.value) {
 showError(input2, "password2 should match with above password1")
    }
}

function myinput(inputs) {
inputs.forEach(input => {
if (input.value === "") {
            showError(input, ` ${getUserId(input)} must fill`)

        } else {
            showSuccess(input)

        }
     });
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
   myinput([username, email, password, password2]);
   
    checkInputLength(username, username.min, 10);
    checkInputLength(password, 8, 15);
    checkEmail(email);
    checkPassword(password, password2);
    checkValidPassword(password);

})

//password icon show and hide
function passwordFieldShow() {

    if (password.type === "password") {
        password.type = "text";
    }
    else {
        password.type = "password";
        passwordshow.classList.toggle('fa-eye-slash');
    }
}
//password2 icon show and hide
function passwordFieldShow1() {
    if (password2.type === "password") {
        password2.type = "text";
    }
    else {
        password2.type = "password";
        passwordshow1.classList.toggle('fa-eye-slash');

    }
}
///password icon get dom
passwordshow.addEventListener("click", () => {

    passwordFieldShow();
})

passwordshow1.addEventListener("click", () => {

    passwordFieldShow1();
})