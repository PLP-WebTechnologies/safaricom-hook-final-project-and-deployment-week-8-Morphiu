// Styling for tabs in skills and experience section
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Sidemenu for small devices

var sidemen = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "250px";
}
function closemenu() {
    sidemenu.style.right = "-250px";
}

// Function for form

const frm = document.getElementById('form');
frm.addEventListener(submit, function (event) {
    event.preventDefault();
    let Valid = 'true';
    
    // Email validation
    const eml = document.getElementById('email');
    const emlError = document.getElementById('email-error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //text@text.domain

    if (!emailPattern.test(eml.value.trim())) {
        emlError.textContent = "Enter a valid email address.";
        Valid = false;
    } else {
        emlError.textContent = '';
    }

    if(Valid){
        alert('Message Submitted Successfully');
        frm.reset;
    }

})