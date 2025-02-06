import React, { useState } from 'react';
import { Tab, Tabs } from "@mui/material";
/*import { DatePicker } from "@mui/x-date-pickers";*/
import "./sjcit-cps-login.css";
import SignUpComponent from './Sign Up Component/signupComponent';
import SignInComponent from './Sign In Component/singnInComponent';

export const Login = () => {

    const [tabValue, setTabValue] = useState(0);

    const handleTabValueChange = (event, newValue) => {
        setTabValue(newValue);
    }


    return (

        <div className='main-login-div'>

            <Tabs value={tabValue} onChange={handleTabValueChange} textColor='primary' indicatorColor='primary' centered sx={{ textTransform: "none" }}>
                <Tab label="Sign In" sx={{ textTransform: "none" }}></Tab>
                <Tab label="Sign Up" sx={{ textTransform: "none" }}></Tab>
            </Tabs>

            {tabValue === 0 && (
                <SignInComponent />
            )}

            {tabValue === 1 && (

                <SignUpComponent />

            )}


        </div >
    )
}
