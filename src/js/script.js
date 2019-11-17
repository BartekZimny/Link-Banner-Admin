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
