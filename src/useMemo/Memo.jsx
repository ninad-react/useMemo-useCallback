import React, { useMemo } from 'react'
import { useState } from 'react'

const Memo = (props) => {

    const [counterOne, setCounterOne]= useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const isEven = useMemo(() => {
        let i = 0;

        while(i<2000000000) i++;
        return counterOne % 2 === 0;
    }, [counterOne])

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

  return (
    <div>
        <button onClick={incrementOne}>Counter - {counterOne}</button>
        <button onClick={incrementTwo}>Counter - {counterTwo}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
    </div>
  )
}

export default Memo