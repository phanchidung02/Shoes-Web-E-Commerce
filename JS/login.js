const account1 = {
    username: 'chidung',
    email: 'phanchidung@gmail.com',
    password: 'hahahaha',
};

const form = document.querySelector('form');
const email = document.getElementById('input-email');
const password = document.getElementById('input-pass');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkValidateForm();
});

email.addEventListener('keyup', (e) => {
    const emailValue = email.value.trim();
    e.preventDefault();
    if (!checkEmailRegex(emailValue)) {
        const errorEmail = document.getElementById('error-email');
        showError(errorEmail, email, 'Vui lòng nhập đúng định dạng email');
        return false;
    } else {
        const errorEmail = document.getElementById('error-email');
        errorEmail.style.display = 'none';
        email.style.border = '2px solid green';
        return true;
    }
});

password.addEventListener('keyup', (e) => {
    const passwordValue = password.value.trim();
    e.preventDefault();
    if (passwordValue.length < 8) {
        const errorPass = document.getElementById('error-pass');
        showError(errorPass, password, 'Vui lòng nhập mật khẩu trên 8 kí tự');
        return false;
    } else {
        const errorPass = document.getElementById('error-pass');
        errorPass.style.display = 'none';
        password.style.border = '2px solid green';
        return true;
    }
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
    } else if (
        emailValue !== account1.email ||
        passwordValue !== account1.password
    ) {
        const errorEmail = document.getElementById('error-email');
        const errorPass = document.getElementById('error-pass');
        alert('Sai tên đăng nhập hoặc mật khẩu');
        showError(errorEmail, email, 'Vui lòng nhập lại email');
        showError(errorPass, password, 'Vui lòng nhập lại mật khẩu');
        return false;
    } else {
        window.location.assign('index.html');
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
