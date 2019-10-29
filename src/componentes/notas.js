import React, {useState}  from'react';




const Nota=()=>{
 const[add_nota,setNota]=useState(0);

return <div>
<input type='text' 
placeholder='aqui su nota'
/>

 <button>
add note
 </button>

</div>
}

export default Nota