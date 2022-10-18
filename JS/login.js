const loadingLoginPage = () => {
    const main = document.querySelector('.center-content');
    const btnLogin = document.querySelector('#btn-loading');
    btnLogin.addEventListener('click', () => {
        main.innerHTML = `<div class="form-login">
        <form action="#" id="loading">
            <div class="logo-nike-login"></div>
            <h1 class="title-form-login">
                YOUR ACCOUNT <br />
                FOR EVERYTHING NIKE
            </h1>
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <p class="login-note">
                By logging in, you agree to Nike's
                <a href="#">Privacy Policy </a>and
                <a href="#">Terms of Use.</a>
            </p>
            <button class="btn-login"><a href="#">Sign in</a></button>
        </form>
        </div>`;
    });
};

document.addEventListener('DOMContentLoaded', loadingLoginPage);
