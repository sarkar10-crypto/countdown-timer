import React from 'react'

const InputCon = ({HandleInput,startHandler}) => {
  return (
    <div className='input-container'>
        <div className='input-box'>
          <input onChange={HandleInput} id='Hrs' placeholder='Hrs'></input>
          <input onChange={HandleInput} id='Min' placeholder='Min'></input>
          <input onChange={HandleInput} id='Sec' placeholder='Sec'></input>
        </div>
        <button className='start-btn' onClick={startHandler}  >START</button>
      </div>
  )
}

export default InputCon;
