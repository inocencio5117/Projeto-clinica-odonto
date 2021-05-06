// navbar animation
const menu = document.querySelector('#menu');

window.onscroll = function() {stickyMenu()};

let sticky = menu.offsetTop;
let width = window.innerWidth;

function stickyMenu() {
    if ( window.pageYOffset > sticky ) menu.classList.add("sticky"); 
    else menu.classList.remove("sticky");
}


// getting width and triggering the hamburguer menu
const hamburguer = document.querySelector('.toggler');

hamburguer.addEventListener('change', () => {
    
    if (hamburguer.checked) menu.classList.add('show')
    if (!hamburguer.checked) menu.classList.remove('show')

})


// floating message click
const floatingMsg = document.querySelector('.floating-msg');
const contact = document.querySelector('.contact')


function openContact() {
    if (floatingMsg.classList.contains('floating-msg')) {
        floatingMsg.classList.toggle('msg-open');
        contact.classList.toggle('hide')
    }
}


// modal opening
const agendar = document.querySelector('.submit')

agendar.addEventListener('click', e => {
    if (e) openPopup();
})

function openPopup() {
    // modal
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('#overlay');

    document.addEventListener('click', e => {
        const el = e.target;

        if (el.classList.contains('submit')) {
            modal.classList.add('active');
            overlay.classList.add('active');
        }

        if (el.classList.contains('close-btn')) {
            modal.classList.remove('active');
            overlay.classList.remove('active');
        }
    })

    overlay.addEventListener('click', (e) => {
        const el = e.target;

        if (el.classList.contains('overlay')) {
            modal.classList.remove('active');
            overlay.classList.remove('active');
        }
    })

}

