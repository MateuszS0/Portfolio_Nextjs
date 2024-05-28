"use client"
import { useEffect, useState } from "react";
import "./navbar.css"
const Navbar = () => {
//scrolling hide/show
const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > prevScrollPos) { //on scroll down
        document.querySelector('.navbar-wrapper')?.classList.add('hide');
        } else { //on scroll up
        document.querySelector('.navbar-wrapper')?.classList.remove('hide');
        }
        setPrevScrollPos(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
        // to avoid memory leaks
        window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
    return(
        <nav className="navbar-wrapper flex justify-center gap-8 p-2">
            <div className="button" onClick={()=>scrollToSection("about")}>About</div>
            <div className="button" onClick={()=>scrollToSection("skills")}>Skills</div>
            <div className="button" onClick={()=>scrollToSection("projects")}>Projects</div>
            {/* <div className="button" onClick={()=>scrollToSection("contact")}>Contact</div> */}
        </nav>
    )
}
export default Navbar;