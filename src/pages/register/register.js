import React, { useState } from 'react'
import './register.css'
import NavBar from '../home/NavBar/NavBar.js'
import { useNavigate } from 'react-router-dom'
//import { writeFile } from 'fs'

const Register = (props) => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [nameError, setNameError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    var data = require('../users.json')

    const navigate = useNavigate()

    const onButtonClick = () => {
        setNameError('')
        setPasswordError('')

        if ('' === name) {
            setNameError('Please enter your name')
            return
        }

        if ('' === password) {
            setPasswordError('Please enter a password')
            return
        }

        if (password.length < 7) {
            setPasswordError('The password must be 8 characters or longer')
            return
        }

        const user = data.users.find(x => x.userName === name)
        if (user !== undefined){
            setNameError('Invalid name')
            return;
        }

        data.users.push({
            "userName" : name,
            "password" : password,
        })

        //me falta descargar el modulo este

        //var fs = require('fs')
        //fs.writeFile('../users.json', data)

        localStorage.setItem('user', name)
        props.setLoggedIn(true)
        props.setName(name)
        navigate('/')

    }

    return (
        <>
            <NavBar/>
            <div className={'mainContainer'}>
                <div className={'titleContainer'}>
                    <div>Create Account</div>
                </div>
                <br/>
                    <div className={'inputContainer'}>
                        <input
                        value={name}
                        placeholder="Enter your name here"
                        onChange={(ev) => setName(ev.target.value)}
                        className={'inputBox'}
                        />
                        <label className="errorLabel">{nameError}</label>
                    </div>
                <br />
                    <div className={'inputContainer'}>
                        <input
                        value={password}
                        placeholder="Enter your password here"
                        onChange={(ev) => setPassword(ev.target.value)}
                        className={'inputBox'}
                        />
                        <label className="errorLabel">{passwordError}</label>
                    </div>
                <br />
                <div className={'inputContainer'}>
                    <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
                </div>
            </div>
        </>
    )
}

export default Register