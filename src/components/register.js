import { registerWithEmail, sendEmailVerificationFirebase } from '../lib/authFunctions.js';

const registerDisplay = () => {
  const registerPage = `
  <section class=' register-page'>
    <div class='register-page-container'>
        <h2 class='title-login-register'>ANIME GANG</h2>
        <img src='./pics/nekko-mascot.png' class='logo-user' id='userPic'> <br>
        <p class='login-subtitle'> Registra tus datos </p>
        <div class='icon-container'>
          <i class="fa-solid fa-user"></i>
        </div>
        <input type='text' id='inputName' class='text-field' placeholder='Nombre'>
        <p id='emptyInputName' class='error'></p>
        
        <div class='icon-email-container'>
        <i class="fa-solid fa-at"></i>
        </div>
        <input type='email' id='inputEmail' class='text-field' placeholder='Correo electrónico' required>
        <p id='errorEmail' class='error'></p>
        
        <div class='icon-password-container'>
        <i class="fa-solid fa-lock"></i>
        </div>
        <input type='password' id='inputPassword' class='text-field' placeholder='Contraseña' required>
        <p id='passError' class='error'></p>
        
        <button id='btnRegister' class='button-login-orange'>Registrate ahora</button>
        <p class='link-nextpage'><a href='#/login'>¿Ya tienes una cuenta? Iniciar Sesión</a></p>
        <div class="line-google"><span> o </span></div>
        <div class='login-page__form-google'>
            <button class='button-login-orange'>Ingresa con tu cuenta
                <img src='./pics/google-icon.png' class='logo-google' id='googleImgLogIn'>
            </button>
        </div>
        </divZ>
</section>
`;

  const divElement = document.createElement('div');
  divElement.innerHTML = registerPage;

  // const signUpForm=
  divElement.querySelectorAll('#btnRegister').addEventListener('click', (e) => {
    e.preventDefault();
    const userValue = document.getElementById('inputName').value;
    const registerEmailValue = document.getElementById('inputEmail').value;
    const registerPasswordValue = document.getElementById('inputPassword').value;
    console.log(userValue, registerEmailValue, registerPasswordValue);
    registerWithEmail(registerEmailValue, registerPasswordValue)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user;
        console.log(user);
        return user;
      })
      .then((user) => {
        console.log(user);
        sendEmailVerificationFirebase();
        // eslint-disable-next-line no-alert
        alert('Ya se envio tu correo de verificación');
        window.location.href = '#/login';
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      // ..
      });
    // return signUpForm;
  });
  return divElement;
};
export default registerDisplay;
console.log(registerDisplay);
