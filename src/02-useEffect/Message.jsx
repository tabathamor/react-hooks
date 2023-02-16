import { useEffect } from "react"


export const Message = () => {

    useEffect(() => {

        const onMoveMouse = ( { x, y}) => {
            const coords = {x, y};
        }
        window.addEventListener('mousemove', onMoveMouse);
        
        return() => {
            window.removeEventListener('mousemove', onMoveMouse);
        }
    }, [])



  return (
    <>
    <h3>Usuario ya existe</h3>
    </>
  )
}
