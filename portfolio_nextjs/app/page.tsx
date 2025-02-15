import Header from "@/components/Header/header";
import Navbar from "@/components/Navbar/navbar";
import Skills from "@/components/Skills/skills";
import Projects from "@/components/Projects/projects";
import Dark from "@/components/darkComponent/dark"
export default function Home() {

  return (
    <div className="main-wrapper">
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      {/* <Dark/> */}
    </div>
  );
}
