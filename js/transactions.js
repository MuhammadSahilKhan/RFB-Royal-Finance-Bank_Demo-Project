
// ==============================
// SAMPLE TRANSACTION DATA
// ==============================

const transactions = [

    {
        id: "RFB1001",
        date: "2026-11-20",
        description: "Money deposited",
        type: "deposit",
        amount: 15000,
        status: "Completed"
    },

    {
        id: "RFB1002",
        date: "2026-11-19",
        description: "ATM cash withdrawal",
        type: "withdrawal",
        amount: 5000,
        status: "Completed"
    },

    {
        id: "RFB1003",
        date: "2026-11-18",
        description: "Transfer to another account",
        type: "transfer",
        amount: 8000,
        status: "Completed"
    },

    {
        id: "RFB1004",
        date: "2026-11-16",
        description: "Money deposited",
        type: "deposit",
        amount: 25000,
        status: "Completed"
    },

    {
        id: "RFB1005",
        date: "2026-11-14",
        description: "Online cash withdrawal",
        type: "withdrawal",
        amount: 3000,
        status: "Completed"
    },

    {
        id: "RFB1006",
        date: "2026-11-12",
        description: "Transfer to another account",
        type: "transfer",
        amount: 12000,
        status: "Completed"
    }

];


// ==============================
// GET HTML ELEMENTS
// ==============================

const transactionTableBody =
    document.getElementById("transactionTableBody");

const searchTransaction =
    document.getElementById("searchTransaction");

const typeFilter =
    document.getElementById("typeFilter");

const resetFilters =
    document.getElementById("resetFilters");

const noTransactions =
    document.getElementById("noTransactions");


// ==============================
// DISPLAY TRANSACTIONS
// ==============================

function displayTransactions(data) {

    transactionTableBody.innerHTML = "";

    if (data.length === 0) {

        noTransactions.style.display = "block";

        return;

    }

    noTransactions.style.display = "none";


    data.forEach(function(transaction) {

        const row = document.createElement("tr");

        let amountClass = "";

        let amountSign = "+";


        if (transaction.type === "deposit") {

            amountClass = "amount-credit";

        }
        else {

            amountClass = "amount-debit";

            amountSign = "-";

        }


        row.innerHTML = `

            <td>${transaction.id}</td>

            <td>${transaction.date}</td>

            <td>${transaction.description}</td>

            <td>
                <span class="transaction-type ${transaction.type}">
                    ${transaction.type}
                </span>
            </td>

            <td class="${amountClass}">
                ${amountSign} PKR ${transaction.amount.toLocaleString("en-PK")}
            </td>

            <td>
                <span class="transaction-status">
                    ${transaction.status}
                </span>
            </td>

        `;

        transactionTableBody.appendChild(row);

    });

}


// ==============================
// SEARCH AND FILTER
// ==============================

function filterTransactions() {

    const searchValue =
        searchTransaction.value.toLowerCase();

    const selectedType =
        typeFilter.value;


    const filteredTransactions = transactions.filter(function(transaction) {

        const matchesSearch =
            transaction.id.toLowerCase().includes(searchValue) ||
            transaction.description.toLowerCase().includes(searchValue) ||
            transaction.date.includes(searchValue);

        const matchesType =
            selectedType === "all" ||
            transaction.type === selectedType;

        return matchesSearch && matchesType;

    });


    displayTransactions(filteredTransactions);

}


// ==============================
// EVENT LISTENERS
// ==============================

searchTransaction.addEventListener("input", filterTransactions);

typeFilter.addEventListener("change", filterTransactions);


resetFilters.addEventListener("click", function() {

    searchTransaction.value = "";

    typeFilter.value = "all";

    displayTransactions(transactions);

});


// ==============================
// INITIAL DISPLAY
// ==============================

displayTransactions(transactions);
