const reveal = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){e.target.classList.add('visible'); reveal.unobserve(e.target)} })
},{threshold:.12});
document.querySelectorAll('section,.project,.skill,.timeline-item').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(20px)';el.style.transition='opacity .7s ease, transform .7s ease';reveal.observe(el)});
document.addEventListener('scroll',()=>{
  document.querySelectorAll('.visible').forEach(el=>{el.style.opacity='1';el.style.transform='translateY(0)'});
},{passive:true});
window.addEventListener('load',()=>document.querySelectorAll('section,.project,.skill,.timeline-item').forEach(el=>{if(el.getBoundingClientRect().top<innerHeight){el.classList.add('visible');el.style.opacity='1';el.style.transform='translateY(0)'}}));
