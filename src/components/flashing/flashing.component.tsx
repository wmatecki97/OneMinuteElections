
import React from 'react';
import { useContext, useEffect, useState } from 'react';
export interface Props{
  text: string,
  finished: () => void
}

const FlashingContainer = ({text, finished} : Props) => {
  const [word, setWord] = useState('test');
  const setWordsWithDelay = (words:string[]) => {
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
    }, 150); 
  };

  useEffect(() => {
      const words = text.split(/[^a-zA-Z]+/);
      setWordsWithDelay(words);

  },[])

  return (    <div className="flash-container">
      {word}
    </div>)
  
};

export default FlashingContainer;