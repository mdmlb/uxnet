
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//activar agregar evento y link de portafolio
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

/////////////////////////////////////////////////////////////////////////////////////

//trayectoria laboral
const modalactive2 = document.querySelector('.btnty');
const modal2 = document.querySelector('.modal2');
const cancelang2 = document.querySelector('.btncancel2')

modalactive2.addEventListener('click', function () {
  dark.classList.add("dark--active");
  modal2.classList.add("modal-content");
  //console.log();
});

//exit

//with click on the background
dark.addEventListener('click', function () {
  if (dark.classList.contains("dark--active") && modal2.classList.contains("modal2")) {
    dark.classList.remove("dark--active");
    modal2.classList.remove("modal-content")
  }
});

//click on cancel
cancelang2.addEventListener('click', function () {
  if (dark.classList.contains("dark--active") && modal2.classList.contains("modal2")) {
    dark.classList.remove("dark--active");
    modal2.classList.remove("modal-content")
  }
});