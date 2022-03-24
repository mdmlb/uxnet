
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//PORTAFOLIO MODAL
const modalactive = document.querySelector('.btnportafolio');
const modal = document.querySelector('.modal');
const dark = document.querySelector('.dark');
const cancelang = document.querySelector('.btncancel3')

modalactive.addEventListener('click', function () {
    dark.classList.add("dark--active");
    modal.classList.add("modal-content");
    //console.log();
});

//EXIT PORTAFOLIO MODAL

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//TIMELINE
const modalactive2 = document.querySelector('.btnty');
const modal2 = document.querySelector('.modal2');
const cancelang2 = document.querySelector('.btncancel2');

modalactive2.addEventListener('click', function () {
    dark.classList.add("dark--active");
    modal2.classList.add("modal2-content");
    //console.log();
});

//EXIT MODAL TIMELINE

//with click on the background
dark.addEventListener('click', function () {
    if (dark.classList.contains("dark--active") && modal2.classList.contains("modal2")) {
        dark.classList.remove("dark--active");
        modal2.classList.remove("modal2-content");
    }
});

//click on cancel
cancelang2.addEventListener('click', function () {
    if (dark.classList.contains("dark--active") && modal2.classList.contains("modal2")) {
        dark.classList.remove("dark--active");
        modal2.classList.remove("modal2-content")
    }
});


//ADD INFO
const addportafolio = document.querySelector('.btncompletang');
const addtimeline = document.querySelector('.btncompletang2');
