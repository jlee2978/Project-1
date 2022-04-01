// to continue to fix

document.querySelector('#userGreeting').addEventListener('submit', helloUser)

function helloUser() {
    let user = document.querySelector('#username').value
    // to change from alert to text greeting on page
    alert('hello '+user);
    return false;   // don't submit the form
}