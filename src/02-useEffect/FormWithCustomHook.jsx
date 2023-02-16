
import { useEffect } from 'react'
import { useForm } from '../hooks/useForm'

export const FormularioWithCustomHook = () => {

  const { formState, onInputChange, username, email, password, onResetForm} = useForm({
    username: '',
    email: '',
    password: '',
  })

//   const {username, email, password} = formState;

   const onReset = () => {

   }


  return (
   <>
   <h1>FormularioWithCustomHook</h1>
   <hr />

   <input 
   className='form-control' 
   type="text"
    placeholder="Username"
    name='username' 
    value={username}
    onChange={onInputChange}/>

   <input 
   className='form-control mt-2' 
   type="email"
    placeholder="tabatha@gmail.com"
    name='email'
    value={email}
    onChange={onInputChange} />

   <input 
   className='form-control mt-2' 
   type="password"
    placeholder="password"
    name='password'
    value={password}
    onChange={onInputChange} />

    <button className='btn btn-primary mt-2' onClick={onResetForm}> Borrar </button>

   </>
  )
}
