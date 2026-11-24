
// ==============================
// MOBILE SIDEBAR
// ==============================

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

if (menuToggle && sidebar) {

    menuToggle.addEventListener("click", function() {

        sidebar.classList.toggle("show");

    });


    // Close sidebar when clicking outside it

    document.addEventListener("click", function(event) {

        if (
            window.innerWidth <= 750 &&
            !sidebar.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            sidebar.classList.remove("show");

        }

    });

}


// ==============================
// SHOW / HIDE BALANCE
// ==============================

const balanceToggle = document.getElementById("balanceToggle");
const accountBalance = document.getElementById("accountBalance");

const actualBalance = "PKR 125,000.00";

let balanceHidden = false;

if (balanceToggle && accountBalance) {

    balanceToggle.addEventListener("click", function() {

        if (balanceHidden === false) {

            // Hide account balance

            accountBalance.textContent = "PKR ••••••••••";

            balanceToggle.textContent = "Show";

            balanceToggle.setAttribute(
                "aria-label",
                "Show account balance"
            );

            balanceHidden = true;

        }

        else {

            // Show account balance

            accountBalance.textContent = actualBalance;

            balanceToggle.textContent = "Hide";

            balanceToggle.setAttribute(
                "aria-label",
                "Hide account balance"
            );

            balanceHidden = false;

        }

    });

}


// ==============================
// CURRENT DATE
// ==============================

const currentDate = document.getElementById("currentDate");

if (currentDate) {

    const today = new Date();

    currentDate.textContent = today.toLocaleDateString("en-US", {

        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"

    });

}
