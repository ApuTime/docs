console.log("extra js init");

/** For galleries just add class .glightbox on links */

/** Feedback Form */

document
	.getElementById("feedbackButton")
	.addEventListener("click", function () {

		console.log('Kliknul jsem?');

		var lightboxForm = GLightbox({
			selector: "#feedbackButton",
			elements: [
				{
					content: document.getElementById('feedbackForm'),
				},
			],
		});

		lightboxForm.open();
	});
