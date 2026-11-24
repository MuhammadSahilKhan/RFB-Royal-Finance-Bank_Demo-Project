
// ==============================
// PASSWORD SHOW / HIDE
// ==============================

const passwordButtons = document.querySelectorAll(".toggle-password");

passwordButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const passwordId = button.getAttribute("data-password")
            || "password";

        const passwordField = document.getElementById(passwordId);

        if (passwordField.type === "password") {

            passwordField.type = "text";
            button.textContent = "Hide";

        } else {

            passwordField.type = "password";
            button.textContent = "Show";

        }

    });

});


// ==============================
// LOGIN FORM
// ==============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const formMessage = document.getElementById("formMessage");

        formMessage.textContent =
            "Login interface is ready. Backend authentication will be connected later.";

        formMessage.className = "form-message";

    });

}


// ==============================
// REGISTRATION FORM
// ==============================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const password = document.getElementById("registerPassword").value;

        const confirmPassword = document.getElementById("confirmPassword").value;

        const registerMessage = document.getElementById("registerMessage");


        if (password !== confirmPassword) {

            registerMessage.textContent = "Passwords do not match.";
            registerMessage.className = "form-message error";

            return;

        }


        registerMessage.textContent =
            "Registration interface is ready. Backend connection will be added later.";

        registerMessage.className = "form-message";

    });

}
