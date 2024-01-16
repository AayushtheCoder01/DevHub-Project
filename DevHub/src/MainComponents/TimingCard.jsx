import React from 'react'
import { useEffect } from 'react'
import { useState, useRef } from 'react'
import Stopwatch from '../Components/Stopwatch'
import Timer from '../Components/Timer'

function Timing() {
    const [mode, setMode] = useState(true)
    const StopBtn = useRef('')
    const timerBtn = useRef('')

    useEffect(() => {
        if (mode === true) {
            timerBtn.current.style.backgroundColor = 'transparent'
            StopBtn.current.style.backgroundColor = '#3b82f6'
        }
        if (mode === false) {
            StopBtn.current.style.backgroundColor='transparent'
            timerBtn.current.style.backgroundColor='#3b82f6'
        }
    }, [mode])
  return (
    <>
    <div className='flex justify-center w-full my-5'>
        <div className='bg-slate-500 p-1 rounded-3xl'>
            <button ref={StopBtn} onClick={() => setMode(true)} name='stopwatch' className='mr-1 text-white p-2 rounded-3xl'>StopWatch</button>
            <button ref={timerBtn} onClick={() => setMode(false)} name='timer' className='ml-0 text-white p-2 px-6 rounded-3xl'>Timer</button>
        </div>
    </div>

    <div className=''>
    {mode ? <Stopwatch/> : <Timer/>}
    </div>
    </>
  )
}

export default Timing