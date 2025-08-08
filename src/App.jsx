import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState();

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
        <span className='title'> Next Wordle in: </span>
        {time ? <div className='timer'>
          {time.hours} hours: {time.minutes} minutes: {time.seconds} seconds
        </div> : <span className='timer'>Getting your time...</span>}
      </div>
    </>
  )
}

export default App