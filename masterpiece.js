import anime from './animejs/lib/anime.es.js/index.js.js';

// SNOW
const snowflake = document.querySelectorAll('.snowflake');

snowflake.forEach(element => {
  anime({
    targets: element,
    easing: 'easeOutCubic',
    translateY: [
      {value: (-600 - (300*Math.random())), duration: 0, delay: (150*Math.random())},
      {value: (500 + (300*Math.random())), duration: (1000 + (5000*Math.random()))}
    ],
    loop: true,
  });
});

// SUN
anime({
  targets: ".sun .st2",
  easing: 'easeInOutQuad',
  duration: 3000,
  scale: 1.5,
  translateX: -3,
  direction: 'alternate',
  loop: true
})
anime({
  targets:  ".sun .st3",
  easing: 'easeInOutQuad',
  duration: 3000,
  scale: 1.2,
  delay: function(el, i) { return i * 450 },
  direction: 'alternate',
  loop: true
})

// TREE SPIN
const treeLeaves4 = document.querySelector('#tree_4_');

var movingLeaves4 = anime({
  targets:  "#tree_4_ .tree-main__leaves",
  easing: 'easeInOutQuad',
  duration: 2000,
  rotate: 180,
  direction: 'alternate',
  autoplay: false,
})  

treeLeaves4.addEventListener("mouseover", function(e) {
  e.preventDefault();
  movingLeaves4.play();
})

const treeLeaves3 = document.querySelector('#tree_3_');

var movingLeaves3 = anime({
  targets:  "#tree_3_ .tree-main__leaves",
  easing: 'easeInOutQuad',
  duration: 1500,
  rotate: -280,
  direction: 'alternate',
  autoplay: false,
})  

treeLeaves3.addEventListener("mouseover", function(e) {
  e.preventDefault();
  movingLeaves3.play();
})

// TREE SKEW
anime({
  targets:  ".tree",
  easing: 'easeInOutQuad',
  duration: 800,
  skewX: 5,
  translateX: -55,
  delay: function(el, i) { return 2000 + (i * 250) },
  direction: 'alternate',
  loop: true,
}) 

// PINETREE SKEW
anime({
  targets:  ".pinetree",
  easing: 'easeInOutQuad',
  duration: 600,
  skewX: 10,
  translateX: -115,
  delay: function(el, i) { return 2200 + (i * 250) },
  direction: 'alternate',
  loop: true,
})

// STEAM
anime({
  targets:  ".steam",
  easing: 'easeInOutQuad',
  skewX: [
    {value:3, duration: 2000}, {value: -3, duration: 2000}
  ],
  translateX: [ 
    {value:-35, duration: 2000}, {value: 35, duration: 2000}
  ],
  delay: function(el, i) { return i * 750 },
  direction: 'alternate',
  loop: true,
})

anime({
  targets:  ['.steam-cabin-blue', '.steam-cabin-red'],
  easing: 'easeInOutQuad',
  skewX: [
    {value:2, duration: 1500}, {value: -2, duration: 1500}
  ],
  translateX: [ 
    {value:-23, duration: 1500}, {value: 23, duration: 1500}
  ],
  delay: function(el, i) { return i * 500 },
  direction: 'alternate',
  loop: true,
})


// HOUSE JUMP
const cabins = document.querySelectorAll('.cabin');

cabins.forEach((e) => {
  console.log(e);
  let movingcabin = anime({
    targets: e,
    easing: 'easeOutCubic',
    scale: [
      {value:1.1, duration: 200},
      {value:1.3, duration: 500},
    ],
    translateY: [
      {value:-30, duration: 200},
      {value:-30, duration: 500}
    ],
    direction: 'alternate',
    autoplay: false,
  })
  e.addEventListener("mouseover", function(el) {
    el.preventDefault();
    movingcabin.play();
  })
})


// TEXT
const text = document.querySelector('#text');

let movingtext = anime({
  targets: "#text",
  easing: 'easeInExpo',
  duration: 4000,
  keyframes: [
    {rotate: 30, translateX: -50, easing: 'easeInOutQuart'},
    {rotate: -27, translateX: 45, easing: 'easeInOutQuart'},
    {rotate: 24, translateX: -40, easing: 'easeInOutQuart'},
    {rotate: -21, translateX: 35, easing: 'easeInOutQuart'},
    {rotate: 18, translateX: -30, easing: 'easeInOutQuart'},
    {rotate: -15, translateX: 25, easing: 'easeInOutQuart'},
    {rotate: 12, translateX: -20, easing: 'easeInOutQuart'},
    {rotate: -9, translateX: 15, easing: 'easeInOutQuart'},
    {rotate: 6, translateX: -10, easing: 'easeInOutQuart'},
    {rotate: -3, translateX: 5, easing: 'easeInOutQuart'},
    {rotate: 0, translateX: 0, easing: 'easeInOutQuart'}
  ],
  direction: 'normal',
  autoplay: false,
})

text.addEventListener("mouseover", function(el) {
  el.preventDefault();
  movingtext.play();
})

