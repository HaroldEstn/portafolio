const links = document.querySelectorAll('.link');
const contentDiv = document.getElementById('content-div');

function change() {
  event.preventDefault();
  links.forEach(link => link.classList.remove('clicked'));
  this.classList.add('clicked');
  const content = this.getAttribute('data-content');
  contentDiv.innerHTML = content;
}

function toggleDropdown() {
    dropdownMenu = document.getElementById('dropdownMenu');
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
}

links.forEach(link => link.addEventListener('click', change));
