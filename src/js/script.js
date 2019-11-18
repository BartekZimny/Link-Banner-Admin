// Hamburger
function toggleSidebar(visible) {
  document.querySelector('.sidebar').classList.toggle('toggled', visible);
}

function toggleGeneral(wide) {
  document.querySelector('.main').classList.toggle('wide', wide);
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleSidebar();
  toggleGeneral();
});

// Highlight current page
var menuPages = document.getElementsByClassName('menu-link');

for (var i = 0; i < menuPages.length; i++) {
  menuPages[i].addEventListener('click', function() {
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

// Pages toggling
for (var j = 0; j < menuPages.length; j++) {
  menuPages[j].addEventListener('click', function() {
    var menuPages = this.getAttribute('href');
    var content = document.querySelector(menuPages + '-section');
    var all = document.querySelectorAll('.subpage');

    if (content) {
      for (var k = 0; k < all.length; k++) {
        all[k].classList.add('hidden');
      }
      content.classList.remove('hidden');
    }
  });
}

// Modals
function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});

document.querySelector('#overlay').addEventListener('click', function(e) {
  if (e.target === this) {
    closeModal();
  }
});

document.addEventListener('keyup', function(e) {
  if (e.keyCode === 27) {
    closeModal();
  }
});

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

// Modals - QUIT MODAL
document.getElementById('go_quit').addEventListener('click', function() {
  openModal('#modal_quit');
});

document.getElementById('go_site').addEventListener('click', function() {
  window.location.replace('https://github.com/TheWizard0f0z/');
});

// Modals - LOGIN MODAL
document.getElementById('go_login').addEventListener('click', function() {
  openModal('#modal_login');
});

// Modals - CHAT
document.getElementById('go_chat').addEventListener('click', function() {
  openModal('#modal_chat');
});

// Modals - ADD URL
document.getElementById('go_addurl').addEventListener('click', function() {
  openModal('#modal_addurl');
});
