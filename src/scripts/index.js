"use strict"

let lista = document.querySelectorAll(".nav-items-planos ul li");
let click = false;
let indexPlanos;
let valores_planos = document.querySelectorAll(".valores");
let img_planos = document.querySelectorAll(".img-plano img");

let precos = [
	[50, 30, 30, 10, 40],
	[50123, 1530, 30, 10, 40],
	[503, 350, 330, 110, 20],
	[50, 30, 512330, 10, 30],
];

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

// Equipe

let prev = document.querySelector(".icon-prev-next i:nth-child(1)")
let next = document.querySelector(".icon-prev-next i:nth-child(2)")
let scrollTreinador = document.querySelector(".treinadores-content")
let itemTreinador = document.querySelectorAll(".treinadores-content .container-content .box")

function valorTotal(arr){

	let valor = 0;
	
	arr.forEach((el)=>{
		console.log((getComputedStyle(el).width));
		valor += Number(getComputedStyle(el).width);
	})

	return valor;

}

prev.addEventListener("click", ()=>{
	scrollTreinador.scrollLeft -= 400;
})

next.addEventListener("click", ()=>{
	scrollTreinador.scrollLeft += 400;
})

let feeds = document.querySelector(".feeds");
let itemsFeed = document.querySelectorAll(".feed-item");
let containerTreinador = document.querySelector(".treinadores-content .container-content")



let body = document.querySelector("body")

body.onload = function(){
	console.log("carregado");
	console.log(getComputedStyle(itemsFeed[0]).width);
	containerTreinador.style.width = `${valorTotal(itemTreinador)}px`;
	feeds.style.width = `${valorTotal(itemsFeed)}px`
}




// button menu animação

let menu = document.querySelectorAll(".button-menu");
let menuMobile = document.querySelector(".menu-mobile");



menu.forEach((el) => {
	
	el.addEventListener("click", () => {

		
		
		
		el.classList.toggle("active-button");


		let controleMenu = el.classList.contains("active-button");

		
		if (controleMenu) {
			menuMobile.style.transform = "translateX(0)";	
			
		} else {
			menuMobile.style.transform = "translateX(100%)";
		}
	});
});
