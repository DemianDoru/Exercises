let openSidebarElement = document.getElementById('open-sidebar');
const slideElement = document.getElementById('slide');
const closeSidebarElement = document.getElementById('close-sidebar');

openSidebarElement.addEventListener('click', () => {
  slideElement.style.display = 'block';
});
closeSidebarElement.addEventListener('click', () => {
  slideElement.style.display = 'none';
});
