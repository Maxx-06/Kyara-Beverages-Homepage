var t1 = gsap.timeline() //creating timeline


// hero section
t1.from(".logo", {
    y: -190,
    duration: 0.7,
    opacity: 0,

})

t1.from(".tagline", {
    y: 90,
    duration: 0.7,
    opacity: 0,
})


// about section
gsap.from(".about-us", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: .4,
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
    }
})

gsap.from(".about-line", {
    x: -80,
    opacity: 0,
    duration: 1,
    delay: .8,
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
    }
})

// product section
gsap.from(".product-heading", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: .4,
    scrollTrigger: {
        trigger: ".prd-headline",
        start: "top 80%"
    }
})


document.querySelectorAll(".product").forEach((item, index) => {
    gsap.from(item, {
        opacity: 0,
        duration: 1.2,
        delay: 0.1 * index,
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none",
        }
    });
});



// contact section
gsap.from(".contact-section h2", {
    x: 80,
    opacity: 0,
    duration: 1,
    delay: .4,
    scrollTrigger: {
        trigger: ".contact-form",
        start: "top 80%",
    }
})

gsap.from(".from-lf", {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".contact-form",
        start: "top 80%"
    }
});


