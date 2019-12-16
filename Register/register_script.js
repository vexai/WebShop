const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassowrd');
const email = document.getElementById('email');

const form = document.getElementById('myForm');

const green = '#4CAF50';
const red = '#44336';



function validateFirstName(){
    if(checkIfEmpty(firstName)) return;
    if(checkIfOnlyLetters(firstName)) return;
}

function validateLastName(){
    if(checkIfEmpty(lastName)) return;
    if(checkIfOnlyLetters(lastName)) return;
}

function validatePassword(){
    if(checkIfEmpty(password)) return;
    if(!meetLength(password, 6, 20)) return;
    //check password
    if (!containsCharacters(password, 3))
    return true;
}

function validateConfirmPassword() {
    if (password.className !== 'valid') {
        setInvalid(confirmPassword, 'Password must be valid');
        return;
      }
      if (password.value !== confirmPassword.value) {
        setInvalid(confirmPassword, 'Passwords must match');
        return;
      } else {
        setValid(confirmPassword);
      }
      return true;
    }

function validateEmail(){
    if(checkIfEmpty(email)) return;
    if(!containsCharacters(email, 4)) return;
    return true;
}





function checkIfEmpty(field){
    if(isEmpty(field.value.trim())){
        setInvalid(field, `${field.name} must not be empty`);
        return true;
    } else {
        setValid(field);
        return false;
    }
}

function isEmpty(value){
    if(value === '') return true;
    return false;
}

function setInvalid(field, message) {
field.className = 'invalid';
field.nextElementSibling.innerHTML = message;
field.nextElementSibling.style.color = red;
}

function setValid(field){
field.className = 'valid';
field.nextElementSibling.innerHTML = '';
}

function checkIfOnlyLetters(field){
    if(/^[a-zA-Z ]+$/.test(field.value)){
        setValid(field);
        return true;
    } else{
        setInvalid(field, `${field.name} must contain only letters`);
        return false;
    }
}

function meetLength(field, minLength, maxLength){
    if(field.value.length >= minLength && field.value.length < maxLength){
        setValid(field);
        return true;
    } else if(field.value.length < minLength){
        setInvalid(field, `${field.name} must be at least ${minLength} characters long`)
        return false;
    } else {
        setInvalid(field, `${field.name} must be shorter than ${maxLength} characters`)
        return false;
    }
}

function containsCharacters(field, code){
    let regEx;
    switch(code){
        case 1:
            regEx = /(?=.*[a-zA-Z])/;
            return matchWithRegEx(regEx,field, 'Must contain at least one letter');

        case 2:
            regEx = /(?=.*\d)(?=.*[a-zA-Z])/;
            return matchWithRegEx(regEx, field, 'Must contain at least one number and one number');

        case 3:
            regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/
            return matchWithRegEx(regEx, field, 'Must contain at least one upper letter, one lower letter and one number');

        case 4:
            regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return matchWithRegEx(regEx, field, 'Must be valid e-mail address')
        default:
            return false;
    }
}

function matchWithRegEx(regEx, field, message){
    if(field.value.match(regEx)){
        setValid(field);
        return true;
    } else {
        setInvalid(field, message);
        return false;
    }
}








