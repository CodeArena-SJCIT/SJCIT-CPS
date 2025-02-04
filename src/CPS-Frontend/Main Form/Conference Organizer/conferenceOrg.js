import React from "react";
import { useState, useEffect, useRef } from "react";
import { Box, Tooltip, Button, FormGroup, TextField, FormControl, Select, InputLabel, MenuItem, Checkbox, Divider, Card, CardContent, CardMedia, Typography, CardHeader, CardActions, FormControlLabel } from "@mui/material";


const ConferenceOrganizer = () => {

    const [conferenceOrgChecked, setconferenceOrgChecked] = useState(false);

    const [numberOfConferenceOrg, setnumberOfConferenceOrg] = useState();


    const handleConferenceOrgChecked = (e) => {
        setconferenceOrgChecked(e.target.checked);
    }

    return (
        <>
            <Card variant="elevation" elevation={5} sx={{ width: '100%', paddingLeft: "40px", paddingRight: "40px" }} raised>
                <CardHeader title="National / International conference organised as Chairman / Secretary / Convenors / Session Chair / Session Co-Chair" subheader="Select Options" sx={{ textAlign: "center" }} />

                <FormGroup sx={{ marginTop: "10px", marginBottom: "20px" }}>
                    <FormControlLabel control={<Checkbox checked={conferenceOrgChecked} onChange={(e) => handleConferenceOrgChecked(e)} />} label="Do you have Organized any National / International conference as Chairman / Secretary / Convenors / Session Chair / Session Co-Chair?" />
                </FormGroup>

                {conferenceOrgChecked &&
                    <>
                        <CardContent>
                            <Tooltip title={
                                <Box sx={{ padding: '8px', maxWidth: "250px" }}>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Number of Conference Organized</Typography>
                                    <Typography variant="body2">
                                        -Maximum Allowed Value is <strong>3</strong> from last Appointment<br />
                                        -Please Ensure Valid Entries Only.<br />
                                    </Typography>
                                </Box>
                            } arrow placement="right" enterDelay={200} leaveDelay={200}><TextField inputProps={{ min: 0, max: 3 }} type="number" label="How many National / International conference organised as Chairman / Secretary / ...?" fullWidth onChange={(e) => { let value = parseInt(e.target.value, 10); if (value > 3) { value = 3 } if (value < 0 || isNaN(value)) { value = 0 } e.target.value = value; setnumberOfConferenceOrg(value) }} />
                            </Tooltip>
                        </CardContent>



                    </>
                }

            </Card >
        </>
    );
}

export default ConferenceOrganizer;