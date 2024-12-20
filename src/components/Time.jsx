import React from 'react'
import format from 'date-fns/format';


export default function Time(){
    const time = useTime();

    return (
        <>
            <p className = " absolute top-[1rem] right-[.5rem] ">
                { format( time, 'hh:mm:ss a' ) }
            </p>  
        </>
    )
}
function useTime() {
    const [ time, setTime ] = React.useState( new Date() );

    React.useEffect( () => {
        const intervalId = window.setInterval( () => {
            setTime( new Date() );
        }, 1000)

        return () => {
            window.clearInterval( intervalId );
        }
    }, [])

    return time;
}