function loco(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
loco();
var tl = gsap.timeline();
tl.to("#page1>img",{
    height:"100%",
    width:"100%",
    duration:0.8,
    delay:0.8,
    borderRadius:0,
},"a")
tl.from("#page1>h1,#page1>h3",{
    y:-30,
    opacity:0,
    duration:0.6,
    delay:0.4
},"a")
tl.from("#nav",{
    y:-15,
    opacity:0,
    duration:0.5
})
tl.to("#page1>h1 , #page1>h3",{
  scrollTrigger:{
    trigger:"#page1>h1, #page1>h3",
    scroller:"#main",
    // markers:true,
    start:"top 0",
    end:"top -10%",
    scrub:2
  },
  scale:0.6,
  duration:0.4
})

tl.to("#page2",{
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"top 90%",
    end:"top 80%",
    // pin:true,
    scrub:2,
    // markers:true,
    
  },
  y:-200,
  duration:0.8
})

function center1(){
    var clutter = "";
    document.querySelector("#page2>h2").textContent.split("").forEach(function(char){
          clutter+=`<span>${char}</span>`
    
    })
     document.querySelector("#page2>h2").innerHTML = clutter
   }
  
   center1();
tl.to("#page2>h2>span",{
    scrollTrigger:{
        trigger:"#page2>h2>span",
        scroller:"#main",
        start:"top 60%",
        end:"100% top",
        scrub:2,
        // markers:true,
        
    },
    color:"#E3E3C4",
   
    stagger:0.3
})
tl.to("#svg",{
  scrollTrigger:{
    trigger:"#svg",
    scroller:"#main",
    start:"top 80%",
    // markers:true,
    end:"100% 12%",
    scrub:1
  },
  x:"-400",
  duration:0.8,
  
})
function center(){
  var clutter = "";
  document.querySelector("#page3>h1").textContent.split("").forEach(function(char){
        clutter+=`<span>${char}</span>`
  
  })
   document.querySelector("#page3>h1").innerHTML = clutter
 }

 center();
 tl.to("#page3>h1>span",{
  scrollTrigger:{
      trigger:"#page3>h1>span",
      scroller:"#main",
      start:"top 80%",
      end:"top 40%",
      scrub:2,
      // markers:true,
      
  },
  color:"#434B34",
 
  stagger:0.3
})
var tl1 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page3 ",
    scroller:"#main",
    scrub:2,
    start:"top 15%",
    end:"top 0%",
    // markers:"true",

  },
})
tl1.from("#part1 p, #part1 h3 ",{
  
  opacity:0,
  y:50
},"a")
tl1.from("#part2 img:nth-child(1)",{
  
  opacity:0,
  y:50
},"a")
tl.from("#part1 img",{
  scrollTrigger:{
    trigger:"#part1 img",
    scroller:"#main",
    scrub:2,
    start:"top 80%",
    end:"top 70%",
    // markers:"true",

  },
  opacity:0,
  y:50
})
tl.from("#part2 img:nth-child(2)",{
  
  opacity:0,
  y:70,
  scrollTrigger:{
    trigger:"#part2 img:nth-child(2)",
    scroller:"#main",
    scrub:2,
    start:"top 98%",
    end:"top 90%",
    // markers:"true",

  },
  
})

var all = document.querySelectorAll(".elem")
all.forEach(function(e){
  var elem1 = e.childNodes[1];
  var elem2 = e.childNodes[3];
 
  var elemm1 = e.childNodes[1].querySelector('img')
  var elemm2=e.childNodes[1].querySelector('.head h2')
  var elemm3=e.childNodes[1].querySelector('.head h3')
  var elemm4=e.childNodes[1].querySelector('.head ')
  
  var originalContent = elem2.innerHTML
    e.addEventListener("mouseenter",function(){
    elemm1.style.transform="translateX(0)"
    elemm4.style.transform="translateX(0)"
    elemm2.style.color ="#E3E3C4"
    elemm3.style.color="#E3E3C4"
    e.style.backgroundColor="#5B6647"
    elem2.style.backgroundColor="#fff"
    elem2.style.color="#5B6647"
    elem2.innerHTML='<i class="ri-arrow-right-line"></i>'
    
    
   })
   e.addEventListener("mouseleave",function(){
    elemm1.style.transform="translateX(-100%)"
    elemm4.style.transform="translateX(-90%)"
    elemm2.style.color ="#5B6647"
    elemm3.style.color="#5B6647"
    e.style.backgroundColor="transparent"
    elem2.style.backgroundColor="#5B6647"
    elem2.style.color="#fff"
    elem2.innerHTML= originalContent;
   
    
   })
 
   })
   var tl2= gsap.timeline()
   tl2.from("#page4 .elem:nth-child(1)",{
    y:40,
    opacity:0,
    duration:0.15,
    scrollTrigger:{
      trigger:".elem",
      scroller:"#main",
      // markers:true,
      scrub:2,
      start:"top 90%",
      end:"top 70%"
    }
   })
   tl2.from("#page4 .elem:nth-child(2)",{
    y:40,
    opacity:0,
    duration:0.15,
    scrollTrigger:{
      trigger:".elem",
      scroller:"#main",
      // markers:true,
      scrub:2,
      start:"top 70%",
      end:"top 50%"
    }
    
   })
   tl2.from("#page4 .elem:nth-child(3)",{
    y:40,
    opacity:0,
    duration:0.15,
    scrollTrigger:{
      trigger:".elem",
      scroller:"#main",
      // markers:true,
      scrub:2,
      start:"top 50%",
      end:"top 30%"
    }
    
   })
   tl2.from("#page4 .elem:nth-child(4)",{
    y:40,
    opacity:0,
    duration:0.15,
    scrollTrigger:{
      trigger:".elem",
      scroller:"#main",
      // markers:true,
      scrub:2,
      start:"top 30%",
      end:"top 10%"
    }
    
   })
   tl2.from("#page4 .elem:nth-child(5)",{
    y:40,
    opacity:0,
    duration:0.15,
    scrollTrigger:{
      trigger:".elem",
      scroller:"#main",
      // markers:true,
      scrub:2,
      start:"top -10%",
      end:"top -30%"
    }
    
   })
   document.querySelector("#navpart2 button:nth-child(1)").addEventListener("mouseenter",function(){
    gsap.from("#navpart2 button:nth-child(1)>p",{
        opacity:0,
        duration:.5,
        y:10,
        ease: Expo.easeInOut
    })
   
})


document.querySelector("#navpart2 button:nth-child(2)").addEventListener("mouseenter",function(){
  gsap.from("#navpart2 button:nth-child(2)>p",{
      opacity:0,
      duration:.5,
      y:10,
      ease: Expo.easeInOut
  })
  
})
document.querySelector("#part1>h3>button>i").addEventListener("mouseenter",function(){
  gsap.from("#part1>h3>button>i",{
      opacity:0,
      duration:.5,
      x:20,
      ease: Expo.easeInOut
  })
  
})




