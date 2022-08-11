/**
 * Addclass on scroll
 */
//use window.scrollY
var scrollpos = window.scrollY;
var header = document.getElementsByTagName("header")[0];

window.addEventListener('scroll', function(){
    //Here you forgot to update the value
    scrollpos = window.scrollY;

    if(scrollpos > 40){
        header.classList.add("header-dark");
    }
    else {
		header.classList.remove("header-dark");
    }
});


/**
 * Declaration lightbox
 */
var lightbox = GLightbox();

/**
 * Init lightbox for image galleries (a.glightbox)
 */
lightbox = GLightbox({
	touchNavigation: true,
	loop: true,
	closeButton: false,
	closeOnOutsideClick: true
});

/**
 * Open vimeo iframe
 */
var lightboxDescription = GLightbox({
	selector: ".video-lightbox",
});
