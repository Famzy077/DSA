import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const Login = () => {
    const [formData, setFormData] = useState({email: '', password: ''})
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: [e.target.value]})
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/auth/user', formData);
            localStorage.setItem('token', res.data.token);
            alert('Login Successfully!')
        } catch (error) {
            console.error(error, 'An error occur');
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name='email' onChange={handleChange} placeholder='enter your email'/>
        <input type="password" name='password' onChange={handleChange} placeholder='enter your password'/>
        <input type="submit" value='Submit'/>
      </form>
    </div>
  )
}

export default Login
