AOS.init();

const menuIconClicked = () => {
  document.querySelector('.modalMenu').classList.add('active');
}

const xmarkIconClicked = () => {
  document.querySelector('.modalMenu').classList.remove('active');
}

const addPaddingTopToHeader = () => {
  const paddingOnTop = document.querySelector('.fixedPositionNavContainer').offsetHeight;
  document.querySelector('.header').style.paddingTop = paddingOnTop + 'px';
}

const closeModalMenu = () => {
  document.querySelector('.modalMenu').classList.remove('active');
}

// Initialize Swiper JS
const swiper = new Swiper('.swiper', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// 

// Counter Animation
$('.fifthSectionLeftP1').counterUp({
  delay: 10,
  time: 2000
});

$('.fifthSectionCounterspan').counterUp({
  delay: 10,
  time: 2000
});
