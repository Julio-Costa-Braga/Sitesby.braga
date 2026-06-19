// Ano no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile (abre/fecha o drawer)
function toggleMobile(force) {
  const drawer = document.getElementById('drawer');
  const backdrop = document.getElementById('backdrop');
  const isOpen = drawer.getAttribute('aria-hidden') === 'false';
  const open = typeof force === 'boolean' ? force : !isOpen;
  drawer.setAttribute('aria-hidden', !open);
  backdrop.style.display = open ? 'block' : 'none';
  drawer.style.transform = open ? 'translateX(0)' : 'translateX(-100%)';
}

// Carousel Netflix-style
function moveCarousel(dir){
  const carousel = document.getElementById('carousel');
  const scrollAmount = 300;
  carousel.scrollBy({left: dir * scrollAmount, behavior: 'smooth'});
}

// Enviar email via mailto
function sendEmail(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  const subject = encodeURIComponent("Novo contato do site");
  const body = encodeURIComponent(`Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);

  window.location.href = `mailto:jc18618@gmail.com?subject=${subject}&body=${body}`;
}

// FAQ (abre/fecha resposta)
function toggleFAQ(btn) {
  const content = btn.nextElementSibling;
  const isOpen = content.style.display === 'block';
  content.style.display = isOpen ? 'none' : 'block';
}
const images = [
  "/static/img/img2.jpg",
  "/static/img/img3.jpg",
  "/static/img/img4.jpg",
  "/static/img/img5.jpeg",
];
let current = 0;

function showImage(idx) {
  const img = document.getElementById('carousel-img');
  img.src = images[idx];
}

function showPrev() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}

function showNext() {
  current = (current + 1) % images.length;
  showImage(current);
}

// Inicializa com a primeira imagem
showImage(current);

// Modal de detalhes do projeto
const projetoImagens = [
  "/static/img/ged-recursos-humanos.png",
  "/static/img/ged-gestao.png"
];
let projetoImagemAtual = 0;

function mudarImagemProjeto(direcao) {
  projetoImagemAtual += direcao;
  if (projetoImagemAtual < 0) {
    projetoImagemAtual = projetoImagens.length - 1;
  } else if (projetoImagemAtual >= projetoImagens.length) {
    projetoImagemAtual = 0;
  }
  
  const img = document.getElementById('projetoImg');
  if (img) {
    img.src = projetoImagens[projetoImagemAtual];
  }
}

function openProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
}

// Fechar modal ao pressionar ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});

// Modal Project 3 open/close
function openProject3Modal(playVideo = false) {
  const modal = document.getElementById('project3Modal');
  const video = document.getElementById('project3Video');
  if (modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    if (playVideo && video) {
      try { video.currentTime = 0; video.play(); } catch (err) {}
    }
  }
}

function closeProject3Modal() {
  const modal = document.getElementById('project3Modal');
  const video = document.getElementById('project3Video');
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
    if (video) {
      try { video.pause(); video.currentTime = 0; } catch (err) {}
    }
  }
}

function openConstructrackModal(playVideo = false) {
  const modal = document.getElementById('constructrackModal');
  const video = document.getElementById('constructrackVideo');
  if (modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    if (playVideo && video) {
      try { video.currentTime = 0; video.play(); } catch (err) {}
    }
  }
}

function closeConstructrackModal() {
  const modal = document.getElementById('constructrackModal');
  const video = document.getElementById('constructrackVideo');
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
    if (video) {
      try { video.pause(); video.currentTime = 0; } catch (err) {}
    }
  }
}

function openFinanceHubModal(playVideo = false) {
  const modal = document.getElementById('financeHubModal');
  const video = document.getElementById('financeHubVideo');
  if (modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    if (playVideo && video) {
      try { video.currentTime = 0; video.play(); } catch (err) {}
    }
  }
}

function closeFinanceHubModal() {
  const modal = document.getElementById('financeHubModal');
  const video = document.getElementById('financeHubVideo');
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
    if (video) {
      try { video.pause(); video.currentTime = 0; } catch (err) {}
    }
  }
}

// Ajusta listener global de ESC para fechar todos os modais
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
    closeProject3Modal();
    closeConstructrackModal();
  }
});
