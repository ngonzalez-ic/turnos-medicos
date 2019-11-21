import React, {useState} from 'react'
import useForm from 'react-hook-form'
import firebase from '../config/config'


const Nota=()=>{


    const { register, handleSubmit, errors } = useForm({
      mode: "onChange"
    }); // initialise the hook
    const onSubmit = (data, e) => {
      e.target.reset(); // reset after form submit
      alert(JSON.stringify(data));
      console.log(data);
      firebase 
      .firestore()
      .collection('times')
      .add({
      data
      })
      
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
          <option value ="Argentina">Argentino</option>
          <option value ="Brasil">Brasil</option>
          <option value ="Chile">Chile</option>

        </select>
        
        <input type="submit" />
      </form>
    );
}
export default Nota