import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/Themes";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef, useLayoutEffect } from "react";
import Home from "./sections/Home";
import { AnimatePresence } from "framer-motion";
import Intro from "./sections/Intro";
import ScrollerTriggerProxy from "./components/ScrollerTriggerProxy";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Bio from "./sections/Bio";
import NavBar from "./components/NavBar";
import "./App.css"
import PersonalProjects from "./sections/PersonalProjects";
import PersonalProj from "./sections/PersonalProj";
import SchoolProjects from "./sections/SchoolProjects";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);
  useLayoutEffect(() => {
    let element = containerRef.current;

    // let tl = gsap.timeline();
    setTimeout(() => {
      gsap.fromTo(
        element,
        {
          backgroundColor: `rgba(${lightTheme.beige}, 1)`,
        },
        {
          backgroundColor: `rgba(${lightTheme.white}, 1)`,
          immediateRender: false,
          scrollTrigger: {
            trigger: ".white",
            scroller: ".App",
            scrub: true,
            start: "top bottom",
            end: "+=100%",
            markers: true,
          },
        }
      );
      gsap.to(element, {
        backgroundColor: `rgba(${lightTheme.lightPink}, 1)`,
        immediateRender: false,
        scrollTrigger: {
          trigger: ".pink",
          scroller: ".App",
          scrub: true,
          start: "top bottom",
          end: "+=100%",
          markers: true,
        },
      });
      gsap.to(element, {
        backgroundColor: `rgba(${lightTheme.lightGray}, 1)`,
        immediateRender: false,
        scrollTrigger: {
          trigger: ".gray",
          scroller: ".App",
          scrub: true,
          start: "top bottom",
          end: "+=100%",
          markers: true,
        },
      });
      ScrollTrigger.refresh();
    }, 1000);
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <ScrollerTriggerProxy />
          <AnimatePresence>
          <NavBar />
            <main className="App" data-scroll-container ref={containerRef}>
            
              <section className="panel beige">
                <Home />
              </section>
              <section className="panel white" style={{"marginTop": "0.25rem"}}>
                <Intro />
              </section>
              <section className="panel pink" style={{"marginTop": "0.25rem"}}>
                <Bio />
              </section>
              <section className="panel gray" style={{"marginTop": "0.25rem"}}>
              <PersonalProjects />
              </section>
              <SchoolProjects />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
