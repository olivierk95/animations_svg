import anime from './node_modules/animejs/lib/anime.es.js';

anime({
    targets: '.linedrawing',
    strokeDashoffset: [anime.setDashoffset],
    easing: 'easeOutCubic',
    duration: 5000,
    delay: function(el, i) { return i * 0 },
    direction: 'reverse'
  });
