import { useState, useEffect } from 'react';
import wordle_trauma from './assets/wordle-trauma.png';
import truth_text from './assets/truth.txt?raw';
import './App.css';

function App() {
  const [time, setTime] = useState();
  const [truth, setTruth] = useState();

   useEffect(() => {
      const interval = setInterval(() => {
        setTime(getTimeToMidnight());
      }, 1000);
   }, [])

  const getTimeToMidnight = () => {
    const now = new Date();

    const midnight = new Date(now);
    midnight.setDate(now.getDate() + 1);
    midnight.setHours(0, 0, 0);

    const timeDiff = midnight.getTime() - now.getTime();

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  }

  return (
    <>
      <div className='home'>
        <span className='blah'></span>
        <span className='title'> Next Wordle in: </span>
        {time ? <div className='timer'>
          {time.hours} hrs : {time.minutes} mins : {time.seconds} secs
        </div> : <span className='timer'>Getting your time...</span>}
        <button onClick={() => setTruth(!truth)}>TRUTH</button>

        <div className='truth'>
          {truth ? <img className='truth-image' src={wordle_trauma}/>
          : null}
          {truth ? <div className='truth-text'>
            {truth_text}
          </div>
          : null}
        </div>
      </div>
    </>
  )
}

export default App