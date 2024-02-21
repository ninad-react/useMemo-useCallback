import React, { useCallback } from 'react'
import { useState } from 'react'
import ChildA from './ChildA';

const Callback = () => {

    const[add, setAdd] = useState(0);
    const[count, setCount] = useState(0);

    const learning = useCallback(() => {
        // some operations...
    }, [count])

  return (
    <>
        <h1>Learning useCallback</h1>
        <ChildA  learning={learning} count={count}/>
        <h1>{add}</h1>
        <button onClick={() => setAdd(add + 1)}>Addition</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 2)}>Count</button>
    </>
  )
}

export default Callback