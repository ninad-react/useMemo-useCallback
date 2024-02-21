import React, { useCallback, useState } from 'react'

const CallBackExample = () => {

    const[count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default CallBackExample