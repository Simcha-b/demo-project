import React from 'react'

function NumKey({number,click}) {
  return (
    <div>
        
        <button onClick={click}>{number}</button>
    </div>
  )
}

export default NumKey
