import React, {useRef} from 'react'

export default function UseRef() {

  const inputEl = useRef(null)

  console.log(inputEl, 'inputEl')

  function onButtonClick() {
    inputEl.current.focus()
  }

  return (
    <>
      <input ref={inputEl} type="text"/>
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  )
}