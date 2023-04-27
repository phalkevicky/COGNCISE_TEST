import { React, useContext, useState } from 'react'
import logo from '../../assets/images/logo.svg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { Api } from '../constant/Api';
import { Context } from '../constant/Context';

const Login = () => {

    const [eyeicon, seteyeicon] = useState(false)
    const [isloggedin, setisloggedin] = useContext(Context) //context


    const navigate = useNavigate()

    //Css of icon and button 
    const iconStyle = {

        color: '#9FA2B4',
        fontSize: 18,
        position: "relative",
        left: '85%',
        top: '-30px',
        cursor: 'pointer'
    }

    const buttonStyle = {

        backGround: '#3751FF',
        width: "100%",
        textTransform: "capitalize"
    }

    // hide/unhide password

    const showIcon = () => {
        seteyeicon(!eyeicon)
    }

    // Get email and pwd

    const [email, setemail] = useState("")
    const [pwd, setpwd] = useState("")
    const [pwderror, setpwderror] = useState(false)
    const [error, seterror] = useState("")

    const handleEmail = (e) => {

        let value = e.target.value
        setemail(value)
    }
    const handlePwd = (e) => {

        let value = e.target.value
        setpwd(value)
    }

    //navToDashboard


    const navToDashboard = () => {
       
        const postData = {

            email: email,
            password: pwd
        }
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postData),
        }
        if ((email == "" || pwd == "") || (email !== "" && pwd == "") || (email == "" && pwd !== "")) {
            setpwderror(true)
            setisloggedin(true)
            navigate('/dashboard')
            
        } else if (email !== "" && pwd !== "") {
            setpwderror(false)
            fetch(Api.login, requestOptions).then((res) => res.json()).then((res) => {

                if (res?.token) {
                    setisloggedin(true)
                    navigate('/dashboard')

                } else {
                    seterror(res?.error)
                }

            }).catch((error) => {
                console.log("error", error);
            })
        }
    }

    const signup = ()=>[
        navigate('/signup')
    ]
    return (
        <div className='login_wrap'>
            <div className='login_main'>
                <div className='login_logo'>
                    <div>

                        <img src={logo} alt="logo" width={50} />
                        <div className='logo_text'>Dashboard Kit</div>
                    </div>
                    <div>
                        <p className='dashboard_text'>Log In to Dashboard Kit</p>
                        <div className='dashboardpwd_text'>Enter your email and password below</div>
                    </div>

                </div>
                <div className='login_input'>
                    <div className='input_wrap'>
                        <label >Email</label>
                        <input onChange={handleEmail} autoComplete="off" type="text" placeholder='Email address' />
                    </div>
                    <div className='input_wrap input2'>
                        <div className='pwdtxt_wrap'>
                            <label >Password</label>
                            <span className='forgot_pwd'>Forgot password?</span>
                        </div>

                        <input onChange={handlePwd} autoComplete="new-password" type={eyeicon ? "text" : "password"} placeholder='Password' />
                        {
                            eyeicon ? <VisibilityIcon onClick={showIcon} sx={iconStyle} /> : <VisibilityOffIcon onClick={showIcon} sx={iconStyle} />

                        }


                    </div>
                    {
                        pwderror && <div style={{ color: 'red', textAlign: 'left', marginBottom: 10 }}>Incorrect Email or Password</div>
                    }
                    {
                        error && <div style={{ color: 'red', textAlign: 'left', marginBottom: 10 }}>{error}</div>
                    }
                </div>
                <div style={{ width: '95%' }}>
                    <Button onClick={navToDashboard} variant="contained" sx={buttonStyle} >Log In</Button>
                    <p className='dashboardpwd_text'>Don't have an account? <span className='signup' onClick={signup}>Sign up</span></p>
                </div>
            </div>
        </div>
    )
}

export default Login