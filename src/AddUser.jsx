import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import axios from 'axios';
import {ApiUrl} from './ApiUrl.jsx'
export default function AddUser({userCall}) {
  const [name,setName]=useState("")
  const [roll,setRoll]=useState("")
  const handleSubmit= async()=>{
  await axios.post(ApiUrl,{
    name,
    roll
  })

setName('')
setRoll('')
userCall()
  }
  return (
    <div>
        <h2>ADD USER</h2>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <input type="text" name="name" onChange={(e)=>{setName(e.target.value)}} value={name} className="form-control"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Roll</Form.Label>
        <input type="text" name="roll" onChange={(e)=>{setRoll(e.target.value)}} value={roll}  className="form-control" />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit} type="button">
        Submit
      </Button>
    </Form>
    </div>
  )
}
