import React from "react";
import { useState } from "react";
import { Radio, RadioGroup, FormGroup, Card, CardHeader, FormControlLabel, Typography } from "@mui/material";

const Administration2 = () => {

    const [adminstrationOneChecked, setadminstrationOneChecked] = useState(false);

    const handleadminstrationOneChecked = (e) => {
        setadminstrationOneChecked(e.target.value);
    }

    return (
        <>
            <Card variant="elevation" elevation={5} sx={{ width: '100%', paddingLeft: "40px", paddingRight: "40px" }} raised>
                <CardHeader title="Chairman of all functional committees, PG Coordinators, Deputy Wardens, NSS Coordinators, NCC Coordinators, Cultural / Sports Coordinators, Associate COE, NAAC / NBA / NIRF Chief coordinators, IIC president, ERP / Timetable coordinator at the institute level" subheader="Select Options" sx={{ textAlign: "center" }} />

                <FormGroup row sx={{ marginTop: "10px", marginBottom: "20px", alignItems: "center", gap: 2, justifyContent: "space-between" }}>
                    <Typography>Who holds these institute-level roles: Chairman (functional committees), PG Coordinator, Deputy Warden, NSS/NCC/Cultural/Sports Coordinator, Associate COE, NAAC/NBA/NIRF Chief, IIC President, ERP/Timetable Coordinator?</Typography>
                    <RadioGroup row sx={{ gap: 2 }} value={adminstrationOneChecked} onChange={(e) => handleadminstrationOneChecked(e)}>
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormGroup>

            </Card >

        </>
    );
}

export default Administration2;