import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {

  const [counter, setCounter] = useState(10);
  const incrementFather = useCallback(
    () => {
    setCounter((value) => value + 1);
  },
  []
  )

  return (

    <>
      <h1>Callback Hook {counter}</h1>
      <ShowIncrement increment={incrementFather} />
    </>

  )
}
