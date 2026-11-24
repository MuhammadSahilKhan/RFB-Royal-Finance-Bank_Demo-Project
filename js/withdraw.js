
// ==============================
// WITHDRAW MONEY FORM
// ==============================

const withdrawForm = document.getElementById("withdrawForm");

const withdrawAmount = document.getElementById("withdrawAmount");

const withdrawMethod = document.getElementById("withdrawMethod");

const withdrawNote = document.getElementById("withdrawNote");

const withdrawMessage = document.getElementById("withdrawMessage");


// Sample account balance

const availableBalance = 125000;


if (withdrawForm) {

    withdrawForm.addEventListener("submit", function(event) {

        // Prevent page from refreshing

        event.preventDefault();


        const amount = Number(withdrawAmount.value);

        const method = withdrawMethod.value;

        const note = withdrawNote.value;


        // Check withdrawal amount

        if (!Number.isFinite(amount) || amount <= 0) {

            withdrawMessage.className = "deposit-message error";

            withdrawMessage.textContent =
                "Please enter a valid withdrawal amount.";

            return;

        }


        // Check available balance

        if (amount > availableBalance) {

            withdrawMessage.className = "deposit-message error";

            withdrawMessage.textContent =
                "Insufficient balance! Your available balance is PKR 125,000.00.";

            return;

        }


        // Check withdrawal method

        if (method === "") {

            withdrawMessage.className = "deposit-message error";

            withdrawMessage.textContent =
                "Please select a withdrawal method.";

            return;

        }


        // Show demonstration message

        withdrawMessage.className = "deposit-message success";

        withdrawMessage.innerHTML = `
            <strong>Withdrawal Request Submitted!</strong><br>
            Amount: PKR ${amount.toLocaleString("en-PK")}<br>
            Method: ${method}<br>
            ${note ? "Description: " + note + "<br>" : ""}
            <br>
            This is a frontend demonstration.
            No actual money has been withdrawn.
        `;


        // Clear form

        withdrawForm.reset();

    });

}
