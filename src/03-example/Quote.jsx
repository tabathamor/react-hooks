import { useState } from "react";
import { useLayoutEffect, useRef } from "react"

export function Quote({ quote,  author}) {

  const pRef= useRef();
  const [ boxSize, setBozSize ] =  useState({width: 0, height: 0})


  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBozSize({ width, height })
  }, [quote])

  return (
   <>
    <blockquote 
        className="blockquote mb-0"
        style={{ display: 'flex'}}
    >
                <p ref={pRef} className="mb-1"> {quote} </p>
                <footer className="blockquote-footer">{author}</footer>
     </blockquote>
     <code>{ JSON.stringify(boxSize)}</code>
   </>
  )
}

