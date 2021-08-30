function ValidateEmail() {
    var mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    element = document.getElementById('emailinput');
    if (element.value.match(mailformat)) {
        element.classList.remove("service_form_error");
    } else {
        if (element.classList.contains("service_form_error")) {} else {
            element.className += " service_form_error";
        }
    }
};

function ValidatePhone() {
    var phoneformat = /\+[0-9]{3}-[0-9]{2}-[0-9]{7}/;
    element = document.getElementById('phoneinput');
    if (element.value.match(phoneformat)) {
        element.classList.remove("service_form_error");
    } else {
        if (element.classList.contains("service_form_error")) {} else {
            element.className += " service_form_error";
        }
    }
};

function ValidateSelect() {
    // var phoneformat = /\+[0-9]{3}-[0-9]{2}-[0-9]{7}/;
    element = document.getElementById('serviceinput');
    if (element.value != 0) {
        element.classList.remove("service_form_error");
    }
    else {
        if (element.classList.contains("service_form_error")) {} else {
            element.className += " service_form_error";
        }
    }
};

function ValidateName() {
    var nameformat = /^[а-яА-ЯёЁa-zA-Z]+$/;
    element = document.getElementById('nameinput');
    if (element.value.match(nameformat)) {
        element.classList.remove("service_form_error");
    }
    else {
        if (element.classList.contains("service_form_error")) {} else {
            element.className += " service_form_error";
        }
    }
};