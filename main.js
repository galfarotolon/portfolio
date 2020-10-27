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
            scrollTop: $(hash).offset().top + 10
        }, 800)
    }
})



$('#intro').mousewheel(function (e) {

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

