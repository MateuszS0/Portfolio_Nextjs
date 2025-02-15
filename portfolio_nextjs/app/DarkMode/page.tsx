"use client"
import "./darkmode.css"
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

const page: React.FC = () => {
    const [glitchIndices, setGlitchIndices] = useState<number[]>([]);
    const [userInput, setUserInput] = useState<string>("");
    
    const router = useRouter();
    const glitchChars = ['█', '▓', '▒', '░', '_', ' '];
    const originalText = "Oops, something went wrong. I'm sorry I need your help! Could you please fix this code? I'm pretty sure it's the cause of this issue.";

  useEffect(() => { 
    const glitchInterval = setInterval(() => {
      const indices: any = [];
      while (indices.length < 5) { // 5 letters glitchy at a time
        const index = Math.floor(Math.random() * originalText.length);
        if (!indices.includes(index)) {
          indices.push(index);
        }
      }
      setGlitchIndices(indices);
    }, 300); // Change glitch effect every 300ms

    return () => clearInterval(glitchInterval);
  }, []);

  const getRandomGlitchChar = () => {
    return glitchChars[Math.floor(Math.random() * glitchChars.length)];
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (input: string) => {
    if (input.trim().toLowerCase() === "true" || input.trim() === "1") {
        router.push('/Dark');
    } else if (input.trim().toLowerCase() === "false" || input.trim() === "0") {
        router.push('/');
    } else {
      alert("Wrong input");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(userInput);
    }
  };

  return (
    <div className="darkmode-wrapper flex justify-center items-center flex-col">
    <div className="glitchy-text text-lg text-center">
      {originalText.split('').map((char, i) => (
        <span key={i} className={glitchIndices.includes(i) ? 'glitch' : ''}>
          {glitchIndices.includes(i) ? getRandomGlitchChar() : char}
        </span>
      ))}
    </div>
        <pre className="code-snippet">
            {`const darkMode = () => {\n  return `}
            <input
            placeholder="Tr▓F▒lse▓alseFalse"
            type="text"
            value={userInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="code-input opacity-70"
            />
        {`\n} \n Error: Incorrect return value. \n Expecting: true or false.`}
        </pre>
        <div>
        <button onClick={() => handleSubmit(userInput)} className="submit-button">Submit</button>
        <button className="submit-button" onClick={() => {
          setUserInput("True");
          handleSubmit("True");
        }}>Try Auto Fix</button>
        </div>
    </div>
  );
};

export default page