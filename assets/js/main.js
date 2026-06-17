// Pills toggle
document.querySelectorAll('.pill').forEach(p => {
  p.addEventListener('click', () => p.classList.toggle('on'));
});

// Scroll-triggered fade-up
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Scroll dots
function scrollToEl(sel) {
  document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' });
}

const sections = ['#hero','#perfil','#diagnostico','#mercado','#hipoteses','#experimentacao','#evidencias','#percurso','#pos','#sintese'];
const dots = document.querySelectorAll('.scroll-dot');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const idx = sections.indexOf('#' + e.target.id);
      if (idx >= 0) {
        dots.forEach((d, i) => d.classList.toggle('active', i === idx));
      }
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('section[id]').forEach(s => sectionObserver.observe(s));

// Nav active state
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll('section[id]').forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
});
