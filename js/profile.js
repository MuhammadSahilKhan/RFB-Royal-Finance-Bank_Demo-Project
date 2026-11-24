
// ==============================
// PROFILE FORM
// ==============================

const profileForm = document.getElementById("profileForm");

const editProfileBtn = document.getElementById("editProfileBtn");

const cancelEditBtn = document.getElementById("cancelEditBtn");

const profileActions = document.getElementById("profileActions");

const profileMessage = document.getElementById("profileMessage");

const profileFields = profileForm.querySelectorAll("input, textarea");


// Names displayed in other sections

const profileDisplayName = document.getElementById("profileDisplayName");

const topbarCustomerName = document.getElementById("topbarCustomerName");

const accountHolderName = document.getElementById("accountHolderName");


// Store original values

let originalProfile = {};


// ==============================
// EDIT PROFILE
// ==============================

editProfileBtn.addEventListener("click", function() {

    originalProfile = {};

    profileFields.forEach(function(field) {

        originalProfile[field.id] = field.value;

        field.readOnly = false;

    });

    profileActions.style.display = "flex";

    editProfileBtn.style.display = "none";

    profileMessage.style.display = "none";

});


// ==============================
// SAVE PROFILE
// ==============================

profileForm.addEventListener("submit", function(event) {

    event.preventDefault();

    if (!profileForm.checkValidity()) {

        profileForm.reportValidity();

        return;

    }

    // Make fields read-only again

    profileFields.forEach(function(field) {

        field.readOnly = true;

    });


    // Get updated name

    const updatedName = document.getElementById("fullName").value.trim();


    // Update name everywhere

    profileDisplayName.textContent = updatedName;

    topbarCustomerName.textContent = updatedName;

    accountHolderName.textContent = updatedName;


    // Hide editing buttons

    profileActions.style.display = "none";

    editProfileBtn.style.display = "block";


    // Show success message

    profileMessage.className = "deposit-message success";

    profileMessage.textContent =
        "Your profile information has been updated successfully. This is a demonstration; changes are not permanently saved.";

});


// ==============================
// CANCEL EDITING
// ==============================

cancelEditBtn.addEventListener("click", function() {

    // Restore original form values

    profileFields.forEach(function(field) {

        field.value = originalProfile[field.id];

        field.readOnly = true;

    });


    // Hide editing buttons

    profileActions.style.display = "none";

    editProfileBtn.style.display = "block";

    profileMessage.style.display = "none";

});
