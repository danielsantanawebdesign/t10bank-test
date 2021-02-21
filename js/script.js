// Portfólio Card animation
function initCardsPortfolio() {
  const portfolioCards = document.querySelectorAll('.portfolio-work');

  function showCardLinks(event) {
    const pinkBackground = this.querySelector('.portfolio-card-background');
    const worksLink = this.querySelector('.portfolio-work a');

    worksLink.classList.add('active');
    pinkBackground.classList.add('active');
  }

  function hideCardLinks(event) {
    const pinkBackground = this.querySelector('.portfolio-card-background');
    const worksLink = this.querySelector('.portfolio-work a');

    worksLink.classList.remove('active');
    pinkBackground.classList.remove('active');
  }

  portfolioCards.forEach((item) => {
    item.addEventListener('mouseover', showCardLinks);
    item.addEventListener('mouseout', hideCardLinks);
  });
}
initCardsPortfolio();

// Smooth Scroll
function scrollSuave() {
  const linksInternos = document.querySelectorAll('.menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const headerTop = 200;
    const topo = section.offsetTop - headerTop;

    // Forma Alternativa
    window.scrollTo({
      top: topo,
      behavior: 'smooth',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
scrollSuave();

// Menu Mobile animation
function whatTheMenu() {
  const menuMobile = document.querySelector('.header-mobile .menu');
  const btnMenu = document.querySelector('.btn-menu');
  const links = document.querySelectorAll('.header-mobile .menu ul li a');

  function showMenuMobile(event) {
    if (event.currentTarget) {
      menuMobile.classList.toggle('active');
      console.log(event.currentTarget);
    }
  }

  btnMenu.addEventListener('click', showMenuMobile);
  links.forEach((item) => {
    item.addEventListener('click', showMenuMobile);
  });
}
whatTheMenu();

// Form Feedback
if (window.SimpleForm) {
  new SimpleForm({
    form: '.contact-form', // seletor do formulário
    button: '#send', // seletor do botão
    erro:
      "<div id='form-erro'><h3 class='subtitle'>Erro no Envio!</h3><p>Um erro ocorreu, tente para o email danielElTester@outlook.com</p></div>", // mensagem de erro
    sucesso:
      "<div id='form-sucesso'><h3 class='subtitle'>Formulário enviado com sucesso</h3><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
  });
}
