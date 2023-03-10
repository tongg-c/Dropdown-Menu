const blog = document.querySelector('.blog');
const work = document.querySelector('.work');
const about = document.querySelector('.about');

const dropDowns = document.querySelectorAll('.dropdown');
const dropDownMenus = document.querySelectorAll('.dropdown-menu');

document.addEventListener('mouseover', e => {
  blog.style.backgroundColor = 'inherit';
  work.style.backgroundColor = 'inherit';
  about.style.backgroundColor = 'inherit';
  let dropDownMenu;

  if (e.target.closest('.dropdown') === blog) {
    dropDownMenu = blog.querySelector('.dropdown-menu');
    blog.style.backgroundColor = 'rgb(185, 61, 20)';
  }
  if (e.target.closest('.dropdown') === work) {
    dropDownMenu = work.querySelector('.dropdown-menu');
    work.style.backgroundColor = 'rgb(185, 61, 20)';
  }
  if (e.target.closest('.dropdown') === about) {
    dropDownMenu = about.querySelector('.dropdown-menu');
    about.style.backgroundColor = 'rgb(185, 61, 20)';
  }
  dropDownMenus.forEach(dropDownMenu => {
    if (
      dropDownMenu.classList.contains('visible') ||
      dropDownMenu === undefined
    ) {
      dropDownMenu.classList.remove('visible');
    }
  });
  if (dropDownMenu !== undefined) {
    dropDownMenu.classList.toggle('visible');
  }
});
