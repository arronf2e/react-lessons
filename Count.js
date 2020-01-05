import React, { useState, useEffect } from 'react'

export default function Count() {

  const [count, setCount] = useState(0)

  const test = useState(0)

  useEffect(() => {
    console.log(count)
  }, [count])

  return (
    <div>
      <div>
        {count}
      </div>
      <button onClick={() => setCount(count + 1)}>加一</button>
    </div>
  )
}