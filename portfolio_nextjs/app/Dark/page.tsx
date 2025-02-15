"use client"
import { useEffect, useState } from "react";
import "./dark.css"
import { useRouter } from 'next/navigation';

const Dark = () => {

  const router = useRouter();
  // After that make something like: 
  // Oh no, i thought this would fix it..
  // Well it kind of works ? oh who am i kidding..
  // Alright alright give me a second..

  const [dots, setDots] = useState('');
  const [randomText, setRandomText] = useState('');
  const randomStrings = [
    'Initializing...',
    'Loading modules...',
    'Checking dependencies...',
    'Starting services...',
    'Boot complete.'
  ];

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots(prevDots => (prevDots.length < 3 ? prevDots + '.' : ''));
    }, 500);

    let textIndex = 0;
    let charIndex = 0;
    let currentText = '';

    const textInterval = setInterval(() => {
      if (textIndex < randomStrings.length) {
        if (charIndex < randomStrings[textIndex].length) {
          currentText += randomStrings[textIndex][charIndex];
          setRandomText(currentText);
          charIndex++;
        } else {
          currentText += '\n';
          setRandomText(currentText);
          textIndex++;
          charIndex = 0;
        }
      } else {
        clearInterval(textInterval);
        router.push('/?dark=true');
      }
    }, 10);

    return () => {
      clearInterval(dotsInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="flashlight-container">
      <div className="dark" />
      <div id="light" className="light" />
      <div className="rebooting-container">
      <h1 className="glitchy-text">
        Rebooting<span className="dots">{dots}</span>
      </h1>
      <pre className="random-text">{randomText}</pre>
    </div>
    </div>
  );
};
export default Dark;