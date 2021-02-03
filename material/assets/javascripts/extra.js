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
 * Form init
 */
function formInit() {
	hbspt.forms.create({
		portalId: "7639599",
		formId: "25e91c0c-2b5f-48cf-a104-e94e2d677510",
		target: "#feedbackForm"
	});
}

/**
 * Open vimeo iframe
 */
var lightboxDescription = GLightbox({
	selector: ".video-lightbox",
});

/**
 * Open lightbox on click with form in content
 */
if (document.getElementById("feedbackButton")) {
	document
		.getElementById("feedbackButton")
		.addEventListener("click", function () {
			openIframeForm(lightbox);
		});
}
/**
 * Open lightbox with content
 */
function openIframeForm(plugin) {

	var contentWrap = document.getElementsByClassName("hs-form-iframe")[0];

	plugin.setElements([{ content: contentWrap }]);
	plugin.open();

	formInit();
}

/**
 * Init section after DOMContentLoaded
 */
document.addEventListener("DOMContentLoaded", function (event) {
	formInit();
});
