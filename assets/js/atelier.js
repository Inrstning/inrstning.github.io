/* Atelier — scroll-triggered reveals + tasteful cursor halo (desktop) */
(function () {
  var els = document.querySelectorAll('.reveal');
  if (els.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
      els.forEach(function (el) { io.observe(el); });
    } else {
      els.forEach(function (el) { el.classList.add('in'); });
    }
  }

  var canHover = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!canHover) return;
  var halo = document.createElement('div');
  halo.setAttribute('aria-hidden', 'true');
  halo.style.cssText = [
    'position:fixed',
    'left:0',
    'top:0',
    'width:320px',
    'height:320px',
    'pointer-events:none',
    'z-index:1',
    'background:radial-gradient(circle at center, rgba(176,74,35,0.10) 0%, rgba(176,74,35,0.04) 35%, transparent 70%)',
    'transform:translate(-50%,-50%) translate3d(0,0,0)',
    'transition:opacity .4s ease',
    'opacity:0',
    'mix-blend-mode:multiply'
  ].join(';');
  document.body.appendChild(halo);
  var raf = null, x = 0, y = 0;
  document.addEventListener('mousemove', function (e) {
    x = e.clientX; y = e.clientY;
    halo.style.opacity = '1';
    if (raf) return;
    raf = requestAnimationFrame(function () {
      halo.style.transform = 'translate(' + x + 'px,' + y + 'px) translate(-50%,-50%)';
      raf = null;
    });
  });
  document.addEventListener('mouseleave', function () { halo.style.opacity = '0'; });
})();
