import React, { useCallback, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)


  // 1) ❌ If you DON'T use useCallback → this function is recreated on every render
  // const handleIncrement = () => {
  //     setCount(count + 1);
  // };

  // 1) ✅ Using useCallback (keeps same reference)
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 10);
  }, []); // no dependencies → function created only once

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default App