
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const modalactive = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const dark = document.querySelector('.dark');
const cancelang = document.querySelector('.btncancel')

modalactive.addEventListener('click', function () {
  dark.classList.add("dark--active");
  modal.classList.add("modal-content");
  //console.log();
});

//exit

//with click on the background
dark.addEventListener('click', function () {
  if (dark.classList.contains("dark--active") && modal.classList.contains("modal")) {
    dark.classList.remove("dark--active");
    modal.classList.remove("modal-content")
  }
});

//click on cancel
cancelang.addEventListener('click', function () {
  if (dark.classList.contains("dark--active") && modal.classList.contains("modal")) {
    dark.classList.remove("dark--active");
    modal.classList.remove("modal-content")
  }
});