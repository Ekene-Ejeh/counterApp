let counter = document.getElementById("counter");
const addCountBtn = document.getElementById("addCounterBtn");
const reduceCountBtn = document.getElementById("reduceCounterBtn");

let count = 0;

addCountBtn.addEventListener("click", () => {
	count++;
	counter.innerHTML = count;
	if (counter.innerHTML > "0") {
		counter.style.color = "green";
	} else if (counter.innerHTML === "0") {
		counter.style.color = "#fff";
	}
	//animation
	counter.animate([{ opacity: "0.2" }, { opacity: "1.0" }], {
		duration: 500,
		fill: "forwards",
	});
});

reduceCountBtn.addEventListener("click", () => {
	count--;
	counter.innerHTML = count;
	if (counter.innerHTML < "0") {
		counter.style.color = "red";
	} else if (counter.innerHTML === "0") {
		counter.style.color = "#fff";
	}
	//animation
	counter.animate([{ opacity: "0.2" }, { opacity: "1.0" }], {
		duration: 500,
		fill: "forwards",
	});
});
