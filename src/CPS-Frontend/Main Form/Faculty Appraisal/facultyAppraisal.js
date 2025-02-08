import React from "react";
import { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button, Radio, RadioGroup, FormGroup, Card, CardHeader, FormControlLabel, Typography, FormControl, Select, MenuItem, InputLabel, TextField } from "@mui/material";

const FacultyAppraisal = () => {


    return (
        <>
            <Card variant="elevation" elevation={5} sx={{ width: '100%', paddingLeft: "40px", paddingRight: "40px", paddingBottom: "20px" }} raised>
                <CardHeader title="Faculty Appraisal by Students
(per subject)" sx={{ textAlign: "center" }} />


                <FormControl fullWidth sx={{ display: "flex", alignItems: "center" }}>
                    <Button variant="contained" color="primary" sx={{ backgroundColor: "#1976d2", width: "20%", "&:hover": { backgroundColor: "#115293" } }} startIcon={<AddIcon />}>
                        Add Subject
                    </Button>

                </FormControl>



            </Card >

        </>
    );
}

export default FacultyAppraisal;