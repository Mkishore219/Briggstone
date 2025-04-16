
window.addEventListener("load", function () {
  ScrollTrigger.refresh();
});




// lenisScroll
function lenisScroll() {

  const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
      lenis.raf(time * 1000); 
  });

  gsap.ticker.lagSmoothing(0);

}
lenisScroll()






// cursor
function cursorMove() {

  var body = document.querySelector("body");
  var cursor = document.querySelector("#cursor");

  body.addEventListener("mousemove", function (e) {
    gsap.to(cursor, {
      x: e.x,
      y: e.y,
      duration: 1,
      ease: "back.out"
    })
  })

}
cursorMove()






// loader
function loaderAnimation() {

  const tl1 = gsap.timeline();
  tl1.to("#loader .loader-div1", {
    y: "-120%",
    duration: 2,
    ease: "power1.out",
    delay: 0.5
  }, "loader");
  tl1.to("#loader .loader-div2", {
    y: "120%",
    duration: 2,
    ease: "power1.out",
    delay: 0.5
  }, "loader");
  tl1.to("#loader", {
    display: "none",
    duration: 0.01
  });
  tl1.from("nav ul li", {
    y: -40,
    duration: 0.8,
    stagger: 0.1
  });

}
loaderAnimation()






// headerScrollAnimation
function headerScrollAnimation() {

  let prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    const header = document.getElementById("header");

    if (prevScrollpos >= currentScrollPos) {
      // Scrolling up: Show the header
      if (header.classList.contains('headerHidden')) {
        header.classList.remove('headerHidden');
      }
    } else {
      // Scrolling down: Hide the header
      if (!header.classList.contains('headerHidden')) {
        header.classList.add('headerHidden');
      }
    }

    prevScrollpos = currentScrollPos;
  };

}
headerScrollAnimation()








// // // // // //  about section 


// about Section Home Page txt animation fade in
function aboutPageTitle() {

  const aboutSectionh4 = document.querySelector('#about h4');
  const aboutSectionh4Text = aboutSectionh4.textContent;
  const words = aboutSectionh4Text.split(' ');
  aboutSectionh4.innerHTML = '';

  words.forEach(word => {
    const span = document.createElement('span');
    span.textContent = word + ' ';
    aboutSectionh4.appendChild(span);
  });

  const wordSpans = document.querySelectorAll('#about span');

  gsap.to(wordSpans, {
    delay: 0.7,
    stagger: 0.1,
    duration: 1,
    color: "#212121",
    ease: "power2.out", scrollTrigger: {
      trigger: "section#about",
      scroller: "body",
      start: "top 70%", // Start when the top of the section hits 90% of the viewport
      // markers: true, // Enable markers for debugging
    },
  });





}
aboutPageTitle()






// briggstoneExpCount
function briggstoneExpCount() {
  const briggstone_about_exp_yr_count = document.querySelector('.briggstone-exp-yr-count');

  gsap.to(briggstone_about_exp_yr_count, {
    scrollTrigger: {
      trigger: '.briggstone-exp',
      start: 'bottom 80%', // Trigger when the bottom of the element hits 80% of the viewport
      onEnter: () => {
        let count = 0;
        const targetCount = 15;
        const duration = 1; // Duration of the count animation in seconds

        const interval = setInterval(() => {
          briggstone_about_exp_yr_count.textContent = count < 10 ? `0${count}` : count;
          count++;
          if (count > targetCount) {
            clearInterval(interval);
          }
        }, (duration * 1000) / targetCount);
      },
      once: true // Ensure the animation only triggers once
    }
  });
}
briggstoneExpCount()



// briggstoneProjectsCount
function briggstoneProjectsCount() {
  const briggstoneProjectsCount = document.querySelector('.briggstone-projects-count');

  gsap.to(briggstoneProjectsCount, {
    scrollTrigger: {
      trigger: '.briggstone-exp',
      start: 'bottom 80%', // Trigger when the bottom of the element hits 80% of the viewport
      onEnter: () => {
        let count = 0;
        const targetCount = 55;
        const duration = 2; // Duration of the count animation in seconds

        const interval = setInterval(() => {
          briggstoneProjectsCount.textContent = count < 10 ? `0${count}` : count;
          count++;
          if (count > targetCount) {
            clearInterval(interval);
          }
        }, (duration * 1000) / targetCount);
      },
      once: true // Ensure the animation only triggers once
    }
  });
}
briggstoneProjectsCount()




// briggstoneClientsCount
function briggstoneClientsCount() {
  const briggstoneClientsCount = document.querySelector('.briggstone-clients-count');

  gsap.to(briggstoneClientsCount, {
    scrollTrigger: {
      trigger: '.briggstone-exp',
      start: 'bottom 80%', // Trigger when the bottom of the element hits 80% of the viewport
      onEnter: () => {
        let count = 0;
        const targetCount = 35;
        const duration = 1.5; // Duration of the count animation in seconds

        const interval = setInterval(() => {
          briggstoneClientsCount.textContent = count < 10 ? `0${count}` : count;
          count++;
          if (count > targetCount) {
            clearInterval(interval);
          }
        }, (duration * 1000) / targetCount);
      },
      once: true // Ensure the animation only triggers once
    }
  });
}
briggstoneClientsCount()

// // // // // //  about section end // // // // // 





// // // // // //  our Projects  // // // // // 

function ourProjectsImgaesAnimation() {
  // Target all .project-img containers
  const projectImages = gsap.utils.toArray('.project-img');

  // Loop through each .project-img container and apply the animation
  projectImages.forEach((projectImg) => {
    const image = projectImg.querySelector('.scale-image'); // Target the image inside .project-img

    gsap.fromTo(
      image,
      { scale: 1.5 }, // Start with scale(1.5)
      {
        scale: 1, // End with scale(1)
        duration: 0.5, // Animation duration of 0.5 seconds
        scrollTrigger: {
          trigger: projectImg, // Trigger when the .project-img container enters the viewport
          start: 'top 80%', // Start animation when the top of .project-img hits 80% of the viewport
          end: '50% 50%', // End animation when the bottom of .project-img hits 50% of the viewport
          scrub: true, // Smoothly animate on scroll
          // markers: true, // Set to true for debugging (shows trigger positions)
        },
      }
    );
  });
}

ourProjectsImgaesAnimation();

// // // // // //  our Projects end // // // // // 




// // // // // //  section Features Dropdown // // // // // 

function sectionFeaturesDropdown() {
  
  
  let questionButton = document.querySelectorAll('.question button');


    questionButton.forEach((elem) => {
        elem.addEventListener("click", () => {
            elem.classList.toggle("show");
        })
    })

  }
  sectionFeaturesDropdown()



// // // // // //  section Features Dropdown end // // // // // 













