let lista = document.querySelectorAll(".nav-items-planos ul li");

let imagemPlanos = document.querySelector(".img-plano img");

let imgs = ["../src/imgs/planos/planos jogador 1.png"];

let constructorPlanos = function (
	avaliacao,
	planoIntermediario,
	planoMensal,
	planoSemestral,
	planoAnual,
	img
) {
	this.av = avaliacao;
	this.planoInter = planoIntermediario;
	this.planoMensal = planoMensal;
	this.planoSemestral;
	this.planoSemestral = planoSemestral;
	this.planoAnual = planoAnual;
	this.img = img;
};

let precos = {
	boxe: constructorPlanos(
		"25",
		"50",
		"75",
		"100",
		"125",
		"../src/imgs/planos/img 1.png"
	),
	crossfit: constructorPlanos(
		"25",
		"50",
		"75",
		"100",
		"125",
		"../src/imgs/planos/img 2.png"
	),
	academia: constructorPlanos(
		"25",
		"50",
		"75",
		"100",
		"125",
		"../src/imgs/planos/img 3.png"
	),
	danca: constructorPlanos(
		"25",
		"50",
		"75",
		"100",
		"125",
		"../src/imgs/planos/img 4.png"
	),
};

lista.forEach(function (elemento) {
	elemento.addEventListener("click", function () {
		lista.forEach(function (elemento) {
			elemento.classList.toggle("actives", false);
		});

		if (elemento.classList.toggle("actives", true)) {
			console.log(elemento.dataset.nome);

			switch (elemento.dataset.nome) {
				case "musc":
					imagemPlanos.src = "../src/imgs/planos/planos jogador 1.png";
					break;

				case "cros":
					imagemPlanos.src = "../src/imgs/planos/img 1.jpg";
					break;
			
				case "boxe":
					imagemPlanos.src = "../src/imgs/planos/img 2.jpg";
					break;

				case "dance":
					imagemPlanos.src = "../src/imgs/planos/img 3.jpg";
					break;

				default:
					console.log("algum erro");

					break;
			}
		}
	});
});
