
// =====================================
// ADMIN DASHBOARD JAVASCRIPT
// =====================================


// Display current date

const adminCurrentDate = document.getElementById("adminCurrentDate");

const today = new Date();

adminCurrentDate.textContent = today.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
});


// Mobile sidebar

const adminMenuToggle = document.getElementById("adminMenuToggle");
const adminSidebar = document.getElementById("adminSidebar");

adminMenuToggle.addEventListener("click", function () {

    adminSidebar.classList.toggle("show");

});


// Customer search and status filter

const customerSearch = document.getElementById("customerSearch");
const customerStatusFilter = document.getElementById("customerStatusFilter");

const customerTableBody = document.getElementById("customerTableBody");
const noCustomersMessage = document.getElementById("noCustomersMessage");

function filterCustomers() {

    const searchValue = customerSearch.value.toLowerCase();
    const statusValue = customerStatusFilter.value;

    const rows = customerTableBody.querySelectorAll("tr");

    let visibleRows = 0;

    rows.forEach(function (row) {

        const rowText = row.textContent.toLowerCase();

        const status = row.cells[4].textContent.trim();

        const matchesSearch = rowText.includes(searchValue);

        const matchesStatus =
            statusValue === "all" || status === statusValue;

        if (matchesSearch && matchesStatus) {

            row.style.display = "";
            visibleRows++;

        } else {

            row.style.display = "none";

        }

    });

    if (visibleRows === 0) {
        noCustomersMessage.style.display = "block";
    } else {
        noCustomersMessage.style.display = "none";
    }

}


// Search event

customerSearch.addEventListener("input", filterCustomers);


// Status filter event

customerStatusFilter.addEventListener("change", filterCustomers);
