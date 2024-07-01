var inputs = document.querySelectorAll("input");

inputs.forEach(function (input) {
	input.addEventListener("click", function () {
		this.removeAttribute("placeholder");
	});

	input.addEventListener("blur", function () {
		if (this.value === "") {
			this.setAttribute("placeholder", this.getAttribute("data-placeholder"));
		}
	});

	// Сохраняем оригинальный placeholder в атрибуте data-placeholder
	input.setAttribute("data-placeholder", input.getAttribute("placeholder"));
});

const phoneIcon = document.querySelector('.phone-icon');

window.addEventListener('scroll', () => {
	if (window.scrollY > 150) {
		phoneIcon.style.bottom = '60px'; /* показать иконку при достижении порогового значения прокрутки */
	} else {
		phoneIcon.style.bottom = '-100px'; /* спрятать иконку если прокрутка меньше порогового значения */
	}
});

phoneIcon.addEventListener('mouseenter', () => {
	phoneIcon.style.animation = 'none';
});

phoneIcon.addEventListener('mouseleave', () => {
	phoneIcon.style.animation = 'pulse 1s infinite alternate';
});

phoneIcon.addEventListener('click', () => {
	window.location.href = "tel:+73832349332";
});

document.addEventListener('DOMContentLoaded', () => {

	let = mobileMenu = document.querySelector('.mobile-menu');

	// open mobile menu
	document.querySelector('.hamburger').addEventListener
		('click', function () {
			mobileMenu.classList.add('is-active');
		})

	//close mobile menu
	document.querySelector('.mobile-close').addEventListener
		('click', function () {
			mobileMenu.classList.remove('is-active');
		})

})


// Находим все элементы меню, которые будут вызывать прокрутку к блокам
const menuItems = document.querySelectorAll('.menu__link');

// Обходим каждый элемент меню
menuItems.forEach(item => {
	// Добавляем обработчик события клика
	item.addEventListener('click', function (event) {
		event.preventDefault(); // Отменяем стандартное поведение ссылки

		// Получаем идентификатор блока, к которому нужно прокрутить страницу
		const targetId = this.getAttribute('href').substring(1);

		// Находим элемент с нужным идентификатором на странице
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			// Вычисляем позицию блока относительно верха страницы
			const offsetTop = targetElement.offsetTop;

			// Вычисляем позицию для прокрутки с отступом 120px сверху
			const scrollToPosition = offsetTop - 60;

			// Плавно прокручиваем страницу к этому блоку
			window.scrollTo({
				top: scrollToPosition,
				behavior: 'smooth' // Плавная прокрутка
			});
		}
	});
});

document.addEventListener('DOMContentLoaded', function () {
	var buttons = document.querySelectorAll('.main-content__btn');

	buttons.forEach(function (button) {
		button.addEventListener('click', function (e) {
			e.preventDefault();
			var targetElement = document.getElementById('form');
			if (targetElement) {
				var offsetTop = targetElement.offsetTop;
				window.scroll({
					top: offsetTop,
					behavior: 'smooth'
				});
			}
		});
	});
});