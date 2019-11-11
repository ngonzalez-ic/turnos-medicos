import React from 'react';
import firebase from '../config/config'


firebase.firestore().collection('times').add({
  title:'time',
best:555
})

const TestFirebase=()=>{
  return<div>

  <h1>Times</h1>
  </div>
}

export default TestFirebase