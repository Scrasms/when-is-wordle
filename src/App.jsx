import { useState, useEffect } from 'react';
import wordle_trauma from './assets/wordle-trauma.png';
import shenrong from './assets/shenrong.png';
import truth_text from './assets/truth.txt?raw';
import './App.css';

function App() {
  const [time, setTime] = useState();
  const [truth, setTruth] = useState(false);
  const [evan, setEvan] = useState(false);

   useEffect(() => {
      setInterval(() => {
        setTime(getTimeToMidnight());
      }, 1000);
   }, [])

  const getTimeToMidnight = () => {
    const now = new Date();

    const midnight = new Date(now);
    midnight.setDate(now.getDate() + 1);
    midnight.setHours(0, 0, 0);

    const timeDiff = midnight.getTime() - now.getTime();

    const years = 0;
    const months = 0;
    const days = 0;
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { years, months, days, hours, minutes, seconds };
  }

  return (
    <>
      <div className='home'>
        <span className='blah'></span>
        <span className='title'> Next Wordle in: </span>
        {time ? <div className='timer'>
          {time.years} yrs : {time.months} mnths : {time.days} days
          <br></br>
          {time.hours} hrs : {time.minutes} mins : {time.seconds} secs
        </div> : <span className='timer'>Getting your time...</span>}
        <div className='buttons-container'>
          <button onClick={() => setEvan(!evan)}>EVAN</button>
          <button onClick={() => setTruth(!truth)}>TRUTH</button>
        </div>

        {truth ? <img className='truth-image' src={wordle_trauma}/> : null}
        {truth ? <div className='truth-text'>
          {truth_text}
        </div>
        : null}

        {evan ? <img className='evan-image' src={shenrong} onClick={() => setEvan(!evan)}/> : null}
      </div>
    </>
  )
}

export default App