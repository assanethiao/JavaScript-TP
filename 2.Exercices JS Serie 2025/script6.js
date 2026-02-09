window.addEventListener("load", function () {

	alert("Document onload");

	const img1 = document.getElementById("img1");
	img1.addEventListener("mouseover", function () {
		alert("première image");
	});

	const btnAlert = document.getElementById("btnAlert");
	btnAlert.addEventListener("click", function () {
		alert("clique sur le bouton");
	});


	const btnNuit = document.getElementById("btnNuit");
	const btnJour = document.getElementById("btnJour");

	btnNuit.addEventListener("click", function () {
		modeNuit(this);
	});

	btnJour.addEventListener("click", function () {
		modeJour(this);
	});

	
	const ecran = document.getElementById("ecran");

	ecran.addEventListener("mouseover", function () {
		ecran.src = "images/lion.jpg";
	});

	ecran.addEventListener("mouseout", function () {
		ecran.src = "images/chat.jpg";
	});
});



function modeNuit(btn) {
	document.body.style.backgroundColor = "black";
	document.body.style.color = "white";
	btn.style.color = "red";
}

function modeJour(btn) {
	document.body.style.backgroundColor = "white";
	document.body.style.color = "black";
	btn.style.color = "green";
}
