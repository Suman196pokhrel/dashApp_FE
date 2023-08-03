import React, { useState } from 'react'
import AuthLayout from "../../layouts/AuthLayout"
import "./newPw.scss"
import { CircularProgress, TextField } from '@mui/material'
import { Controller, useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack'
import { motion } from 'framer-motion'
import { smoothComeUp } from "../../utils/framerAnimations"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import OTPInput from 'react-otp-input';
import { DevTool } from '@hookform/devtools'






const NewPw = () => {



    const { handleSubmit, register, formState: { errors }, control } = useForm();
    const [isLoading, setIsLoading] = useState(false)
    // const [otp, setOtp] = useState('');
    const navigate = useNavigate()


    const handleNp = (data) => {
        // Make API CALL

        if (data.otp === '123456') {
            setIsLoading(true)

            setTimeout(() => {
                // Navigate to DashAPP

                enqueueSnackbar("Password reset successful", { variant: 'success' })
                navigate("/auth/login")
                setIsLoading(false)
            }, 1200)
        } else {

            setIsLoading(true)
            setTimeout(() => {
                enqueueSnackbar("Failed to changed password, try again", { variant: "error" })
                setIsLoading(false)
            }, 1200)
        }

        // console.log(control)

    }

    const handleResendCode = () => {
        enqueueSnackbar("Code sent sucessfully", { variant: "success" })
    }

    // const handleChange = (otpValue) => {
    //     setOtp(otpValue);
    // };



    return (
        <AuthLayout>


            <motion.div

                className='forgotPw'
                {...smoothComeUp}
            >
                <div className="formUtils">

                    <Link to={"/auth/login"}><p><ChevronLeftIcon />Return to Login</p></Link>
                </div>


                <div className="fpHeader">
                    <h1>Please check your email!</h1>
                    <p>We've emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify your email.</p>
                </div>


                <div className="fpForm">

                    <form onSubmit={handleSubmit(handleNp)} noValidate>

                        <div className="formFields">


                            <Controller
                                name='otp'
                                control={control}
                                rules={{ required: 'OTP cannot be empty', minLength: { value: 6, message: "OTP incorrect" } }}
                                defaultValue=""
                                render={({ field }) => (
                                    <OTPInput
                                        // placeholder='------'
                                        value={field.value}
                                        onChange={field.onChange}
                                        numInputs={6} // Change this to 5 if you want 5 consecutive input boxes
                                        isInputNum={true}
                                        containerStyle={false}
                                        shouldAutoFocus={true}
                                        renderInput={(props) => <input  {...props} style={{ height: "50px", width: "50px", borderRadius: "8px", marginBottom: "10px", textAlign: "center", fontSize: "20px", color: "#212B36", border: "1px solid rgba(145, 158, 171, 0.52)" }} />}
                                    />
                                )}
                            />
                            {errors.otp && <p style={{ color: "red", fontSize: "12px", fontWeight: 400 }}>{errors.otp.message}</p>}

                            <TextField
                                {...register("newPassword", {
                                    required: 'Password cannot be empty.',
                                    minLength: {
                                        value: 6,
                                        message: "password should be atleast 6 digits"
                                    }
                                })}
                                sx={{ margin: "24px 0px" }}
                                type='password'
                                label="Password"
                                variant='outlined'
                                error={!!errors.newPassword}
                                helperText={errors.newPassword?.message}

                            />

                            <TextField
                                {...register("confirmPassword", {
                                    // required: 'Confirm password cannot be empty.',
                                    validate: (value) => value === control._formValues.newPassword || 'Passwords do not match'
                                })}
                                sx={{ margin: "0 0 24px 0px" }}
                                type='password'
                                label="Confirm password"
                                variant='outlined'
                                error={!!errors.confirmPassword}
                                helperText={errors.confirmPassword?.message}

                            />

                        </div>

                        <button type='submit'>{isLoading ? <CircularProgress color='inherit' size={25} /> : 'Verify'}</button>

                        <div className="formUtils">

                            <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "center", gap: "5px", marginTop: "25px" }}>Don't have a code?<p onClick={handleResendCode} style={{ cursor: "pointer" }}>Resend code</p></div>
                        </div>
                    </form>
                </div>

            </motion.div>
        </AuthLayout>

    )
}

export default NewPw