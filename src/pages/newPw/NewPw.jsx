import React, { useState } from 'react'
import AuthLayout from "../../layouts/AuthLayout"
import "./newPw.scss"
import { CircularProgress } from '@mui/material'
import { Controller, useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack'
import { motion } from 'framer-motion'
import { smoothComeUp } from "../../utils/framerAnimations"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import OTPInput from 'react-otp-input';






const NewPw = () => {



    const { handleSubmit, register, formState: { errors }, control } = useForm();
    const [isLoading, setIsLoading] = useState(false)
    const [otp, setOtp] = useState('');
    const navigate = useNavigate()


    const handleNp = (data) => {
        // Make API CALL

        setIsLoading(true)

        setTimeout(() => {
            // Navigate to DashAPP

            enqueueSnackbar("Password reset successful", { variant: 'success' })
            navigate("/auth/login")
            setIsLoading(false)
        }, 1200)

        // console.log(data)




    }

    const handleResendCode = () => {
        enqueueSnackbar("Code sent sucessfully", { variant: "success" })
    }

    const handleChange = (otpValue) => {
        setOtp(otpValue);
    };



    return (
        <AuthLayout>


            <motion.div

                className='forgotPw'
                {...smoothComeUp}
            >
                <div className="formUtils">

                    <Link to={"/auth/forgotPw"}><p><ChevronLeftIcon />Back</p></Link>
                </div>


                <div className="fpHeader">
                    <h1>Please check your email!</h1>
                    <p>We've emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify your email.</p>
                </div>


                <div className="fpForm">

                    <form onSubmit={handleSubmit(handleNp)} noValidate>

                        <div className="formFields">

                            <OTPInput
                                className="otpInput"
                                value={otp}
                                placeholder='------'
                                onChange={handleChange}
                                numInputs={6} // Change this to 5 if you want 5 consecutive input boxes
                                isInputNum={true}
                                containerStyle={false}
                                shouldAutoFocus={true}
                                renderInput={(props) => <input  {...props} style={{ height: "50px", width: "50px", borderRadius: "8px", marginBottom: "24px", textAlign: "center", fontSize: "20px", color: "#212B36" }} />}
                            />

                        </div>

                        <button type='submit'>{isLoading ? <CircularProgress color='inherit' size={25} /> : 'Verify'}</button>

                        <div className="formUtils">

                            <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "center", gap: "5px", marginTop: "25px" }}>Don't have a code?<p onClick={handleResendCode} style={{ cursor: "pointer" }}>Resend code</p></div>
                        </div>
                    </form>
                    {/* <DevTool control={control} /> */}
                </div>

            </motion.div>
        </AuthLayout>

    )
}

export default NewPw