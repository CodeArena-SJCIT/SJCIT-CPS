import React from "react";
import { Button, TextField, Select, MenuItem, FormControl, InputLabel, CircularProgress, LinearProgress, Tab, Tabs, Box } from "@mui/material";
import { useState, useEffect } from "react";

const SignUpComponent = () => {

    const [selectedOptionForRole, setselectedOptionForRole] = useState('');
    const [selectedOptionForDepartment, setselectedOptionForDepartment] = useState('');
    const [a, seta] = useState(true);
    const [b, setb] = useState(false);

    const roles = ["Assistant Professor", "Associate Professor", "Professor", "Placement Officer"];
    const departments = ["CSE", "ISE", "AI&ML", "AI&DS", "ECE", "CV", "AS", "AE"];


    return (
        <>
            <TextField label={<span>Name <span style={{ color: "red" }}>*</span></span>} />
            <TextField label={<span>Institute Email <span style={{ color: "red" }}>*</span></span>} type='email' />

            < FormControl fullWidth >
                <InputLabel id="input-label-for-selecting-role">Select Role <span style={{ color: "red" }}>*</span></InputLabel>
                <Select labelId='input-label-for-selecting-role' id='simple-select-role' label="Select Role" value={selectedOptionForRole} onChange={(event) => { setselectedOptionForRole(event.target.value) }}> Select your Role
                    {roles.map((value) => (
                        <MenuItem key={value} value={value}>{value}</MenuItem>
                    ))}
                </Select>
            </FormControl >

            <FormControl fullWidth>
                <InputLabel id="input-label-for-selecting-department">Select Department <span style={{ color: "red" }}>*</span></InputLabel>
                <InputLabel id="input-label-for-selecting-department" ></InputLabel>
                <Select labelId='input-label-for-selecting-department' id='simple-select-department' label="Select Department" value={selectedOptionForDepartment} onChange={(event) => { setselectedOptionForDepartment(event.target.value) }}>
                    {departments.map((value) => (
                        <MenuItem key={value} value={value}>{value}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <TextField label={<span>Set Password <span style={{ color: "red" }}>*</span></span>} type='password' />
            <TextField label={<span>Confirm Password <span style={{ color: "red" }}>*</span></span>} type='password' margin='normal' />


            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                {a && <Button size='large' variant='contained' color='info' fullWidth="false" onClick={() => { seta(false); setb(true); }} sx={{ textTransform: "none" }}>Sign Up</Button>}
                {b && <CircularProgress />}
            </div>
        </>
    );
}

export default SignUpComponent;