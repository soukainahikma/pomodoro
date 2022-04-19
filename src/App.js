
import { faPause, faPlay, faRepeat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import classes from './App.module.css'
import BreakLength from './BreakLength';
import Clock from './Clock';
import SessionLength from './SessionLength';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [secondtimer, setSecondTimer] = useState();

  const [minutes, setMinutes] = useState(25);
  const [minutetimer, setMinuteTimer] = useState();

  function start() {
    const secondtimer = setInterval(
      () => {
        setSeconds((seconds) => seconds - 1)
        if (seconds === 0)
          clearInterval(secondtimer);
      }
      , 1000)
      const minutetimer = setInterval(
        () => {
          setMinutes((minutes) => minutes - 1)
          if (minutes === 0)
            clearInterval(minutetimer);
        }
        , 60000)
    setSecondTimer(secondtimer)
    setMinuteTimer(minutetimer)
  }

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(secondtimer);
      clearInterval(minutetimer);
    }
  }, [seconds, secondtimer, minutetimer]);

  useEffect(() => {
    return () => {
    clearInterval(secondtimer);
    clearInterval(minutetimer);}
  }, [secondtimer, minutetimer]);
  function pause() {
    clearInterval(secondtimer);
    clearInterval(minutetimer);
  }

  function reset() {
    setMinutes(25)
    setSeconds(60)
    clearInterval(secondtimer);
  }
  return (
    <div className={classes.app}>
      <div>25 + 5 Clock</div>
      <div className={classes.appInfo}>
        <BreakLength />
        <SessionLength />
      </div>
      <Clock seconds={seconds} minutes={minutes}/>
      <div className={classes.appButtons}>
        <button onClick={start}><FontAwesomeIcon icon={faPlay} /></button>
        <button onClick={pause}><FontAwesomeIcon icon={faPause} /></button>
        <button onClick={reset}><FontAwesomeIcon icon={faRepeat} /></button>
      </div>
    </div>
  );
}

export default App;
