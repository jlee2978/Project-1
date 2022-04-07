console.log("Hello World");

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
    var form = document.getElementById('form')
    // element.appendChild(greetingTag);
    element.insertBefore(greetingTag, form)

    return false;   // don't submit the form
}

function toTop() {
    console.log("going to the top");
    window.scrollTo(0, 0);
    console.log("scrolled to the top");
}