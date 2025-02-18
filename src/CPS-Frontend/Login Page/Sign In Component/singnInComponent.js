import React from "react";
import { Button, TextField, CircularProgress } from "@mui/material";
import { useState } from "react";


const SignInComponent = () => {

    const [SignInButtonShow, setSignInButtonShow] = useState(true);
    const [ShowCircularProgress, setShowCircularProgress] = useState(false);

    return (
        <>

            <TextField label={<span>Institute Email <span style={{ color: "red" }}>*</span></span>} type='email' data-aos="fade-up" />
            <TextField label={<span>Password <span style={{ color: "red" }}>*</span></span>} type='password' data-aos="fade-up" />

            <div style={{ width: "100%", display: "flex", justifyContent: "center" }} data-aos="fade-up">
                {SignInButtonShow && <Button size='large' variant='contained' color='info' fullWidth="false" onClick={() => { setSignInButtonShow(false); setShowCircularProgress(true); }} sx={{ textTransform: "none" }}>Sign In</Button>}
                {ShowCircularProgress && <CircularProgress />}
            </div>
        </>
    );
}

export default SignInComponent;
