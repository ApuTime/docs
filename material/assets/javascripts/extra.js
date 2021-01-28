console.log("extra js init");

var lightbox = GLightbox();

/** For galleries just add class .glightbox on links */
lightbox = GLightbox({
	touchNavigation: true,
	loop: true,
});

/** Feedback Form */
document
	.getElementById("feedbackButton")
	.addEventListener("click", function () {
		openIframeForm(lightbox);
	});

function openIframeForm(plugin) {

	var contentWrap = document.getElementById("feedbackForm");

	plugin.setElements([
		{
			content: contentWrap,
		},
	]);

	plugin.open();
}
