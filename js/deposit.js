
// ==============================
// DEPOSIT MONEY FORM
// ==============================

const depositForm = document.getElementById("depositForm");

const depositAmount = document.getElementById("depositAmount");

const depositMethod = document.getElementById("depositMethod");

const depositNote = document.getElementById("depositNote");

const depositMessage = document.getElementById("depositMessage");


if (depositForm) {

    depositForm.addEventListener("submit", function(event) {

        // Prevent page from refreshing
        event.preventDefault();

        const amount = Number(depositAmount.value);

        const method = depositMethod.value;

        const note = depositNote.value;


        // Check deposit amount
        if (!Number.isFinite(amount) || amount <= 0) {

            depositMessage.className = "deposit-message error";

            depositMessage.textContent =
                "Please enter a valid deposit amount.";

            return;

        }


        // Check deposit method
        if (method === "") {

            depositMessage.className = "deposit-message error";

            depositMessage.textContent =
                "Please select a deposit method.";

            return;

        }


        // Show demonstration message
        depositMessage.className = "deposit-message success";

        depositMessage.innerHTML = `
            <strong>Deposit Request Submitted!</strong><br>
            Amount: PKR ${amount.toLocaleString("en-PK")}<br>
            Method: ${method}<br>
            ${note ? "Description: " + note + "<br>" : ""}
            <br>
            This is a frontend demonstration. No actual money
            has been deposited.
        `;


        // Clear form
        depositForm.reset();

    });

}
