import React, { useRef, useState } from 'react'
import './SignUp.css'

function SignUp() {
    const [email ,setEmail] = useState('')
    const [emailValid,setEmailValid] = useState(false);

    const [password, setPassword] = useState('');
    const [passValid, setPassValid] = useState(false);

    const [confirmPass ,setConfirmPass] = useState('')
    const [confirmPassValid, setConfirmPassValid] = useState(false);

    const emailValidation = (event) => {
        setEmail(event.target.value);
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
        setEmailValid(emailRegex.test(event.target.value))
    }

    const passwordValidation = (event) => {
        setPassword(event.target.value)
        setPassValid(()=>{
            console.log(password.length);
            if(password.length >= 7){
                return true
            }else{
                return false
            }
        })
    }

    const confirmPassValidation = (event)=>{
        setConfirmPass(event.target.value)
        if(event.target.value === password){
            setConfirmPassValid(true);
        }else{
            setConfirmPassValid(false);
        }
    }

    const submitForm = () => {
        if(emailValid && passValid && confirmPassValid){
            alert('Submitted Successfully')
        }else{
            alert('Form Cannot be submitted')
            
        }
    }

    const handleFocus=(event)=>{
        event.target.classList.add('pending')
    }

    const handleBlur =(event) => {
        event.target.classList.remove('pending')
    }
    
  return (
    <div className='signup_wrapper'>
        <div className='email_div'>
            <label htmlFor="emailAdd">Email:</label>
            <input 
                type="email" 
                className={emailValid ? 'email_Add valid' : 'email_Add'} 
                id='emailAdd' 
                onChange={emailValidation}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            {!emailValid && 
            <p className='email_error' id='emailError'>Invalid Email Format </p>
            }
            
        </div>
        <div className='pass_div'>
            <label htmlFor="passWord">Password:</label>
            <input type="password" className='pass_Word' id='passWord'
                onChange={passwordValidation} 
                onFocus={handleFocus}
                onBlur={handleBlur}
                />
            {!passValid && <p className='pass_error' id='passError'>Password should contain at least 8 characters</p>}
            
        </div>
        <div className='consfirmpass_div'>
            <label htmlFor="consfirmpassWord">Confirm Password:</label>
            <input type="password" 
                className='consfirmpass_Word' 
                id='consfirmpassWord' 
                onChange={confirmPassValidation} 
                onFocus={handleFocus}
                onBlur={handleBlur}/>
            {!confirmPassValid && <p className='consfirmpass_error' id='consfirmpassError'>Password do not match</p>}
        </div>
        <button className='btn' onClick={submitForm}>Submit</button>
    </div>
  )
}

export default SignUp
