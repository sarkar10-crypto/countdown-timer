import React from 'react'

const DisplayCon = (props) => {
    const {Hours,Minutes,Seconds,isstop,HandleResume,HandleStop,resetHandler } = props;
  return (
    <div className='diplay-container'>
        <div className='input-box'>
          <input id='Hrs' placeholder='Hrs' value={Hours<10 ?`0${Hours}` : Hours}></input>
          <input id='Min' placeholder='Min' value={Minutes<10 ? `0${Minutes}`:Minutes}></input>
          <input id='Sec' placeholder='Sec' value={Seconds<10 ? `0${Seconds}` : Seconds}></input>
        </div> 
        <div className='action-btn'>
            {
              !isstop && <button  className='start-btn' onClick={HandleStop}>STOP</button>
            }
            {
              isstop&&<button  className='start-btn' onClick={HandleResume}>RESUME</button>
            }
        <button  className='start-btn' onClick={resetHandler}>RESET</button>
      </div> 
      </div>
  )
}

export default DisplayCon
