"use client"
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

const dark = () => {
  const searchParams = useSearchParams();
  const [modal, setModal] = useState(true);
  let paramValue = searchParams.get('dark');
  // const router = useRouter();

  useEffect(() => {
    if (paramValue == 'true') {
      document.body.classList.add('green-text');
    } else {
      document.body.classList.remove('green-text');
    }

    // Clean up function
    return () => {
      document.body.classList.remove('green-text');
    };
  }, [paramValue]);

  // const [dots, setDots] = useState('');
  const [randomText, setRandomText] = useState('');
  // const [flash, setFlash] = useState(false);
  const randomStrings = [
    'Well.. that is concerning...',
    'Looks like the corrupted code leaked into the document body...',
    'Not exactly sure what to do about this...',
    'Alright just remove the /?dark=true from URL whenever you want to.',
    'Or dont.. maybe theres something hiding in here...',
    'PS: Not yet but soon...'
  ];


  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let lineFinished = false;

    const typeNextChar = () => {
      if (textIndex < randomStrings.length) {
        if (charIndex < randomStrings[textIndex].length) {
          currentText += randomStrings[textIndex][charIndex];
          setRandomText(currentText);
          charIndex++;
        } else if (!lineFinished) {
          lineFinished = true;
          currentText += '\n';
          setRandomText(currentText);

          setTimeout(() => {
            textIndex++;
            charIndex = 0;
            lineFinished = false;
            typeNextChar(); //start next line
          }, 1200); //pause after each line
        }
      } else {
        lineFinished = true;
        // paramValue = null;
      }
    };

    const textInterval = setInterval(() => {
      if (!lineFinished) {
        typeNextChar();
      }
    }, 65);

    return () => {
      clearInterval(textInterval);
    };
  }, []);

  return (
    <>
      {paramValue && modal ?
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded'>
          <div className="modal-content p-5 rounded">
            <p>Received parameter: {paramValue}</p>
            <pre className="random-text">{randomText}</pre>
          </div>
        </div>
        : null}
    </>
  )
}
export default dark;
