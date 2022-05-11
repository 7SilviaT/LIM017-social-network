import { loginWithEmail, signGoogle } from '../lib/authFunctions.js';

const loginDisplay = () => {
  const loginPage = `
  <section class='login-page'>
    <div class='center-box' id='login-div'>
        <h2 class='title-login-register'>ANIME GANG</h2>
        <img src='./pics/nekko-mascot.png' class='logo-user' id='userPic'>
        <p class='login-subtitle'> Inicia sesión</p>
        <div class='loginpage-icon-email-container'>
        <i class="fa-solid fa-at"></i>
        </div>
        <input type='email' id='login-email' class='text-field' name='login-email' placeholder='Correo electrónico'
            required />
        <div class='loginpage-icon-password-container'>
        <i class="fa-solid fa-lock"></i>
        </div>
        <input type='password' id='login-password' class='text-field' name='login-password' placeholder='Contraseña'
            required />
        <p id='emptyInputPass' class='error'></p>
        <button id='loginBtn' class='button-login-orange'><a href='#/news'> Ingresar</a> </button> <br>
        <p class='link-nextpage'><a href='#/register'>¿Eres nuevo por aquí? Registrate ahora</a></p>
        <div class="line-google"><span> o </span></div>
        <div class='login-page__form-google'>
            <button class='button-login-orange' id= 'loginGoogle'>Ingresa con tu cuenta
                <img src='./pics/google-icon.png' class='logo-google' id='googleImgLogIn'>
            </button>
        </div>
    </div>
    </div>
</section>
`;
  const divElement = document.createElement('div');
  divElement.innerHTML = loginPage;

  divElement.querySelector('#loginBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const loginEmailValue = document.getElementById('login-email').value;
    const loginPasswordValue = document.getElementById('login-password').value;
    loginWithEmail(loginEmailValue, loginPasswordValue)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user;
        window.location.href = '#/news';
        console.log(user);
      // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        alert('correo regristrado');
        console.log(errorMessage);
      });
  });

  divElement.querySelector('#loginGoogle').addEventListener('click', () => {
    signGoogle() // agregar dirección de pag luego de googlearse
      .then(() => {
        window.location.href = '#/news';
      });
  });
  return divElement;
};
export default loginDisplay;
