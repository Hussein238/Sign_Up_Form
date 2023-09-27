
const submit = document.getElementById('submitBtn');

function matchPass(){ // check if the passwords match
    let password = document.getElementById('password');
let confirmPass = document.getElementById('confirmPass');
    if  (password.value !== confirmPass.value){
      confirmPass.setCustomValidity('Passwords do not match!'); // set error message if they dont match
      
    }  else if(password.value === confirmPass.value){
         confirmPass.setCustomValidity(''); // if matching set customValidity to empty to remove the error message
    }
    confirmPass.reportValidity(); // send the response back to the HTML form through the custom validation API
}

submit.addEventListener('click', matchPass);