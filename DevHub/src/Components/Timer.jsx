import React from 'react'
import './Component.css'
import { useState, useEffect } from 'react'
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

export default function Timer() {

    const [run, setRun] = useState(false)
    const [seconsds, setSeconds] = useState(60)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    let interval;

    function setterSec() {
        setSeconds((prev) => prev-1)
    }

    useEffect(() => {
        if(seconsds === 0) {
            if(minutes !==0 || hours !== 0) {
                setMinutes((prev) => prev-1)
                setSeconds(60)
            } else if (hours===0 && minutes>0) {
                setMinutes((prev) => prev-1)
                setSeconds(60)
            }
            else {
                setRun(prev => !prev)
                setSeconds(1)
            }
        }
    }, [seconsds])

    useEffect(() => {
        if(minutes=== -1) {
            if(hours>0) {
                setHours((prev) => prev-1)
                setMinutes(59)
            }
        }
    }, [minutes])

    useEffect(() => {
    
        if (run === true && seconsds !== 0) {
          interval = setInterval(setterSec, 1000);
        }

        return () => clearInterval(interval);
      }, [run]);


      function checkAndSetSeconds(e) {
        if (e.target.value<=0) setSeconds(1)

        else if(e.target.value>60) setSeconds(60)

        else setSeconds(e.target.value)
      }

      function resetTimer() {
        setSeconds(60)
        setMinutes(0)
        setHours(0)
        setRun(prev => !prev)
      }

      function checkAndSetMinutes(e) {
        if (e.target.value<0) setMinutes(1)

        else if(e.target.value>60) setMinutes(60)
        
        else setMinutes(e.target.value)
        
      }

      function checkAndSetHours(e) {
        if (e.target.value<0)
            if(minutes !== 0) setHours(0)

            else setHours(1)

        else if(e.target.value>24) setHours(24)

        else setHours(e.target.value)
      }

  return (
    <>
    <div className=' my-20'>

    <div className='stopwatch-main'>
        <div className='elem-divs text-4xl sm:text-6xl'>
            <input onChange={checkAndSetHours} value={hours}  type='number' max={24} min={0}/>
            {/* {hours} */}
            <sub>
                <span className='text-lg text-white p-1'>hrs</span>
            </sub>
        </div>
        <div className='elem-divs text-4xl sm:text-6xl'>
        <input onChange={checkAndSetMinutes} value={minutes} type='number' max={59} min={0}/>

            <sub>
                <span className='text-lg text-white p-1'>min</span>
            </sub>
        </div>
        <div className='elem-divs text-4xl sm:text-6xl'>
        <input onChange={checkAndSetSeconds} value={seconsds} type='number' max={60} min={1}/>

            <sub>
                <span className='text-lg text-white p-1'>sec</span>
            </sub>
        </div>
    </div>

    <div className='flex py-1 justify-center'>
        <button onClick={() => setRun(prev => !prev)} className='stopwatchRun-btn bg-green-600 p-3 rounded-xl'>{run ? <FaPause color='white'size={25} /> : <FaPlay color='white'size={25} />} </button>
        {run ? <button onClick={resetTimer} className='stopwatchRun-btn bg-green-600 p-3 rounded-xl'><GrPowerReset color='white'size={25}/></button> : '' }

    </div>

    </div>
    </>
  )
}
