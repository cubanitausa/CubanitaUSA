// CRCRFS LLC — shared site behavior

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // Close menu when a link is tapped (mobile)
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Mark current page as active in nav
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === current) {
      a.classList.add('active');
    }
  });

  // Contact form: basic client-side handling for the mailto fallback
  var form = document.querySelector('#inquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var lines = [];
      data.forEach(function (value, key) {
        if (value) lines.push(key + ': ' + value);
      });
      var subject = encodeURIComponent('New inquiry from CRCRFS LLC website');
      var body = encodeURIComponent(lines.join('\n'));
      window.location.href = 'mailto:crcrfs@gmail.com?subject=' + subject + '&body=' + body;
    });
  }
});
