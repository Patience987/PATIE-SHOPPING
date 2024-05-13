// signup.js
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Create a new user in the localStorage database
    createUser(username, email, password);

    // Redirect to sign-in page or any other page
    window.location.href = "signin.html";
});

function createUser(username, email, password) {
    // Generate a unique ID for the user
    const userId = email;

    // Create an object representing the user
    const user = {
        id: userId,
        username: username,
        email: email,
        password: password
    };

    // Store the user object in localStorage
    localStorage.setItem(userId, JSON.stringify(user));
}