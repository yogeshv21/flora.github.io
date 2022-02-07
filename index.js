

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

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    lerp: 0.03, // Linear Interpolation, 0 > 1 // Try 0.01
    multiplier: 1.4, // Effect Multiplier
    reloadOnContextChange: true,
    touchMultiplier: 2,
    smoothMobile: 0,
    smartphone: {
        smooth: !0,
        breakpoint: 767
    },
})


// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });

// const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#footer",
//       start: "center bottom",
//       end: "center top",
//       scrub: true,
//       markers: true
//     }
//   });

//   tl.from(".fadin",{
//       y: 30,
//       opacity: 0,
//   })