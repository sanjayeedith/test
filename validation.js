const form = document.getElementById('formVal');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const jobTitle = document.getElementById('jobTitle');
const company = document.getElementById('company');
const email = document.getElementById('email');
const number = document.getElementById('number');
const textMessage = document.getElementById('textMessage');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
};
const isValidEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validatePhoneNumber = number => {
    const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(String(number));
}

const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const jobTitleValue = jobTitle.value.trim();
    const companyValue = company.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();
    const textMessageValue = textMessage.value.trim();

    if (firstNameValue === '') {
        setError(firstName, 'Enter your First Name');
    } else {
        setSuccess(firstName);
    }

    if (lastNameValue === '') {
        setError(lastName, 'Enter your Last Name');
    } else {
        setSuccess(lastName);
    }
    if (jobTitleValue === '') {
        setError(jobTitle, 'Enter your Job Title');
    } else {
        setSuccess(jobTitle);
    }
    if (companyValue === '') {
        setError(company, 'Enter your Company');
    } else {
        setSuccess(company);
    }
    if (emailValue === '') {
        setError(email, 'Enter your Email Address');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Please provide a Valid Email Address');
    } else {
        setSuccess(email);
    }
    if (numberValue === '') {
        setError(number, 'Enter your Phone Number');
    } else if (!validatePhoneNumber(numberValue)) {
        setError(number, 'Please Enter Valid Number');
    } else {
        setSuccess(number);
    }
    if (textMessageValue === '') {
        setError(textMessage, 'Enter your Message');
    } else {
        setSuccess(textMessage);
    }
};