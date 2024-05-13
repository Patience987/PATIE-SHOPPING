// dashboard.js
$(document).ready(function() {
    // Fetch user data from localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));

    // Populate user information on the dashboard
    if (userData) {
        $("#username").text(userData.username);
        $("#email").text(userData.email);
    }

    // Add event listener for logout button
    $("#logout-btn").click(function() {
        // Clear user data from localStorage
        localStorage.removeItem("userData");

        // Redirect to sign-in page
        window.location.href = "signin.html";
    });

    // Add event listener for edit profile button
    $("#edit-profile-btn").click(function() {
        // Redirect to edit profile page
        alert("Edit profile feature is not available yet.");
        // window.location.href = "edit-profile.html";
    });

    // Add event listener for change password button
    $("#change-password-btn").click(function() {
        // Redirect to change password page
        alert("Change password feature is not available yet.");
        // window.location.href = "change-password.html";
    });
});