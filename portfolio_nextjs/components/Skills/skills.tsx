"use client"
import { useEffect, useState } from "react";
import "./skills.css";

const Skills = () => {
  const [showButtonWrapper, setShowButtonWrapper] = useState(true);
  const [selectedButton, setSelectedButton] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

//makes sure the correct elements are shown after button is clicked
//also works with animation in css file
  const handleButtonClick = (buttonName: any) => {
    setShowButtonWrapper(false);
    setSelectedButton(buttonName);
    transition();
  };
  //hides buttons after X seconds and shows other elements
  function transition() {
    setTimeout(() => {
      const button = document.querySelector(`.button-wrapper`);
      const details = document.querySelector(`.skills-details`)
      if (button) {
        button.classList.add('none');
        details?.classList.remove('none')
      }
    }, 750);
  }
// Hides the skills-details and shows the button-wrapper.
  const handleBackButton = () => {
    setShowDetails(!showDetails);
    setShowButtonWrapper(true);
  }
  useEffect(() => {
    const detailsWrapper = document.querySelector('.skills-details');
    if (detailsWrapper) {
      detailsWrapper.classList.add('none');
    }
  }, [showDetails]);

 
  return (
    <div className="skills-wrapper" id="skills">
      <h2 className="flex justify-center text-4xl" >Skills</h2>
      <div className={`button-wrapper ${showButtonWrapper ? 'show' : 'hide'} flex justify-center`}>
        <div className="w-1/4 flex justify-center p-6">
          <div className="text-2xl text-center">
            <img
              className="button my-6"
              src="/web-dev-photo.jpg"
              alt="Web Dev"
              loading="lazy"
              onClick={() => handleButtonClick("Web Development")}
            />
          </div>
        </div>
        <div className="w-1/4 flex justify-center p-6">
          <div className="text-2xl text-center">
            <img
              className="button my-6"
              src="/otherSkills.jpg"
              alt="Other"
              onClick={() => handleButtonClick("Other")}
            />
          </div>
        </div>
      </div>
      {selectedButton && (
        <div className={`fade-container ${showButtonWrapper ? 'hide' : 'show'}`}>
          {/* Show Skills For Web Development button */}
          {selectedButton === "Web Development" && (
            <div>
              <div className="none flex justify-center items-center flex-col skills-details">
              <h1>Web Development </h1>
                <div className="details-wrapper grid grid-cols-3 gap-4">
                  <div className="col-span-3 justify-self-start">
                    <img src="back-button.png" 
                    alt="BackButton" 
                    width={100} 
                    className="pt-5 pl-5"
                    onClick={handleBackButton}/>
                  </div>
                  <div className="skill">
                    <div className="together flex col-span-2">
                    <div className="hiddenDiv">
                      <span className="hiddenText">I like this</span>
                      <img src="skills/JavaScript_logo.png" alt="JavaScript" width={150}/>
                      </div>
                      <div className="hiddenDiv">
                      <span className="hiddenText">But i like this more</span>
                      <img src="skills/TypeScript_logo.jpg" alt="TypeScript" width={150}/>
                      </div>
                    </div>
                  </div>
                  {/* add hovers/focus on them */}
                  <div className="skill col-span-1"> 
                    <div className="hiddenDiv">
                      <span className="hiddenText">Easy to use</span>
                      <img src="skills/react.png" alt="React" width={150}/>
                    </div>
                  </div>
                  <div className="skill col-span-1">
                  <div className="hiddenDiv">
                      <span className="hiddenText">Efficiency</span>
                    <img src="skills/tailwind.png" alt="Tailwind" width={200} className="border-2 border-green-500/50 rounded-lg p-6"/>
                    </div>
                  </div>
                  <div className="skill col-span-1">
                  <div className="hiddenDiv">
                      <span className="hiddenText">Better than plain React</span>
                    <img src="skills/next.png" alt="Next.js" width={150}/>
                    </div>
                  </div>
                  <div className="skill col-span-1">
                  <div className="hiddenDiv">
                      <span className="hiddenText">Server-side programming</span>
                    <img src="skills/node.png" alt="Nodejs" width={150}/>
                    </div>
                  </div>
                  <div className="skill col-span-1">
                  <div className="hiddenDiv">
                      <span className="hiddenText">Good for everything</span>
                    <img src="skills/java.png" alt="Java" width={150}/>
                    </div>
                  </div>
                  <div className="skill col-span-1">
                  <div className="hiddenDiv">
                      <span className="hiddenText">Gotta know it</span>
                    <img src="skills/git.webp" alt="Git" width={150}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Show Skills For Other button */}
          {selectedButton === "Other" && (
            <div>
            <div className="none flex justify-center items-center flex-col skills-details">
            <h1>Other Skills</h1>
              <div className="details-wrapper grid grid-cols-3 gap-4">
                <div className="col-span-3 justify-self-start">
                  <img src="back-button.png" 
                  alt="BackButton" 
                  width={100} 
                  className="pt-5 pl-5"
                  onClick={handleBackButton}/>
                </div>
                {/* add hovers/focus on them */}
                <div className="skill col-span-1"> 
                <div className="hiddenDiv">
                      <span className="hiddenText">Figma: Designing</span>
                  <img src="skills/figma.png" alt="Figma" width={150}/>
                  </div>
                </div>
                <div className="skill col-span-1">
                <div className="hiddenDiv">
                      <span className="hiddenText">Scrum: Planning</span>
                  <img src="skills/scrum.png" alt="Scrum" width={150}/>
                  </div>
                </div>
                <div className="skill col-span-1">
                <div className="hiddenDiv">
                      <span className="hiddenText">pretty much JS right ?</span>
                  <img src="skills/java.png" alt="Java" width={150}/>
                  </div>
                </div>
                <div className="skill col-span-1">
                <div className="hiddenDiv">
                      <span className="hiddenText">Docker: Everyone gets containers</span>
                  <img src="skills/docker.png" alt="Docker" width={150}/>
                  </div>
                </div>
                <div className="skill col-span-1">
                <div className="hiddenDiv">
                      <span className="hiddenText">git push, git paid</span>
                  <img src="skills/git.webp" alt="Git" width={150}/>
                  </div>
                </div>
                <div className="skill col-span-1">
                <div className="hiddenDiv">
                      <span className="hiddenText">' OR 1=1 Welcome admin</span>
                  <img src="skills/sql.png" alt="SQL" width={150}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Skills;