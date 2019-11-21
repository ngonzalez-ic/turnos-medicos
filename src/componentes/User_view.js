import React, {useState,useEffect} from 'react'
import firebase from '../config/config'



function User_view (){
    const [times,setUser]=useState([])

    useEffect(()=>{
        firebase
        .firestore()
            .collection('times')
            .onSnapshot((snapshot)=>{
                debugger
                const New_user=snapshot.docs.map((doc)=>({
                    id:doc.id,
                    ...doc.data()
                }))

                setUser(New_user)
            })
        
    },[])
    return times
}

const User_list =()=>{
    const view = User_view() 
    console.log(view)
    return <div>
        <h1>SFASd5555DFASDF</h1>
        <ol>
            {view.map((data)=>
            <li key={view}>
                {<div>
                    <code>{view.llave}</code>
                    {view.Apellido}

                </div> }

            </li>
            )}
        </ol>
    </div>
}

export default User_list