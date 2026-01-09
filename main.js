// Initialiser EmailJS avec votre User ID
(function () {
	emailjs.init("j706lElYjU3DzbFzP"); // Remplacez par votre User ID
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
	e.preventDefault(); // Empêche le formulaire de recharger la page

	// Récupère les données du formulaire
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const message = document.getElementById("message").value;

	// Préparer les paramètres pour EmailJS
	// On récupère les valeurs des input dans un objet
	// Adaptez à vos propres champs de texte
	const templateParams = {
		name: name,
		email: email,
		message: message,
	};
    console.log(templateParams);

	// Envoyer l'email via EmailJS
	emailjs.send("service_bx3xrfi", "template_x5dkfak", templateParams).then(
		function (response) {
			alert("Message envoyé avec succès !");
		},
		function (error) {
			alert("Erreur lors de l'envoi du message : " + error.text);
		},
	);

	// Réinitialise le formulaire après l'envoi
	document.getElementById("contactForm").reset();
});
