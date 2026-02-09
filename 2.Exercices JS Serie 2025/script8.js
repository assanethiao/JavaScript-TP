function init() {
	const items = document.querySelectorAll("li");

	const itemsPairs = [];
	const itemsImpairs = [];

	for (let i = 0; i < items.length; i++) {
		if (i % 2 === 0) {
			itemsPairs.push(items[i]);
		} else {
			itemsImpairs.push(items[i]);
		}
	}

	itemsPairs.forEach(li => {
		li.addEventListener("click", () => {
			li.classList.add("vert");
		});
	});

	itemsImpairs.forEach(li => {
		li.addEventListener("click", () => {
			li.classList.add("rouge");
		});
	});
}

window.addEventListener("load", init);
