const homeDisplay = () => {
  const homePage = `
  <section id="welcomePage">

  <div class="home-container">
  <div class="title-home">
  <h1 class="welcome-title">ANIME GANG</h1>
  <img src="./pics/flower.png" alt="flowerInPage" class="flower-title">
  </div>
  <div class="intro-box" >
  Se parte de nuestra comunidad de amantes de la animación japonesa,comparte tus experiencias 
  y recomendaciones de tus animes favoritos.
  </div>
  <button id="btnJoinUs"class="buttonhomeorange"><a href="#/login">Únete</a></button>
  </div>
  </section>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = homePage;
  return divElement;
};
export default homeDisplay;
