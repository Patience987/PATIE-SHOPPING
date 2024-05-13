// signin.js
document.getElementById("signin-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Retrieve the user from the localStorage database
    const user = getUserByEmail(email);

    if (user && user.password === password) {
        // Authentication successful, redirect to home page or dashboard
        alert("Authentication successful!");
        // Redirect to home page or dashboard
        window.location.href = "dasboard.html";
    } else {
        // Authentication failed, show error message
        alert("Authentication failed. Please check your email and password.");
    }
});

function getUserByEmail(email) {
    // Retrieve the user object from localStorage
    const userJson = localStorage.getItem(email);

    // Parse the JSON string into an object
    return JSON.parse(userJson);
}