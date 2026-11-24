
// ==============================
// TRANSFER FUNDS FORM
// ==============================

const transferForm = document.getElementById("transferForm");

const recipientName = document.getElementById("recipientName");

const recipientAccount = document.getElementById("recipientAccount");

const transferAmount = document.getElementById("transferAmount");

const transferNote = document.getElementById("transferNote");

const transferMessage = document.getElementById("transferMessage");


// Sample account balance

const availableBalance = 125000;


if (transferForm) {

    transferForm.addEventListener("submit", function(event) {

        // Prevent page from refreshing

        event.preventDefault();


        const name = recipientName.value.trim();

        const account = recipientAccount.value.trim();

        const amount = Number(transferAmount.value);

        const note = transferNote.value.trim();


        // Check recipient name

        if (name === "") {

            showTransferError("Please enter the recipient's name.");

            return;

        }


        // Check account number

        if (account === "") {

            showTransferError("Please enter the recipient's account number.");

            return;

        }


        // Prevent transferring to the same account

        if (account === "4582") {

            showTransferError("You cannot transfer money to your own account.");

            return;

        }


        // Check transfer amount

        if (!Number.isFinite(amount) || amount <= 0) {

            showTransferError("Please enter a valid transfer amount.");

            return;

        }


        // Check available balance

        if (amount > availableBalance) {

            showTransferError(
                "Insufficient balance! Your available balance is PKR 125,000.00."
            );

            return;

        }


        // Show demonstration message

        transferMessage.className = "deposit-message success";

        transferMessage.textContent =
            "Transfer request submitted! PKR " +
            amount.toLocaleString("en-PK") +
            " to " + name +
            ". This is a frontend demonstration. No actual money has been transferred.";


        // Clear form

        transferForm.reset();

    });

}


// ==============================
// DISPLAY ERROR MESSAGE
// ==============================

function showTransferError(message) {

    transferMessage.className = "deposit-message error";

    transferMessage.textContent = message;

}
