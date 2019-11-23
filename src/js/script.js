/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

// Check screen width (mobile)
if (window.screen.width < 576) {
  document.querySelector('.main').classList.add('wide');
  document.querySelector('.sidebar').classList.add('toggled');
}

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

// Chart
var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
  // 1 (chart type)
  type: 'bar',
  data: {
    // 2 (labels for the X axis)
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3 (data series setting)
    datasets: [
      {
        // 4 (naming the data series)
        label: 'Signups',
        // 5 (data series color selection)
        backgroundColor: '#8DBEC8',
        borderColor: '#8DBEC8',
        // 6 (supplement with sample data)
        data: [346, 211, 232, 362, 419, 391, 289, 269, 278, 196]
      },
      {
        label: 'FTD',
        backgroundColor: '#F29E4E',
        borderColor: '#F29E4E',
        data: [411, 168, 294, 273, 471, 122, 187, 512, 324, 203]
      },
      {
        label: 'Earned',
        backgroundColor: '#71B374',
        borderColor: '#71B374',
        data: [378, 189, 263, 317, 445, 256, 238, 390, 301, 199],
        // 7
        hidden: true
      }
    ]
  }
});

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
  window.location.replace('https://github.com/BartekZimny');
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
const addUrlButtons = document.querySelectorAll('.go_addurl');

for (let addUrlButton of addUrlButtons) {
  addUrlButton.addEventListener('click', function() {
    openModal('#modal_addurl');
  });
}

// Modals - ADD BANNER
const addBannerButtons = document.querySelectorAll('.go_addbanner');

for (let addBannerButton of addBannerButtons) {
  addBannerButton.addEventListener('click', function() {
    openModal('#modal_addbanner');
  });
}

// RANGESLIDER
var valueBubble = '<output class="rangeslider__value-bubble" />';

function updateValueBubble(pos, value, context) {
  pos = pos || context.position;
  value = value || context.value;
  var $valueBubble = $('.rangeslider__value-bubble', context.$range);
  var tempPosition = pos + context.grabPos;
  var position = tempPosition <= context.handleDimension ? context.handleDimension : tempPosition >= context.maxHandlePos ? context.maxHandlePos : tempPosition;

  if ($valueBubble.length) {
    $valueBubble[0].style.left = Math.ceil(position) + 'px';
    $valueBubble[0].innerHTML = value;
  }
}

$('input[type="range"]').rangeslider({
  polyfill: false,
  onInit: function() {
    this.$range.append($(valueBubble));
    updateValueBubble(null, null, this);
  },
  onSlide: function(pos, value) {
    updateValueBubble(pos, value, this);
  }
});

// DATERANGEPICKER
$(function() {
  $('input[name="daterange"]').daterangepicker(
    {
      showDropdowns: true,
      opens: 'center'
    },
    function(start, end, label) {
      console.log('A new date selection was made: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    }
  );
});
