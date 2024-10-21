"use strict";

// Equipe

let prev = document.querySelector(".icon-prev-next i:nth-child(1)");
let next = document.querySelector(".icon-prev-next i:nth-child(2)");
let scrollTreinador = document.querySelector(".treinadores-content");
let itemTreinador = document.querySelectorAll(
	".treinadores-content .container-content .box"
);

prev.addEventListener("click", () => {
	scrollTreinador.scrollLeft -= 400;
});

next.addEventListener("click", () => {
	scrollTreinador.scrollLeft += 400;
});

let feeds = document.querySelector(".feeds");
let itemsFeed = document.querySelectorAll(".feed-item");
let containerTreinador = document.querySelector(
	".treinadores-content .container-content"
);

let body = document.querySelector("body");

// body.onload = function () {
// 	// console.log("carregado");
// 	// console.log(getComputedStyle(itemsFeed[1]).width);

// };

// document.addEventListener("DOMContentLoaded", ()=>{
// 	console.log(getComputedStyle(itemsFeed[0]).width);
// })

if (body.scrollWidth > 451) {
	containerTreinador.style.width = `${valorTotal(itemTreinador, 260)}px`;
	feeds.style.width = `${valorTotal(itemsFeed, 214.48 + 30)}px`;
}else if(body.scrollWidth < 451){
	containerTreinador.style.width = `${valorTotal(itemTreinador, 145.01 + 50)}px`;
	feeds.style.width = `${valorTotal(itemsFeed, 150 + 40)}px`;
}

function valorTotal(arr, width) {
	let valor = 0;

	arr.forEach(() => {
		valor += width;
	});

	return valor;
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
