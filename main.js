// to continue to fix

document.querySelector('#userGreeting').addEventListener('submit', helloUser)

function helloUser() {
    let user = document.querySelector('#username').value;
    // to change from alert to text greeting on page
    // alert('Hello '+user);
    
    let greetingTag = document.createElement("p");
    greetingTag.innerHTML = "Hello "+user;
    // greetingText = document.createTextNode("Hello "+user);
    // greetingTag.appendChild(greetingText);
    var element = document.getElementById("greeting");
    element.appendChild(greetingTag);

    return false;   // don't submit the form
}