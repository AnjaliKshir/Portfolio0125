let csr = document.querySelector("#cursor")
let csr_bl = document.querySelector("#cursor_blur")

let xscale = 1
let yscale = 1
let xprev = 0
let yprev = 0

let timeout 

document.addEventListener("mousemove",function(dets){
    clearTimeout(timeout)
    csr.style.left = dets.x+"px"
    csr.style.top = dets.y+"px"
    csr_bl.style.left = dets.x-150+"px"
    csr_bl.style.top = dets.y-150+"px"

    let xdiff = dets.clientX - xprev
    let ydiff = dets.clientY - yprev

    xscale = gsap.utils.clamp(0.8,1.2,xdiff)
    yscale = gsap.utils.clamp(0.8,1.2,ydiff)

    xprev = dets.clientX
    yprev = dets.clientY

    csr.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale}) `

    timeout = setTimeout(function(){
        csr.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1) `
    },100)

})

const createObserver = (elementsSelector, animationClass) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
        } 
        else {
          entry.target.classList.remove(animationClass);
        }
      });
    });
  
    const elements = document.querySelectorAll(elementsSelector);
    elements.forEach((el) => observer.observe(el));
  };
  
  createObserver('.hidden', 'show');
  createObserver('.hidden_2', 'show');

  
var observerBounce_1 = new IntersectionObserver((entries)=>{
        entries.forEach((entry) => {
             console.log(entry)
             if(entry.isIntersecting){
                 entry.target.classList.add('bounce-left-css-1')
             }
         })
     })
    
    
    var bounceElements_1 = document.querySelectorAll(".bounce-left-1")
    bounceElements_1.forEach((el) => observerBounce_1.observe(el))
    var bounceElements_2 = document.querySelectorAll(".bounce-left-2")
    bounceElements_2.forEach((el) => observerBounce_1.observe(el))
    var bounceElements_3 = document.querySelectorAll(".bounce-left-3")
    bounceElements_3.forEach((el) => observerBounce_1.observe(el))
    

var observerBounce_2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
         console.log(entry)
         if(entry.isIntersecting){
            entry.target.classList.add('bounce-right-css-1')
         }
     })
 })
    
 
    
    var bounceElements_4 = document.querySelectorAll(".bounce-right-4")
    bounceElements_4.forEach((el) => observerBounce_2.observe(el))
    var bounceElements_5 = document.querySelectorAll(".bounce-right-5")
    bounceElements_5.forEach((el) => observerBounce_2.observe(el))
    var bounceElements_6 = document.querySelectorAll(".bounce-right-6")
    bounceElements_6.forEach((el) => observerBounce_2.observe(el))


 const primaryNav = document.querySelector(".primary-navigation")
 const navToggle = document.querySelector(".mobile-nav-toggle")

 navToggle.addEventListener('click',() => {
  const visibility = primaryNav.getAttribute("data-visible")
  if ( visibility === 'false' )
  {
    primaryNav.setAttribute("data-visible", true)
    navToggle.setAttribute('aria-expanded', true)
  }
  else if( visibility === 'true')
  {
    primaryNav.setAttribute("data-visible", false)
    navToggle.setAttribute('aria-expanded', false)

  }
 })