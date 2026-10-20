(function(){
  var els=document.querySelectorAll('.trap,ul.check li,.who .co,.warn,.gcards li,details,.callout,.verdict-box,.related li');
  if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){return;}
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
  },{rootMargin:'0px 0px -8% 0px',threshold:.08});
  els.forEach(function(el,i){el.classList.add('rv');el.style.transitionDelay=Math.min(i%6*60,300)+'ms';io.observe(el);});
})();
