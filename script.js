const form = document.getElementById('form');
const pass1 = document.getElementById('password1');
const pass2 = document.getElementById('password2');
const messageCont = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordMatch = false;

function validateForm(){
    isValid = form.checkValidity();
    // Styling for error messages
    if(!isValid)
    {   message.textContent = 'Please fill out all the fields.';
        messageCont.style.color = 'red';
        messageCont.style.borderColor = 'red';
        return;
    }

    // Check to see if passwords match
    if(pass1.value === pass2.value){
        passwordMatch = true;
        pass1.style.borderColor = 'green';
        pass2.style.borderColor = 'green';
    } else {
        passwordMatch = false;
        message.textContent = 'The passwords do not match';
        message.style.color = 'red';
        messageCont.style.borderColor = 'red';
        pass1.style.borderColor = 'red';
        pass2.style.borderColor = 'red';
        return;
    }

    // If the form is valid and pssswords match
    if( isValid && passwordMatch) {
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageCont.style.borderColor = 'green';
    }
}

function storeUserData(){
    const user = {
        name : form.name.value,
        phone : form.phone.value,
        email : form.email.value,
        website : form.website.value,
        password : form.password.value 
    }

    // Do something with user data
    console.log(user);
}

function processFormData(e){
    e.preventDefault();
    // Validate form
    validateForm();
    // Submit form if data is valid
    if(isValid && passwordMatch){
        storeUserData();
    }
}


//  Event Listeners
form.addEventListener('submit',processFormData);
