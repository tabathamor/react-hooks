import { useState, useEffect } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Tabatha',
        email: 'tabatha@gmail',
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        console.log({name, value});
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        // console.log('email change');
    }, [email])




  return (
   <>
   <h1>SimpleForm</h1>
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

   

    {
        (username === 'admin') &&  <Message />
    }

   </>
  )
}
