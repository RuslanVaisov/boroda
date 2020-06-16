import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import Services from "./components/Services";
import About from "./components/About";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);

    const tl = gsap.timeline();
    const tl2 = gsap.timeline();
    const tl3 = gsap.timeline();
    const tl4 = gsap.timeline();

    gsap.registerPlugin(ScrollTrigger);

    tl.from(".nav-logo", 3, {
      y: "100vh",
      opacity: 0,
      delay: 1,
      scale: 3,
      ease: "power4.inOut",
    }).from(
      ".showcase, .nav-secondary",
      3,
      {
        y: "100vh",
        delay: 1,
        ease: "power4.inOut",
      },
      0.5
    );

    tl2
      .from(".services-center-left", 1, {
        scrollTrigger: {
          trigger: ".services-center-left",
          start: "top 100%",
          end: "top 80%",
          scrub: 1,
        },
        x: "-100vh",
        opacity: 0,
      })
      .from(
        ".services-center-right",
        1,
        {
          scrollTrigger: {
            trigger: ".services-center-right",
            start: "top 100%",
            end: "top 80%",
            scrub: 1,
          },
          x: "100vh",
          opacity: 0,
        },
        0
      )
      .from(".services-bottom", 1, {
        scrollTrigger: {
          trigger: ".services-bottom",
          start: "top 100%",
          end: "top 80%",
          scrub: 1,
        },
        y: "20vh",
        opacity: 0,
      });

    tl3.from(".about-main", 2, {
      scrollTrigger: {
        trigger: ".about-main",
        start: "top 100%",
        end: "top 80%",
        scrub: 1,
      },
      y: "30vh",
      opacity: 0,
    });

    tl4.from(".instagram-content img", 3, {
      scrollTrigger: {
        trigger: ".instagram-content",
        start: "top 90%",
        end: "top 80%",
        scrub: 3,
      },
      y: "100vh",
      opacity: 0,
      stagger: 0.3,
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <Services />
      <About />
      <Instagram />
      <Footer />
    </div>
  );
}

export default App;
