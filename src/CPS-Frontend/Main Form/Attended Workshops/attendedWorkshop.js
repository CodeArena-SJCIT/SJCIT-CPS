import React from "react";
import { useState } from "react";
import { RadioGroup, Radio, Box, Tooltip, FormGroup, TextField, Card, CardContent, Typography, CardHeader, FormControlLabel } from "@mui/material";


const ConferenceOrganizer = () => {

    const [conferenceOrgChecked, setconferenceOrgChecked] = useState(false);

    const [numberOfConferenceOrg, setnumberOfConferenceOrg] = useState();
    console.log(numberOfConferenceOrg);

    const handleConferenceOrgChecked = (e) => {
        setconferenceOrgChecked(e.target.value);
    }

    return (
        <>
            <Card variant="elevation" elevation={5} sx={{ width: '100%', paddingLeft: "40px", paddingRight: "40px" }} raised>
                <CardHeader title="Attended Workshop / FDP / Short term
courses of minimum of 05 working days
duration in offline mode." subheader="Select Options" sx={{ textAlign: "center" }} />

                <FormGroup row sx={{ marginTop: "10px", marginBottom: "20px", alignItems: "center", gap: 2, justifyContent: "space-between" }}>
                    <Typography>Have you ever Attended Workshop / FDP / Short term
                        courses of minimum of 05 working days
                        duration in offline mode.?</Typography>
                    <RadioGroup row sx={{ gap: 2 }} value={conferenceOrgChecked} onChange={(e) => handleConferenceOrgChecked(e)}>
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormGroup>

                {(conferenceOrgChecked !== "No" && conferenceOrgChecked) &&
                    <>
                        <CardContent>
                            <Tooltip title={
                                <Box sx={{ padding: '8px', maxWidth: "250px" }}>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Number of Attended Workshops / FDP / STC</Typography>
                                    <Typography variant="body2">
                                        -Maximum Allowed Value is <strong>3</strong> from last Appointment<br />
                                        -Please Ensure Valid Entries Only.<br />
                                    </Typography>
                                </Box>
                            } arrow placement="right" enterDelay={200} leaveDelay={200}><TextField inputProps={{ min: 0, max: 3 }} type="number" label="How many number of Attended Workshops / FDP / STC?" fullWidth onChange={(e) => { let value = parseInt(e.target.value, 10); if (value > 3) { value = 3 } if (value < 0) { value = 0 } if (isNaN(value)) { value = e.target.value } e.target.value = value; setnumberOfConferenceOrg(value) }} />
                            </Tooltip>
                        </CardContent>

                    </>
                }

            </Card >
        </>
    );
}

export default ConferenceOrganizer;
