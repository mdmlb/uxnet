const menuburguer = document.querySelector('.header__menu');
const menuclose = document.querySelector('.menuclose');
const option1 = document.querySelector('.menubackground');
const option11 = document.querySelector('.menubackgroundactive2');
const option2 = document.querySelector('.menubackground2');
const option3 = document.querySelector('.menubackground3');
const option4 = document.querySelector('.menubackground4');

option1.addEventListener('click', function () {
  menu.classList.add("option11");
  //console.log();
});

menuclose.addEventListener('click', function () {
  if (dark.classList.contains("dark--active") && menu.classList.contains("burguermenu--move")) {
    dark.classList.remove("dark--active");
    menu.classList.remove("burguermenu--move")
  }

});

option2.addEventListener('click', function () {
    option1.classList.remove("menun");
    //console.log();
  });

