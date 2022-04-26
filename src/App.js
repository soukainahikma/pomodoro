
import { faPause, faPlay, faRepeat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import classes from './App.module.css'
import BreakLength from './BreakLength';
import Clock from './Clock';
import SessionLength from './SessionLength';

function App() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [secondtimer, setSecondTimer] = useState();
  const [check, setChecker] = useState(true);

  function start() {
    const secondtimer = setInterval(
      () => {
        setSeconds((seconds) => seconds - 1)
        if (seconds === 0)
          clearInterval(secondtimer);
      }
      , 1000)
    setSecondTimer(secondtimer)
  }

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(secondtimer);
    }
  }, [seconds, secondtimer]);

  useEffect(() => {
    return () => {
      clearInterval(secondtimer);
    }
  }, [secondtimer]);
  function pause() {
    clearInterval(secondtimer);
  }

  function reset() {
    setSeconds(25 * 60)
    clearInterval(secondtimer);
  }

  return (
    <div className={classes.app}>
      <div>25 + 5 Clock</div>
      <div className={classes.appInfo}>
        <BreakLength seconds={seconds} secondSetter={setSeconds}  checker={check} />
        <SessionLength second={seconds} secondSetter={setSeconds} checker={check} />
      </div>
      <Clock seconds={seconds} checker={check} setChecker={setChecker}/>
      <div className={classes.appButtons}>
        <button onClick={start}><FontAwesomeIcon icon={faPlay} /></button>
        <button onClick={pause}><FontAwesomeIcon icon={faPause} /></button>
        <button onClick={reset}><FontAwesomeIcon icon={faRepeat} /></button>
      </div>
    </div>
  );
}

export default App;
