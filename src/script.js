console.log('Test');

// Solution Section
const dropdownButtonAlt = document.getElementById('dropdownButtonAlt');
const dropdownMenuAlt = document.getElementById('dropdownMenuAlt');

dropdownButtonAlt.addEventListener('click', () => {
  dropdownMenuAlt.classList.toggle('hidden');
});

// Language Section
const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hidden');
});

// Arrow Handler
const arrowButton = document.getElementById('arrowButton');
const arrow = document.getElementById('arrow');

arrowButton.addEventListener('click', () => {
  arrow.classList.toggle('rotate-180');
  if (arrow.classList.contains('rotate-180')) {
    arrow.innerHTML = `<svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
`;
  } else {
    arrow.innerHTML = `<svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>
`;
  }
});
