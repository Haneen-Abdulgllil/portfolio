


// reach to the tags by id
const form = document.getElementById('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var textarea = document.getElementById('textarea');
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

// declare variables

var validateInputs = () => {
    var usernameValue = username.value;
    var emailValue = email.value;
    var textareaValue = textarea.value;

//Error message
    var setError = (element, message) => {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

// Success message

    var setSuccess = element => {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};



 // Test Name Validation

    const isValidName = username => {
        const ne = /^[a-zA-Z ]{3,10}$/;
        return ne.test(String(username));
    }

    if(usernameValue === '') {
        setError(username, 'Name is required');
    }
     else if (!isValidName(usernameValue)) {
        setError(username, 'Your Name must be more than 3 and less than 10');
    } 
    else {
        setSuccess(username);
    }

 // Test Email Validation

    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    if(emailValue === '') {
        setError(email, 'Email is required');
    } 
    else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    }
     else {
        setSuccess(email);
    }

   
 
 // Test textarea validation
    const isValidtextarea = textarea => {
    const t = /^[a-zA-Z ]{20,1000}$/;
    return t.test(String(textarea));
    }
    if(textareaValue === '') {
        setError(textarea, 'Message is required');
    }
    else if (!isValidtextarea(textareaValue)) {
        setError(textarea, 'Your message must be more than 20 letters ');
    } 
    else {
        setSuccess(textarea);
    }
  
}

// start dark mode

function DarkLightMode() {
    var element = document.body;
    element.classList.toggle("dark");
}



// effects images
// $("figure").mouseleave(
//     function( ) {
//       $(this).removeClass("effect");
//     }
//   );

//   (function() {
//     window.onload = function() {
//       var box = document.getElementsById("figure")[0];
  
//       var change = function() {
//        document.querySelector('#figure');
//       };
  
      
//       addEventListener("mouseleave", change, true);
//     };
  
//   }());


  
