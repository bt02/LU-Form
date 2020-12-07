const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const degreeType = document.getElementById("degree-select");
const major = document.getElementById("major-select");
const email = document.getElementById("email");
const number = document.getElementById("Telephone");
const address = document.getElementById("address-input");

const streetAddress = document.getElementById("street-address");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zip = document.getElementById("zip");

const hiddenContainer = document.getElementById('hidden-container');
const addressTable = document.getElementById("address-table");
const small = document.getElementsByClassName("small-hidden");
const smallVisible = document.getElementById("small-visible");

//form
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const degreeTypeValue = degreeType.value;
    const majorValue = major.value;
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();
    const addressValue = address.value.trim();
    const streetValue = streetAddress.value.trim()
    const cityValue = city.value.trim()
    const stateValue = state.value
    const zipValue = zip.value.trim()




    // first name
    if(firstNameValue === "") {
        setErrorFor(firstName, 'First name cannot be blank');
    }else {
        setSuccessFor(firstName)
    }

    //last name
    if(lastNameValue === "") {
        setErrorFor(lastName, 'Last name cannot be blank');
    }else {
        setSuccessFor(lastName)
    }

    // degree type
    if(degreeTypeValue == 'Select') {
        setErrorFor(degreeType, 'Select a degree type');
    }else {
        setSuccessFor(degreeType)
    }

    // major
    if(majorValue == 'Select degree type above') {
        setErrorFor(major, 'Select a major')
    }else {
        setSuccessFor(major)
    }

    // email
    if(emailValue == "") {
        setErrorFor(email, 'Email cannot be blank')
    }else if(!isEmail(email.value)) {
        setErrorFor(email, 'Email is not valid')
    }else{
        setSuccessFor(email)
    }

    // number
    if(numberValue == "") {
        setErrorFor(number, 'Number cannot be blank')
    }else if(!isNumber(numberValue)) {
        setErrorFor(number, 'Enter number a valid number')
    }else {
        setSuccessFor(number)
    }

    // address
    if(getComputedStyle(address).visibility =="visible") {
        if (addressValue == "") {
            setErrorFor(address, 'Address cannot be blank')
        }else {
            setSuccessFor(address)
        }
    }

    // street address
    if(getComputedStyle(streetAddress).visibility == "visible") {
        if(streetValue == "") {
            setErrorFor(streetAddress, 'Street address cannot be blank')
        }else{
            setSuccessFor(streetAddress)
        }
    }

    // city
    if(getComputedStyle(city).visibility == "visible") {
        if (cityValue == "") {
            setErrorFor(city, 'City address cannot be blank')
        }else {
            setSuccessFor(city)
        }
    }

    // state/province
    if(getComputedStyle(state).visibility == "visible") {
        if (stateValue == "Select") {
            setErrorFor(state, 'Please select an option')
        }else {
            setSuccessFor(state)
        }
    }

    // zip/postal code
    if(getComputedStyle(zip).visibility == "visible") {
        if (zipValue == "") {
            setErrorFor(zip, 'Zip code cannot be blank')
        } else {
            setSuccessFor(zip)
        }
    }
}
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function selectUnlock(){
    const degreeTypeValue = degreeType.value
    if(degreeTypeValue != "Select"){
        major.disabled= false
    }else {
        major.disabled = true
        document.getElementById('comms').style.visibility = "visible"
    }
}
function isEmail(email) {
    return  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}
function isNumber(number) {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(number)
}

// autofill address
function activatePlacesSearch() {
    var input = document.getElementById("address-input")
    var autocomplete = new google.maps.places.Autocomplete(input)
}

// expand window on address button click
function addFields() {
    address.style.visibility = 'hidden'
    addressTable.style.visibility= 'hidden'

    address.style.position='absolute'
    addressTable.style.position = 'absolute'

    hiddenContainer.style.visibility = 'visible'
    hiddenContainer.style.position = 'relative'

    smallVisible.style.visibility = 'hidden'
    smallVisible.style.position = 'absolute'
}

// collapses window on switch to automated search button
function hideFields() {
    address.style.visibility = 'visible'
    addressTable.style.visibility = 'visible'

    address.style.position='relative'
    addressTable.style.position = 'relative'

    hiddenContainer.style.visibility = 'hidden'
    hiddenContainer.style.position = 'absolute'

    for(var i=0; i < small.length; i++){
        small[i].style.visibility = 'hidden'
        small[i].style.position = 'absolute'
    }
}




















