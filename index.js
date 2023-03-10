const blog = document.querySelector('.blog');
const work = document.querySelector('.work');
const about = document.querySelector('.about');

const dropDowns = document.querySelectorAll('.dropdown');
const dropDownMenus = document.querySelectorAll('.dropdown-menu');

document.addEventListener('click', e => {
  let dropDownMenu;
  if (e.target.closest('.dropdown') === blog) {
    dropDownMenu = blog.querySelector('.dropdown-menu');
  }
  if (e.target.closest('.dropdown') === work) {
    dropDownMenu = work.querySelector('.dropdown-menu');
  }
  if (e.target.closest('.dropdown') === about) {
    dropDownMenu = about.querySelector('.dropdown-menu');
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
