import React from 'react'
import {Link}from 'react-router-dom'

const Autentification=()=>{
return<div>
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <Link to ='../pages/dashboard'>
  <button>login</button>
  </Link>
</form>
</div>
}
export default Autentification 