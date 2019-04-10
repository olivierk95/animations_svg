import anime from './animejs/lib/anime.es.js';

anime({
  targets: '.linedrawing',
  strokeDashoffset: [anime.setDashoffset],
  easing: 'easeOutCubic',
  duration: 5000,
  delay: function(el, i) { return i * 100 },
  direction: 'alternate',
  loop: true,
});

var tl = anime.timeline({
  strokeDashoffset: [anime.setDashoffset],
  easing: 'linear',
  duration: 1000,
  direction: 'reverse',
  loop: true,
});

tl
  .add({
    targets: '.signature .gore',
    strokeDashoffset: [anime.setDashoffset],
  })
  .add({
    targets: '.signature .al',
    strokeDashoffset: [anime.setDashoffset],
  })

