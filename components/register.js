import { registerWithEmail, sendEmailVerificationFirebase, signGoogle } from '../lib/functionsController.js';

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
        <p id='emptyInputName' class='errorInput'></p>
        <div class='icon-email-container'>
        <i class="fa-solid fa-at"></i>
        </div>
        <input type='email' id='inputEmail' class='text-field' placeholder='Correo electrónico' required>
        <p id='errorEmail' class='errorInput'></p>
        <div class='icon-password-container'>
        <i class="fa-solid fa-lock"></i>
        </div>
        <input type='password' id='inputPassword' class='text-field' placeholder='Contraseña' required>
        <p id='passError' class='errorInput'></p>
        <p class='error'></p>
        <button id='btnRegister' class='button-login-orange'>Registrate ahora</button>
        <p class='link-nextpage'><a href='#/login'>¿Ya tienes una cuenta? Iniciar Sesión</a></p>
        <div class="line-google"><span> o </span></div>
        <div class='login-page__form-google'>
            <button class='button-login-orange' id= 'loginGoogle'>Ingresa con tu cuenta
                <img src='./pics/google-icon.png' class='logo-google' id='googleImgLogIn'>
            </button>
        </div>
        </div>
</section>
`;

  const divElement = document.createElement('div');
  divElement.innerHTML = registerPage;

  divElement.querySelector('#btnRegister').addEventListener('click', () => {
    const userValue = document.getElementById('inputName').value;
    const registerEmailValue = document.getElementById('inputEmail').value;
    const registerPasswordValue = document.getElementById('inputPassword').value;
    console.log(userValue, registerEmailValue, registerPasswordValue);
    registerWithEmail(registerEmailValue, registerPasswordValue)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user;
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
        const wrongInput = divElement.querySelector('.error');
        switch (errorCode) {
          case '':
            wrongInput.innerText = 'Campo vacío.Ingrese su email';
            break;
          case 'auth/invalid-email':
            wrongInput.innerText = 'Correo inválido';
            break;
          case 'auth/email-already-in-use':
            wrongInput.innerText = 'Correo ya registrado';
            break;
          case 'auth/weak-password':
            wrongInput.innerText = 'Contraseña debe contener mínimo 6 dígitos';
            break;
          default:
        }
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  });

  // Funcion para que el usuario pueda cerrar sesión

  divElement.querySelector('#loginGoogle').addEventListener('click', () => {
    signGoogle() // agregar dirección de pag luego de googlearse
      .then(() => {
        window.location.href = '#/news';
      });
  });
  return divElement;
};
export default registerDisplay;
