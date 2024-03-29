// const swiperParnters2 = new Swiper(".div-swiper", {
// 	// Optional parameters
// 	loop: true,
// 	slidesPerView: 1,
// 	spaceBetween: 30,
 
// 	// If we need pagination
// 	pagination: {
// 	  el: ".swiper-pagination",
// 	},
 
// 	// Navigation arrows
// 	navigation: {
// 	  nextEl: ".swiper-button-next",
// 	  prevEl: ".swiper-button-prev",
// 	},
//  });

const swiperParnters = new Swiper(".partners__swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
	el: ".swiper-pagination",
	clickable: true,
 },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
	300:{
		slidesPerView: 2.5,
	},
	600:{
		slidesPerView: 3.5,
	},
	768: {
		slidesPerView: 4,
	}
  }
});

const menuItems = document.querySelectorAll(".header__item");
const menuBurgerBt = document.querySelector(".menu-btn");
const menuList = document.querySelector(".header__nav");
const wrapper = document.querySelector("body");

menuBurgerBt.addEventListener("click", () => {
  menuList.classList.toggle("active");
  menuBurgerBt.classList.toggle("active");
  wrapper.classList.toggle("scroll");
});

menuItems.forEach((e) => {
  e.addEventListener("click", () => {
    if (menuBurgerBt.classList.contains("active")) {
      menuBurgerBt.classList.toggle("active");
      menuList.classList.toggle("active");
    }
  });
});


// ---------------------------------------------newCollection
const catalobBtn = document.querySelectorAll('.newCatalog__btn');
const itemNon = document.querySelectorAll('.newCatalog.clocks__item.none');

catalobBtn.forEach(btn =>{
	btn.addEventListener('click', (el)=>{
		el.preventDefault()
		itemNon.forEach((e) =>{
			e.classList.toggle('none');
			catalobBtn.forEach((but)=>{
			but.classList.toggle('none')
			})
		})
	})
})


