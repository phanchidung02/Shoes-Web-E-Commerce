const form = document.querySelector('form');
const email = document.getElementById('input-email');
const password = document.getElementById('input-pass');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkValidateForm();
});

const checkValidateForm = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === '' && passwordValue === '') {
        const errorEmail = document.getElementById('error-email');
        const errorPass = document.getElementById('error-pass');
        showError(errorEmail, email, 'Vui lòng nhập email');
        showError(errorPass, password, 'Vui lòng nhập mật khẩu');
        return false;
    } else if (!checkEmailRegex(emailValue)) {
        const errorEmail = document.getElementById('error-email');
        showError(errorEmail, email, '');
        return false;
    } else if (passwordValue.length < 8) {
        const errorPass = document.getElementById('error-pass');
        showError(errorPass, password, 'Mật khẩu dưới 8 kí tự');
        return false;
    } else {
        const errorPass = document.getElementById('error-pass');
        const errorEmail = document.getElementById('error-email');
        errorPass.style.display = 'none';
        password.style.border = '2px solid green';
        errorEmail.style.display = 'none';
        email.style.border = '2px solid green';
    }
};

const showError = (errorCheck, email, message) => {
    errorCheck.textContent = message;
    errorCheck.style.color = 'red';
    errorCheck.style.display = 'block';
    email.style.border = '2px solid red';
};

const checkEmailRegex = (email) => {
    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return String(email).toLowerCase().match(re);
};
