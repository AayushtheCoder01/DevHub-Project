import React from 'react'
import './Component.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";


function Stopwatch() {
    const [run, setRun] = useState(false)
    const [seconsds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [localMin, setLocalMin] = useState(0)
    const [localHour, setLocalHour] = useState(0)

    const currentDate = new Date();
    const dayOfMonth = currentDate.getDate();
    Number(dayOfMonth)
    
    function setterSec() {
        setSeconds((prev) => prev+1)

    }

    function changeState() {
        if (run===false){
            setRun(true)
        } 
        if(run===true) {
            setRun(false)
        }
    }

    useEffect(() => {
        let getMinute = localStorage.getItem('Minutes')
        setLocalMin(JSON.parse(getMinute))
        let getHour = localStorage.getItem('Hours')
        setLocalHour(JSON.parse(getHour))
      }
      ,[minutes, hours])

    // reset stopwatch
    function resetTimer() {
        localStorage.setItem('Minutes', localMin + minutes)
        localStorage.setItem('Hours', localHour + hours)
        localStorage.setItem('date',dayOfMonth)
        setSeconds(0)
        setMinutes(0)
        setHours(0)
        setRun(prev => !prev)
        setLocalTime()
      }
      function setLocalTime () {
        if (localMin==60) {
            localStorage.setItem('Minutes', 0)
            localStorage.setItem('Hours', localHour + 1)
        }
      }

    useEffect(() => {
        if(seconsds === 60) {
            setMinutes((prev) => prev+1)
            setSeconds(0)
        }
    }, [seconsds])

    useEffect(() => {
        if(minutes===60) {
            setHours((prev) => prev+1)
            setMinutes(0)
        }
    }, [minutes])

    useEffect(() => {
        let interval;
    
        if (run === true) {
          interval = setInterval(setterSec, 1000);
        }

        return () => clearInterval(interval);
      }, [run]);

      useEffect(() => {

        let getDate = parseInt(localStorage.getItem('date'))
        // Clear localStorage if it's a new day
        const currentDate = new Date();
        const dayOfMonth = currentDate.getDate();
        if (getDate !== dayOfMonth) {
          localStorage.clear();
          localStorage.setItem('date', dayOfMonth);
        }
      }, []);

  return (
    <>
    <div className=' my-20'>

    <div className='stopwatch-main'>
        <div className='elem-divs text-4xl sm:text-6xl'>{hours}
            <sub>
                <span className='text-lg text-white p-1'>hrs</span>
            </sub>
        </div>
        <div className='elem-divs text-4xl sm:text-6xl'>{minutes}
            <sub>
                <span className='text-lg text-white p-1'>min</span>
            </sub>
        </div>
        <div className='elem-divs text-4xl sm:text-6xl'>{seconsds}
            <sub>
                <span className='text-lg text-white p-1'>sec</span>
            </sub>
        </div>
    </div>

    <div className='flex py-1 justify-center'>
        <button onClick={changeState} className='stopwatchRun-btn bg-green-600 p-3 rounded-xl'>{run ? <FaPause color='white'size={25} /> : <FaPlay color='white'size={25} />} </button>
        {run ? <button onClick={resetTimer} className='stopwatchRun-btn bg-green-600 p-3 rounded-xl'><GrPowerReset color='white'size={25}/></button> : '' }
    </div>

    <h2 className='text-white text-3xl text-center mt-20 mb-10 font-semibold'>Today's Total Time </h2>
    <div className='flex justify-center'>
    <div className='elem-divs w-30 mx-4 text-4xl sm:text-6xl'>{localHour}
            <sub>
                <span className='text-lg text-white p-1'>hrs</span>
            </sub>
        </div>
    <div className='elem-divs mx-4 w-30 text-4xl sm:text-6xl'>{localMin}
            <sub>
                <span className='text-lg text-white p-1'>min</span>
            </sub>
        </div>
    </div>
    </div>
    </>
  )
}

export default Stopwatch