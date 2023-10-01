
import React from 'react';
import { useContext, useEffect, useState } from 'react';
export interface Props{
  text: string,
  finished: () => void
}

const FlashingContainer = ({text, finished} : Props) => {
  const [word, setWord] = useState('test');
  const setWordsWithDelay = (words:string[], finished:() =>void, timeout = 180) => {
    let index = 0;
  
    const intervalId = setInterval(() => {
      if (index < words.length) {
        const word = words[index];
        setWord(word); 
  
        index++;
      } else {
          finished();
        clearInterval(intervalId);
      }
    }, timeout); 
  };

  useEffect(() => {
      const words = text.split(/[^a-zA-Z.?]+/);
      setWordsWithDelay(['3','2','1'], () => setWordsWithDelay(words, finished));

      ;

  },[])

  return (    <div className="flash-container">
      {word}
    </div>)
  
};

export default FlashingContainer;