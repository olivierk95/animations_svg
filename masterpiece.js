import anime from './node_modules/animejs/lib/anime.es.js';

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
  skewX: 2,
  delay: function(el, i) { return i * 1250 },
  direction: 'alternate',
 loop: true,
}) 
