// const watchCount = 1300;
// let expOne = document.querySelector(".exp-1");
// let expTwo = document.querySelector(".exp-2");

// window.addEventListener("scroll", () => {
//   let checkpoints = window.pageYOffset;

//   if (checkpoints <= watchCount) {
//     opacity = 1 - checkpoints / watchCount;
//   } else {
//     opacity = 0;
//   }
//   document.querySelector(".hero").style.opacity = opacity;
// });

let designScrollLink = document.querySelector("#scroll-to-design");
let eduScrollLink = document.querySelector("#scroll-to-edu");
let blogScrollLink = document.querySelector("#scroll-to-blog");
let skillScrollLink = document.querySelector("#scroll-to-skill");
let moreScrollLink = document.querySelector("#scroll-to-more");

function scrollTo(targetId) {
  let section = document.getElementById(targetId);
  section.scrollIntoView({
    behavior: "smooth",
  });
}

designScrollLink.addEventListener("click", () => {
  scrollTo("design-target");
});
eduScrollLink.addEventListener("click", () => {
  scrollTo("edu-target");
});
blogScrollLink.addEventListener("click", () => {
  scrollTo("blog-target");
});
skillScrollLink.addEventListener("click", () => {
  scrollTo("skill-target");
});
moreScrollLink.addEventListener("click", () => {
  scrollTo("more-target");
});

const secondSec = document.querySelector(".second-sec");
let secondSecObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in-active");
        secondSecObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.4,
  }
);
secondSecObserver.observe(secondSec);

const leftImage1 = document.querySelector(".img-left-1");
const leftImage2 = document.querySelector(".img-left-2");
const leftImage3 = document.querySelector(".img-left-3");
const leftImage4 = document.querySelector(".img-left-4");
const rightImage1 = document.querySelector(".img-right-1");
const rightImage2 = document.querySelector(".img-right-2");
const rightImage3 = document.querySelector(".img-right-3");
const rightImage4 = document.querySelector(".img-right-4");

let leftImgObserver = new IntersectionObserver(
  (element) => {
    element.forEach((elem) => {
      if (elem.isIntersecting) {
        elem.target.classList.add("workImgAnimeL");
      }
    });
  },
  {
    threshold: 0.4,
  }
);
let rightImgObserver = new IntersectionObserver(
  (x) => {
    x.forEach((i) => {
      if (i.isIntersecting) {
        i.target.classList.add("workImgAnimeR");
      }
    });
  },
  {
    threshold: 0.4,
  }
);
leftImgObserver.observe(leftImage1);
leftImgObserver.observe(leftImage2);
leftImgObserver.observe(leftImage3);
leftImgObserver.observe(leftImage4);
rightImgObserver.observe(rightImage1);
rightImgObserver.observe(rightImage2);
rightImgObserver.observe(rightImage3);
rightImgObserver.observe(rightImage4);

const schoolSec = document.querySelector(".school-sec");
const collegeSec = document.querySelector(".college-sec");
const schoolDetails = document.querySelector(".school-details");
const collegeDetails = document.querySelector(".college-details");

let sclclObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("sclclAnime");
      }
    });
  },
  {
    threshold: 0.4,
  }
);
let scdtlObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scdtlAnime");
      }
    });
  },
  {
    threshold: 0.4,
  }
);

sclclObserver.observe(schoolSec);
sclclObserver.observe(collegeSec);
scdtlObserver.observe(schoolDetails);
scdtlObserver.observe(collegeDetails);

const certOne = document.querySelector(".cert-two");
const certTwo = document.querySelector(".cert-three");
const certThree = document.querySelector(".cert-four");
let certupperObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("certrgtAnime");
      }
    });
  },
  {
    threshold: 0.4,
  }
);
let certdownObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("certdwnAnime");
      }
    });
  },
  {
    threshold: 0.4,
  }
);
certupperObserver.observe(certOne);
certdownObserver.observe(certTwo);
certdownObserver.observe(certThree);

const blogImgOne = document.querySelector(".blogimg-one");
const blogImgTwo = document.querySelector(".blogimg-two");
const blogImgThree = document.querySelector(".blogimg-three");
let blogoneObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("blogimg1Anime");
      }
    });
  },
  {
    threshold: 0.4,
  }
);
let blogtwoObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("blogimg2Anime");
      }
    });
  },
  {
    threshold: 0.4,
  }
);
let blogthreeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("blogimg3Anime");
      }
    });
  },
  {
    threshold: 0.4,
  }
);
blogoneObserver.observe(blogImgOne);
blogtwoObserver.observe(blogImgTwo);
blogthreeObserver.observe(blogImgThree);

const vdOne = document.querySelector(".vd-1");
const vdTwo = document.querySelector(".vd-2");
const vdThree = document.querySelector(".vd-3");
const vdFour = document.querySelector(".vd-4");
const vdFive = document.querySelector(".vd-5");
const vdSix = document.querySelector(".vd-6");
const vdSeven = document.querySelector(".vd-7");
const vdEight = document.querySelector(".vd-8");
const vdNine = document.querySelector(".vd-9");

let vd1Observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("vd1Anime");
      }
    });
  },
  {
    threshold: 0.4,
  }
);
let vd26Observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("vd26Anime");
      }
    });
  },
  {
    threshold: 0.4,
  }
);
let vd457Observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("vd457Anime");
      }
    });
  },
  {
    threshold: 0.4,
  }
);
let vd3Observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("vd3Anime");
      }
    });
  },
  {
    threshold: 0.4,
  }
);
let vd89Observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("vd89Anime");
      }
    });
  },
  {
    threshold: 0.4,
  }
);
vd1Observer.observe(vdOne);
vd26Observer.observe(vdTwo);
vd26Observer.observe(vdSix);
vd3Observer.observe(vdThree);
vd457Observer.observe(vdFour);
vd457Observer.observe(vdFive);
vd457Observer.observe(vdSeven);
vd89Observer.observe(vdEight);
vd89Observer.observe(vdNine);

const partners = document.querySelector(".partnerlist");
let partnerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("partnerAnime");
      }
    });
  },
  {
    threshold: 0.4,
  }
);
partnerObserver.observe(partners);

const footLeft = document.querySelector(".foot-left");
const footRight = document.querySelector(".foot-right");
let footObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("footAnime");
      }
    });
  },
  {
    threshold: 0.4,
  }
);
footObserver.observe(footLeft);
footObserver.observe(footRight);
