window.onscroll = function () { myFunction() };

var navbar = document.getElementById("NavBar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}


$('.nav-bar a, .avatar-img a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;


        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800)
    }
})

// for smoother grabbing of nav bar to keep scrolling down
$('.learn-more a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top + 110
        }, 800)
    }
})



$('#intro').mousewheel(function (e) {
    console.log(e)

    if (e.deltaY === -1) {
        $('html, body').animate({
            scrollTop: $('#NavBar').offset().top
        }, 800)
    }
})

$('.nav-bar').mousewheel(function (e) {

    console.log(e)

    if (e.deltaY === 1) {
        $('html, body').animate({
            scrollTop: $('#intro').offset().top
        }, 800)

    }
})

// for small nav bar

// jQuery(document).ready(function ($) {
//     var alterClass = function () {
//         var ww = document.body.clientWidth;
//         if (ww <= 1278) {
//             $('.nav-bar').addClass('nav-bar-collapse');
//         } else if (ww >= 1279) {
//             $('.nav-bar').removeClass('nav-bar-collapse');

//         };
//     };
//     $(window).resize(function () {
//         alterClass();
//     });
//     //Fire it when the page first loads:
//     alterClass();
// });


