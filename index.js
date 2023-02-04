// Import stylesheets
import './style.css';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);
const duration = 10;
// gsap.set("#div",{xPercent:-50,yPercent:-50,transformOrigin:"50% 50%"})
gsap.to(".ic-wrapper.facebook", {
  duration: duration-0.3, 
  // repeat: 12,
  // repeatDelay: 3,
  repeat: -1,
  ease: "power1.inOut",
  motionPath:{
    path: "#path",
    align: "#path",
    // autoRotate: true,
    alignOrigin: [0.5, 0.5],
  }
});

gsap.to(".ic-wrapper.linkedin", {
  duration: duration, 
  // repeat: 12,
  // repeatDelay: 3,
  repeat: -1,
  ease: "power1.inOut",
  motionPath:{
    path: "#path",
    align: "#path",
    // autoRotate: true,
    alignOrigin: [0.5, 0.5],
    start:0.25,
    end:1.25,
  }
});

gsap.to(".ic-wrapper.github", {
  duration: duration, 
  // repeat: 12,
  // repeatDelay: 3,
  repeat: -1,
  ease: "power1.inOut",
  motionPath:{
    path: "#path",
    align: "#path",
    // autoRotate: true,
    alignOrigin: [0.5, 0.5],
    start:0.60,
    end:1.60,
  }
});




// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;
