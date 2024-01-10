import React, { useEffect, useState } from 'react'

function Timer() {
    const [sec, setsec] = useState();
    const [min, setmin] = useState();
    const [hour, sethour] = useState();

    useEffect(() => {
        startTimmer()
    }, []);

    let interval;

    const startTimmer = () => {
        const countDounDate = new Date('May 30,2022').getTime()
        // console.log(countDounDate);

        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countDounDate - now;

            // const days = Math.floor(distance / (24 * 60 * 60 * 1000))
            const hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000) / (1000 * 60 * 60))
            )

            const minutes = Math.floor(
                (distance % (60 * 60 * 1000) / (1000 * 60))
            )

            const seconds = Math.floor(
                (distance % (60 * 1000) / (1000))
            )
            // console.log(days);

            if (distance < 0) {
                //stop timmer
                clearInterval(interval.current)
            } else {
                //update
                sethour(hours)
                setmin(minutes)
                setsec(seconds)
            }
        })
    }

    startTimmer()

    return (
        <>
            <div style={{backgroundColor:'#F0FFFF', padding:'5px'}} className='text-center'>
               <p style={{fontSize:'30px',  color:'black'}}>Sale Ends In <b>{`${hour} h: ${min} m: ${sec} s`}</b></p>
            </div>
        </>
    )
}

export default Timer