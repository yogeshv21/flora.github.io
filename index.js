const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.03, 
    multiplier: 1.4, 
    reloadOnContextChange: true,
    touchMultiplier: 2,
    smoothMobile: 0,
    smartphone: {
        smooth: !0,
        breakpoint: 767
    },
})

function openMenu(){
    document.querySelector("#menu-pannel").style.left = "0%"
    gsap.from("#img", {
        height: 0,
        width: 0,
        duration: 1,
        delay: .3
    })  
}

function closeMenu(){
    document.querySelector("#menu-pannel").style.left = "-100%"
}


var elem = document.querySelectorAll(".card")

var width = document.querySelector("#card-cont").style.width = elem[0].getBoundingClientRect().width*elem.length + elem[0].getBoundingClientRect().left*(elem.length+1) + "px"

var currentPos = document.querySelector("#card-cont").getBoundingClientRect().left

document.querySelector("#products").addEventListener("scroll", function(){
    var newPos = document.querySelector("#card-cont").getBoundingClientRect().left
    var diff = newPos - currentPos;
    var speed =diff*.30;
    currentPos = newPos;
    elem.forEach(function(pro){
        pro.style.transform = `skewX(${speed}deg)`
    })
})  

var links = document.querySelectorAll(".link");

var imgs =  [ "img3.jpg", "img4.jpg", "img7.jpg", "img8.jpg"]


document.querySelector("#link-cont").addEventListener("mouseover", function(dets){
    document.querySelector("#photu").style.display = "initial"
})

document.querySelector("#link-cont").addEventListener("mouseout", function(dets){
    document.querySelector("#photu").style.display = "none"
})


links.forEach(function(elm){
    document.querySelector("#link-cont").addEventListener("mousemove", function(dets){
        document.querySelector("#photu").style.transform = `translate(${dets.clientX - 350}px,  ${dets.clientY - 160 }px ) rotate(${dets.clientX/14}deg)`  
    })
    elm.addEventListener("mousemove", function(dets){
        document.querySelector("#img").style. backgroundImage = `url(${imgs[elm.dataset.index]})`;
        document.querySelector("#photu").style. backgroundImage = `url(${imgs[elm.dataset.index]})`;
    })
})

document.querySelector("body").addEventListener("mousemove", function(dets){
    var X = dets.clientX -10 
    var Y = dets.clientY -10
   document.querySelector("#lar").style. transform= `translate(${X}px, ${Y}px)`
})


// gsap.registerPlugin(ScrollTrigger);

// scroller.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy("#main", {
//     scrollTop(value) {
//       return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, 
//     getBoundingClientRect() {
//       return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//     },
//     pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//   });
  
//   gsap.from(".foot-elm", {
//     scrollTrigger: {
//       trigger: "#footer",
//       scroller: "#main",
//       scrub: true,
//       start: "top 60%",
//       y: "-20px",
//       opacity: 0
//     }})