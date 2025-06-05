var timeout;

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


//Hero Page Animation
(function firstPageAnim(){
    var tl=gsap.timeline();

    tl.from("#nav",{
        y:'-10',
        opacity:0,
        ease:Expo.easeInOut,
        duration:1
        
    })

    .to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:1.2,
        stagger:0.3
    })
    .from("#herofooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut
       
        
    })

})();


//Function to handle the Circle Skew effect on mouse movement
(function circleSkew(){
    //define Default Scale Value
    var xscale=1;
    var yscale=1;

    var xprev=0;
    var yprev=0;
    window.addEventListener('mousemove',function(dets){
        this.clearTimeout(timeout);
        xscale=gsap.utils.clamp(0.8,1.2,dets.clientX-xprev);
       yscale=gsap.utils.clamp(0.8,1.2,dets.clientY-yprev);

        xprev=dets.clientX;
        yprev=dets.clientY;
        // console.log(xdiff,ydiff);
        circleMouseFollower(xscale,yscale);

        timeout=this.setTimeout(function(){
        const circle=document.querySelector('#minicircle');  
        circle.style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;  
        },100);
         
    });
})();


// Function to handle the MouseFollow event
function circleMouseFollower(xscale,yscale){
    const circle=document.querySelector('#minicircle');
    window.addEventListener('mousemove',function(dets){
        circle.style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
    });
};

// circleMouseFollower();


document.querySelectorAll('.elem').forEach(function(elem){

    var rotate=0;
    var diff=0;

    elem.addEventListener('mouseleave',function(dets){

        

        gsap.to(elem.querySelector("img"),{
            ease:Power1,
            opacity:0,
        

        });
    });


    // Set initial styles for the image

    elem.addEventListener('mousemove',function(dets){
        var topVal=dets.clientY-elem.getBoundingClientRect().top;
        diff=dets.clientX-rotate;
        rotate=dets.clientX;
        

        gsap.to(elem.querySelector("img"),{
            ease:Power3,
            opacity:1,
            top:topVal,
            left:dets.clientX,
          
            rotate:gsap.utils.clamp(-20,20,diff)  
          

        });
    });
})




