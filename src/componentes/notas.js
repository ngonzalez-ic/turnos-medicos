import React, {useState} from 'react'
import useForm from 'react-hook-form'

const Nota=()=>{


    const { register, handleSubmit, errors } = useForm({
      mode: "onChange"
    }); // initialise the hook
    const onSubmit = (data, e) => {
      e.target.reset(); // reset after form submit
      alert(JSON.stringify(data));
      console.log(data);
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>

        <input name="Nombre" ref={register} /> {/* register an input */}
  
        <input name="Apellido" ref={register({ required: true })} />
        {errors.lastname && 'Last name is required.'}

        <input type='email' name="email" ref={register({ required: true })} />
        {errors.lastname && 'Last name is required.'}
  
        <input name="dni" ref={register({ pattern: /\d+/ })} />
        {errors.age && 'Please enter number for age.'}

        <input name="edad" ref={register({ pattern: /\d+/ })} />
        {errors.age && 'Please enter number for age.'}

        <select name='orige' ref={register({ required: true })} >
          <option>Argentino</option>
          <option>Brasil</option>
          <option>Chile</option>

        </select>
        
        <input type="submit" />
      </form>
    );
}
export default Nota