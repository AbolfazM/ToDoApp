const userNameInput = document.querySelector('.username');
const passwordInput = document.querySelector('.password');
const userError = document.querySelector('.userError');
const passError = document.querySelector('.passError');
const login = document.querySelector('.login');

login.addEventListener('click', () => {

    if (userNameInput.value === '') {
        userNameError();
    }
    if (userNameInput.value.length <= 8) {
        userNameError();
    } else {
        userNameCorrect();
    }


    if (passwordInput.value === '') {
        passwordError();
    }
    if (passwordInput.value.length <= 8) {
        passwordError();
    } else {
        passwordCorrect();
    }
});

const userNameError = () => {
    userNameInput.style.color = 'red';
    userError.style.display = 'block';
}
const userNameCorrect = () => {
    userNameInput.style.color = 'green';
    userError.style.display = 'none';
}


const passwordError = () => {
    passwordInput.style.color = 'red';
    passError.style.display = 'block';
}
const passwordCorrect = () => {
    passwordInput.style.color = 'green';
    passError.style.display = 'none';
}