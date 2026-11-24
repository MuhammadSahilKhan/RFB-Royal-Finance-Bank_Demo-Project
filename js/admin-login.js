
// Show and hide admin password

const adminPassword = document.getElementById("adminPassword");
const toggleAdminPassword = document.getElementById("toggleAdminPassword");

toggleAdminPassword.addEventListener("click", function () {

    if (adminPassword.type === "password") {
        adminPassword.type = "text";
        toggleAdminPassword.textContent = "Hide";
    }
    else {
        adminPassword.type = "password";
        toggleAdminPassword.textContent = "Show";
    }

});


// Admin login demo

const adminLoginForm = document.getElementById("adminLoginForm");
const adminLoginMessage = document.getElementById("adminLoginMessage");

adminLoginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("adminEmail").value.trim();
    const password = adminPassword.value;

    if (email === "" || password === "") {
        adminLoginMessage.style.color = "red";
        adminLoginMessage.textContent = "Please enter your email and password.";
        return;
    }

    adminLoginMessage.style.color = "green";
    adminLoginMessage.textContent = "Login form submitted successfully.";

    // Demo only: authentication will be implemented with Flask later.

});
