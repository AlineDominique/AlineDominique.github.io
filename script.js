const translations = {};

function collectTranslations() {
  document.querySelectorAll('[data-pt]').forEach(el => {
    el._pt = el.getAttribute('data-pt');
    el._en = el.getAttribute('data-en');
  });
}

function applyLang(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.getElementById('langBtn').textContent = lang === 'pt' ? 'EN' : 'PT';
  document.title = lang === 'pt'
    ? 'Aline Dominique — Engenheira de Software Backend'
    : 'Aline Dominique — Backend Software Engineer';

  document.querySelectorAll('[data-pt]').forEach(el => {
    const text = lang === 'pt' ? el._pt : el._en;
    if (!text) return;
    if (el.tagName === 'H1' || el.innerHTML.includes('<')) {
      el.innerHTML = text;
    } else {
      el.textContent = text;
    }
  });
}

function toggleLang() {
  const current = document.documentElement.getAttribute('data-lang');
  const next = current === 'pt' ? 'en' : 'pt';
  applyLang(next);
  localStorage.setItem('lang', next);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  document.getElementById('themeBtn').textContent = next === 'dark' ? '☀' : '☾';
  localStorage.setItem('theme', next);
}

// Init
collectTranslations();
const savedLang = localStorage.getItem('lang') || 'pt';
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
document.getElementById('themeBtn').textContent = savedTheme === 'dark' ? '☀' : '☾';
applyLang(savedLang);
