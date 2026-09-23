// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== Portfolio filter =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

function applyFilter(filter) {
  projectCards.forEach(card => {
    const match = filter === 'all' || card.dataset.cat === filter;
    card.classList.toggle('show', match);
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter(btn.dataset.filter);
  });
});

applyFilter('all'); // tampilkan semua proyek saat halaman dimuat

// ===== Contact form -> kirim via email client =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const subject = encodeURIComponent(`Pesan dari ${name} — Portofolio`);
  const body = encodeURIComponent(`${message}\n\nDari: ${name}\nEmail: ${email}`);

  window.location.href = `mailto:naufalnashrullahandri@gmail.com?subject=${subject}&body=${body}`;
});
