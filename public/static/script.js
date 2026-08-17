document.getElementById('year').textContent = new Date().getFullYear();

function toggleMobile(force) {
  const drawer = document.getElementById('drawer');
  const backdrop = document.getElementById('backdrop');
  const isOpen = drawer.getAttribute('aria-hidden') === 'false';
  const open = typeof force === 'boolean' ? force : !isOpen;
  drawer.setAttribute('aria-hidden', String(!open));
  backdrop.style.display = open ? 'block' : 'none';
  drawer.style.transform = open ? 'translateX(0)' : 'translateX(-100%)';
}

function moveCarousel(dir) {
  const carousel = document.getElementById('carousel');
  carousel.scrollBy({ left: dir * 300, behavior: 'smooth' });
}

function safePlay(video) {
  if (!video) return;
  const playPromise = video.play();
  if (playPromise && typeof playPromise.catch === 'function') {
    playPromise.catch(() => {});
  }
}

function safePause(video) {
  if (!video) return;
  try {
    video.pause();
    video.currentTime = 0;
  } catch (err) {}
}

function openModal(modalId, videoId, playVideo) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
  // Sem autoplay forçado por padrão (vídeos grandes); play só se pedido e após paint
  if (playVideo && videoId) {
    const video = document.getElementById(videoId);
    requestAnimationFrame(() => safePlay(video));
  }
}

function closeModal(modalId, videoId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
  if (videoId) safePause(document.getElementById(videoId));
}

function openProjectModal() {
  openModal('projectModal');
}

function closeProjectModal() {
  closeModal('projectModal');
}

function openGedModal(playVideo = false) {
  openModal('gedModal', 'gedVideo', playVideo);
}

function closeGedModal() {
  closeModal('gedModal', 'gedVideo');
}

function openEcommerceModal(playVideo = false) {
  openModal('ecommerceModal', 'ecommerceVideo', playVideo);
}

function closeEcommerceModal() {
  closeModal('ecommerceModal', 'ecommerceVideo');
}

function openProject3Modal(playVideo = false) {
  openModal('project3Modal', 'project3Video', playVideo);
}

function closeProject3Modal() {
  closeModal('project3Modal', 'project3Video');
}

function openConstructrackModal(playVideo = false) {
  openModal('constructrackModal', 'constructrackVideo', playVideo);
}

function closeConstructrackModal() {
  closeModal('constructrackModal', 'constructrackVideo');
}

function openFinanceHubModal(playVideo = false) {
  openModal('financeHubModal', 'financeHubVideo', playVideo);
}

function closeFinanceHubModal() {
  closeModal('financeHubModal', 'financeHubVideo');
}

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  closeProjectModal();
  closeGedModal();
  closeEcommerceModal();
  closeProject3Modal();
  closeConstructrackModal();
  closeFinanceHubModal();
});
