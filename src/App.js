import './App.css';
import { useEffect, useState } from 'react';
import InputCon from './Components/inputCon';
import DisplayCon from './Components/displaycon';

function App() {
  const [isstart, setisstart] = useState(false);
  const [isstop, setisstop] = useState(false);
  const [Hours, setHours] = useState(0);
  const [Minutes, setMinutes] = useState(0);
  const [Seconds, setSeconds] = useState(0);
  const [timerId, settimerId] = useState(0);
   

  const startHandler = () => {
    // agar koi input nahin dal ke start kia toh ek alert mssg print karo.
    if (Hours < 0 || Minutes < 0 || Seconds <= 0) {
      alert("please Enter Input 😊");
      return;
    }
    else {
      setisstart(true);
    }  
  }
  const resetHandler = () => {
    setisstart(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

  const HandleStop = () => {
    setisstop(true);
    clearInterval(timerId);
  }
  const HandleResume = () => {
    setisstop(false)
    runTimer(Seconds,Minutes, Hours)
  }

  const HandleInput = (e) => {
    console.log(e.target.id, e.target.value);
    const value = parseInt(e.target.value);
    const id = e.target.id;
    if (id === "Hrs") {
      setHours(value);
    }
    else if (id === "Min") {
      setMinutes(value);
    }
    else {
      setSeconds(value);
    }
    
  }

  const runTimer = (sec,min,hrs,tid) => {
    if (sec > 0) {
      setSeconds((s) => s - 1);
    }
    else if (sec === 0 && min > 0) {
      setMinutes((m) => m - 1);
      setSeconds(59);
    }
    else {
      setHours((h) => h - 1);
      setMinutes(59);
      setSeconds(59);
    }

    // -ve timming ko resolve kar rahe hai
    if (sec === 0 && min === 0 && hrs === 0) {
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      clearInterval(tid);
      alert("Wait is Over 😊")
      return;
    }
  }
   

  // for tracking the values of timmer we are using UseEffect

  useEffect(() => {
    let tid;
    if (isstart) {
      tid = setInterval(() => {
        //logic hoga yaha..
        runTimer(Seconds,Minutes,Hours,tid);
      }, 1000)
      settimerId(tid);
    }
    
    return () => {
      clearInterval(tid);
     }
  }, [isstart,Hours,Minutes,Seconds])
  
  
  
  
  
  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      {
        !isstart && <InputCon startHandler={startHandler} HandleInput={HandleInput} />
      }

      {
        isstart && <DisplayCon Hours={Hours} Minutes={Minutes} Seconds={Seconds} isstop={isstop}   resetHandler={resetHandler} HandleResume={HandleResume} HandleStop={HandleStop} />
      }
    </div>
  );
}

export default App;
