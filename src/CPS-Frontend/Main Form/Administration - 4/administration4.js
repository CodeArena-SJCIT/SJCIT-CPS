import React from "react";
import { useState } from "react";
import { Radio, RadioGroup, FormGroup, CardContent, Tooltip, Box, TextField, Card, CardHeader, FormControlLabel, Typography } from "@mui/material";

const Administration4 = () => {

    const [adminstrationOneChecked, setadminstrationOneChecked] = useState(false);

    const [adminstrationRolesCount, setadminstrationRolesCount] = useState();
    console.log(adminstrationRolesCount);

    const handleadminstrationOneChecked = (e) => {
        setadminstrationOneChecked(e.target.value);
    }

    return (
        <>
            <Card variant="elevation" elevation={5} sx={{ width: '100%', paddingLeft: "40px", paddingRight: "40px" }} raised>
                <CardHeader title="Departmental activities identified by HOD
like lab in charges, or departmental level
committees for a min. Period of one year." subheader="Select Options" sx={{ textAlign: "center" }} />

                <FormGroup row sx={{ marginTop: "10px", marginBottom: "20px", alignItems: "center", gap: 2, justifyContent: "space-between" }}>
                    <Typography>Who holds these institute-level roles: Departmental activities identified by HOD
                        like lab in charges, or departmental level
                        committees for a min. Period of one year.?</Typography>
                    <RadioGroup row sx={{ gap: 2 }} value={adminstrationOneChecked} onChange={(e) => handleadminstrationOneChecked(e)}>
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormGroup>

                {(adminstrationOneChecked !== "No" && adminstrationOneChecked) &&
                    <>
                        <CardContent>
                            <Tooltip title={
                                <Box sx={{ padding: '8px', maxWidth: "250px" }}>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Who holds these institute-level roles: Departmental activities identified by HOD
                                        like lab in charges, or departmental level
                                        committees for a min. Period of one year.?</Typography>
                                    <Typography variant="body2">
                                        -Maximum Allowed Value is <strong>1</strong> Per Year.<br />
                                        -Please Ensure Valid Entries Only.<br />
                                    </Typography>
                                </Box>
                            } arrow placement="right" enterDelay={200} leaveDelay={200}><TextField inputProps={{ min: 0, max: 3 }} type="number" label="Who holds these institute-level roles: Chairman (functional committees), PG Coordinator, Deputy Warden, ...?" fullWidth onChange={(e) => { let value = parseInt(e.target.value, 10); if (value > 1) { value = 1 } if (value < 0) { value = 0 } if (isNaN(value)) { value = isNaN() } e.target.value = value; setadminstrationRolesCount(e.target.value); }} />
                            </Tooltip>
                        </CardContent>

                    </>
                }

            </Card >

        </>
    );
}

export default Administration4;