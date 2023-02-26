'use strict';

/* Dynamic Tabs Component */

// Elements
const nav = document.querySelector('.c-tabs__nav');
const navButtons = document.querySelectorAll('.c-tabs__nav-btn');
const panels = document.querySelector('.c-tabs__panels');

// Event listener (Event delegation pattern)
nav.addEventListener('click', e => {
  const btnClicked = e.target.closest('.c-tabs__nav-btn');

  // Guard clause pattern
  if (!btnClicked) return;

  // Reset navigation buttons
  navButtons.forEach(btn => {
    btn.classList.remove('c-tabs__nav-btn--active');
    btn.setAttribute('aria-selected', 'false');
  });

  // Activate navigation button
  btnClicked.classList.add('c-tabs__nav-btn--active');
  btnClicked.setAttribute('aria-selected', 'true');

  // Reset panel items
  [...panels.children].forEach(item => item.classList.remove('c-tabs__panels-item--active'));

  // Activate panel item
  const panelItemId = btnClicked.dataset.target;
  document.querySelector(panelItemId).classList.add('c-tabs__panels-item--active');
});
