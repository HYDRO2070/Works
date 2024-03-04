function startwala(){
const tl = gsap.timeline()

tl.to("#yellowdiv1",{
    top:"-100%",
    delay:0.5,
    duration:1,
    ease:"expo.out"
},"ab")
tl.to("#page1 h4",{
    color:"black",
    ease:"expo.out"
})
const scroll = new LocomotiveScroll({
    el:document.querySelector("#main"),
    smooth:true,
})


let elems = document.querySelectorAll("#elem");
elems.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        document.querySelector("#page2").style.backgroundImage = `url("${e.getAttribute("data-img")}")`
        console.log(e.getAttribute("data-img"))
    })
})


document.querySelector(".div-btn h3").addEventListener("click",(e)=>{
    scroll.scrollTo(0)
})
}


startwala()