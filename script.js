var logInOut = document.querySelector("#log-In-Out-Button");

function logIn(element) {
    if (logInOut.innerText == "Login") {
        logInOut.innerText = "Logout";
    } else {
        logInOut.innerText = "Login";
    }
}

// function alert(element) {
//     alert("Ninja was liked");
// }

function removeDefinition(element) {
    element.remove();
}