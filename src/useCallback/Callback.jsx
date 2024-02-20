import React, { useCallback, useState } from 'react'
import ChildA from './ChildA';

const Callback = () => {

    const[add, setAdd] = useState(0);
    const[count, setCount] = useState();
    
    const learning = useCallback(() => {
        //some opeartion
    },[])

  return (
    <>
        <ChildA learning={learning} count={count}/>
        <h1>Callback</h1>
        <h1>{add}</h1>
        <button onClick={() => setAdd(add  + 1)}>Addition</button>
    </>
  )
}

export default Callback