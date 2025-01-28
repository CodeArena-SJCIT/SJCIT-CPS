import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel, CircularProgress } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import "./sjcit-cps-login.css";

export const Login = () => {

    const [selectedOptionForRole, setselectedOptionForRole] = useState('');
    const [selectedOptionForDepartment, setselectedOptionForDepartment] = useState('');
    const [a, seta] = useState(true);
    const [b, setb] = useState(false);

    const roles = ["Assistant Professor", "Associate Professor", "Professor"];
    const departments = ["CSE", "ISE", "AI&ML", "AI&DS", "ECE", "CV", "AS", "AE"];

    return (
        <div className='main-login-div'>


            <TextField label="Name" required />
            <TextField label="Email" type='email' required />
            <TextField label="Set Password" type='password' required />
            <TextField label="Confirm Password" type='password' required />

            <FormControl fullWidth required>
                <InputLabel id="input-label-for-selecting-role">Select Role</InputLabel>
                <Select labelId='input-label-for-selecting-role' id='simple-select-role' label="Select Role" value={selectedOptionForRole} onChange={(event) => { setselectedOptionForRole(event.target.value) }}> Select your Role
                    {roles.map((value) => (
                        <MenuItem key={value} value={value}>{value}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth required>
                <InputLabel id="input-label-for-selecting-department">Select Department</InputLabel>
                <Select labelId='input-label-for-selecting-department' id='simple-select-department' label="Select Department" value={selectedOptionForDepartment} onChange={(event) => { setselectedOptionForDepartment(event.target.value) }}>
                    {departments.map((value) => (
                        <MenuItem key={value} value={value}>{value}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                {a && <Button size='large' variant='contained' color='info' fullWidth="false" onClick={() => { seta(false); setb(true); }}>Sign Up</Button>}
                {b && <CircularProgress />}
            </div>

        </div >
    )
}