import React, { useCallback, useState } from 'react'
import Child from './Child';

function Parent() {
    const [count, setCount] = useState(0)

    // CASE - A
    // 1) ❌ If you DON'T use useCallback → this function is recreated on every render
    // 2) The reference of the function changes on every render
    // const handleIncrement = () => {
    //     setCount(count + 1);
    // };

    // ✅ Using useCallback (keeps same reference)
    const handleIncrement = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []); // no dependencies → function created only once



    
    console.log("Counter component re-rendered");
    
    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={handleIncrement}>Increment</button><br />

            {/* CASE - B */}
            <Child onClick={handleIncrement} />
        </>
    )
}

export default Parent