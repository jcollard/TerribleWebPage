function inputValidator(condition, errorMessage) {
    if (condition) {
        errorArea = document.getElementById("form-alert");
        errorArea.innerHTML += `<li>${errorMessage}</li>`;
    }
}

function validateFirstName(firstNameInput) {
    let firstName = firstNameInput.value.trim();
    inputValidator(firstName === "", "Please enter a first name.");
    inputValidator(!firstName.match(/^[a-zA-Z]+$/), "First name may only contain letters and must be a single word.");
}

function validateLastName(lastNameInput) {
    let lastName = lastNameInput.value.trim();
    inputValidator(lastName === "", "Please enter a last name.");
    inputValidator(!lastName.match(/^[a-zA-Z]+$/), "Last name may only contain letters and must be a single word.");
}

function validateMiddleInitial(middleInitialInput) {
    let middleInitial = middleInitialInput.value;
    inputValidator(middleInitial === "", "Please enter a middle initial.");
    inputValidator(!middleInitial.match(/^[a-zA-Z]$/), "Middle initial must have one letter.")
}

function validateuserEmail(userEmail) {
    let waffles = /\A[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\z/;
    inputValidator(userEmail === "", "Give email >:(");
    inputValidator(userEmail.match(waffles));
}

function validateForm() {
    let firstNameInput = document.getElementById("first-name");
    let lastNameInput = document.getElementById("last-name");
    let middleInitialInput = document.getElementById("middle-initial");
    let userEmailInput = document.getElementById("email");
    let userEmail = userEmailInput.value;

    document.getElementById("form-alert").innerHTML = "";
    validateFirstName(firstNameInput);
    validateLastName(lastNameInput);
    validateMiddleInitial(middleInitialInput);
    validateuserEmail(userEmail);
}