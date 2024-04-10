 document.addEventListener("mousemove", function(dets){
    gsap.to(".cursor",{
        opacity: 1,
        x: dets.clientX,
        y: dets.clientY,
        duration: 0.5,
        ease: "power3.easeInOut"
    })
 })
 
 
 var h1 = document.querySelector('.content h1');

    var allLetters = h1.innerHTML.split("");
    h1.innerHTML = "";
    allLetters.forEach(function(letter){
        h1.innerHTML += `<span>${letter}</span>`
    })

    function headerAnimation(){
        var tl = gsap.timeline();
    
        tl.from("#moon",{
            y: "100%",
            x: "-300%",
            scale: 5,
            duration: 5,
            ease: "power3.easeInOut"
        })
        .to("#moon",{
            y: "-85%",
            x: "125%",
            duration: 4,
            ease: "power3.easeInOut"
        }, "-=4")
    
        .to(".content h1 span",{
            color: "white",
            stagger: 0.1,
        })

        .to(".header-content",{
            backgroundColor: "#11111100",
            duration: 1.5,
            ease: "power3.easeInOut"
        })
    }
    
    var info = document.querySelector(".ramzan-info h1");
    var words = info.innerHTML.split(/\s+/); 
    info.innerHTML = "";
    
    words.forEach(function (word, index) {
        if (index !== words.length - 1) {
            info.innerHTML += `<span>${word}</span> `;
        } else {
            info.innerHTML += `<span>${word}</span>`;
        }
    });
    
    function infoAndPartsAnimation(){
        gsap.to(".ramzan-info h1 span", {
            opacity: 1,
            stagger: 0.1,
            // duration: 5,
                    ease: "power3.easeInOut",
            scrollTrigger: {
                trigger: ".ramzan-info",
                start: "top 50%",
                end: "bottom bottom",
                scrub: 3,
            }
        });
    
        gsap.to(".ramzan-parts .elem:nth-child(odd)",{
            x: -100,
            stagger:0.1,
            ease: "power3.easeInOut",
            scrollTrigger:{
                trigger: ".ramzan-parts",
                start: "top 50%",
                end: "bottom top",
                scrub: 3,
            }
        })
    
        gsap.to(".ramzan-parts .elem:nth-child(even)",{
            x: 100,
            stagger:0.1,
            ease: "power3.easeInOut",
            scrollTrigger:{
                trigger: ".ramzan-parts",
                start: "top 50%",
                end: "bottom top",
                scrub: 3,
            }
        })
    }
    
    gsap.to(".ramzan-end h1 span",{
        y: 0,
        // duration: 1,
        ease: "power4.easeInOut",
        scrollTrigger: {
            trigger: ".ramzan-end",
            start: "top 50%",
            end: "bottom bottom",
            scrub: 1,
        }
    })


    document.querySelector(".eid button").addEventListener("mouseover",function(){
        gsap.to(".eid video",{
            opacity: 1
        })
    })

    document.querySelector(".eid button").addEventListener("mouseleave",function(){
        gsap.to(".eid video",{
            opacity: 0
        })
    })
    
    

    
    
    gsap.to(".eid-info h1 span", {
        opacity: 1,
        stagger: 0.1,
        // duration: 5,
                ease: "power3.easeInOut",
        scrollTrigger: {
            trigger: ".eid-info",
            start: "top 50%",
            end: "bottom bottom",
            scrub: 2,
        }
    });


    headerAnimation();
    infoAndPartsAnimation();