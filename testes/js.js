let lista = document.querySelectorAll(".nav-items-planos ul li");

let imagemPlanos = document.querySelector(".img-plano img");

let precos = [
	[50, 30, 30, 10, 40],
	[50123, 1530, 30, 10, 40],
	[503, 350, 330, 110, 20],
	[50, 30, 512330, 10, 30],
];

let img = document.querySelector(".img-plano img");

let img_planos = document.querySelectorAll(".img-plano img");

let valores_planos = document.querySelectorAll(".valores");

lista.forEach(function (elemento) {
	elemento.addEventListener("click", function () {
		lista.forEach(function (elemento) {
			elemento.classList.toggle("actives", false);
		});

		img_planos.forEach(function (elemento) {
			elemento.classList.toggle("img-active", false);
		});

		valores_planos.forEach(function (valores_elemento) {
			valores_elemento.classList.toggle("span-active", false);
		});

		if (elemento.classList.toggle("actives", true)) {
			switch (elemento.dataset.nome) {
				case "musc":

					img_planos[0].classList.toggle("img-active", true);
					valores_planos.forEach(function (el, ind) {
						el.innerText = precos[0][ind];
					});


					break;

				case "cros":
					img_planos[1].classList.toggle("img-active", true);
					valores_planos.forEach(function (el, ind) {
						el.innerText = precos[1][ind];
						
					});
					break;

				case "boxe":
					img_planos[2].classList.toggle("img-active", true);
					valores_planos.forEach(function (el, ind) {
						el.innerText = precos[2][ind];
						
					});
					break;

				case "dance":
					img_planos[3].classList.toggle("img-active", true);
					valores_planos.forEach(function (el, ind) {
						el.innerText = precos[3][ind];
						
					});
					break;

				default:
					console.log("algum erro");

					break;
			}

			// valores_planos.forEach(function(el){
			// 	el.classList.toggle("span-active", true); 
			// })
			
		}

		

		// img.addEventListener('animationend', function(){
		// 	img.classList.toggle("fade-1");
		// 	console.log("terminou");
		// }, {once: true})

		// img.addEventListener('animationend', function(){
		// 	img.classList.toggle("fade");

		// }, {once:true})
	});
});
