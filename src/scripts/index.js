let lista = document.querySelectorAll(".nav-items-planos ul li");

let precos = [
	[50, 30, 30, 10, 40],
	[50123, 1530, 30, 10, 40],
	[503, 350, 330, 110, 20],
	[50, 30, 512330, 10, 30],
];

let img_planos = document.querySelectorAll(".img-plano img");

let valores_planos = document.querySelectorAll(".valores");

let click = false;

let indexPlanos;

lista.forEach(function (elemento) {

	let valorPreco;

	elemento.addEventListener("click", function () {

		if (click) return;

		click = true;

		lista.forEach(function (elemento) {
			elemento.classList.toggle("actives", false);
		});

		img_planos.forEach(function (elemento) {
			elemento.classList.toggle("img-active", false);
		});

		valores_planos.forEach(function (valores_elemento) {
			valores_elemento.classList.add("vLeft");
		});

		setTimeout(()=>{
			if (elemento.classList.toggle("actives", true)) {
				switch (elemento.dataset.nome) {
					case "musc":
	
						img_planos[0].classList.toggle("img-active", true);
						indexPlanos = 0;
						break;
	
					case "cros":
						img_planos[1].classList.toggle("img-active", true);
						indexPlanos = 1;
						break;
	
					case "boxe":
						img_planos[2].classList.toggle("img-active", true);
						indexPlanos = 2;
						break;
	
					case "dance":
						img_planos[3].classList.toggle("img-active", true);
						indexPlanos = 3;
						break;
	
					default:
						console.log("algum erro");
						break;
				}
	
				valores_planos.forEach((valoresEl, ind)=>{
					valoresEl.classList.remove("vLeft");
					valorPreco = precos[indexPlanos][ind];

					valoresEl.innerText = valorPreco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
				}) 
				
			}

			click = false;

		}, 700)

	});
});












// feedbacks

let feeds = document.querySelector(".feeds");

let itemsFeed = document.querySelectorAll(".feed-item");


let feedValorTotal = 0;

itemsFeed.forEach(function(elemento){

	let estilos = getComputedStyle(elemento).width

	// let valor = Number(estilos.split('').slice(0, - 2).join(""));

	feedValorTotal += 215 + 30;
	
	
})

let retorno = feeds.style.width = `${feedValorTotal}px`

console.log(retorno);