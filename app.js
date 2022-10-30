const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.text', {y:"0%", duration: 1, stagger: 0.25});
tl.to('.slider', {y:"-100%", duration: 1.5, delay: 0.75});

tl.to('.intro', {y: "-100%", duration: 1}, "-=1.1");

tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});

tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");

const cards = document.getElementsByClassName('card');
console.log(cards);




const refresh = () =>{
  for(var i = 0; i < cards.length; i++){
    cards[i].style.zIndex = "-1";
  }
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
}

const lockScroll = () =>{
  document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}

const unlockScroll = () =>{
  document.getElementsByTagName('body')[0].style.overflow = 'visible' // the default for the css property
  for(var i = 0; i < cards.length; i++){
    cards[i].style.zIndex = "0";
  }
}

const timer = (miliseconds) => {
  setTimeout(() => {
    unlockScroll();
  }, miliseconds);
}

refresh();
lockScroll();
timer(4000);
