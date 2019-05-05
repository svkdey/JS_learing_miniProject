document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('number').addEventListener('blur', validateNumber);

function validateEmail () {
    const email = document.getElementById('email');
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!(re.test(email.value))) {
        email.classList.add('is-invalid');

    }else{
         email.classList.remove('is-invalid');
    }
}

function validateNumber() {
const number = document.getElementById('number');
// console.log(number.value.length)

const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const iNumber =Number (number.value)
    if (!(re.test(iNumber))) {
        number.classList.add('is-invalid');

    } else {
        number.classList.remove('is-invalid');
    }
}