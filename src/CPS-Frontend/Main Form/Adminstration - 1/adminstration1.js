import React from "react";
import { useState } from "react";
import { FormGroup, Checkbox, Card, CardHeader, FormControlLabel } from "@mui/material";

const Administration1 = () => {

    const [adminstrationOneChecked, setadminstrationOneChecked] = useState(false);

    const handleadminstrationOneChecked = (e) => {
        setadminstrationOneChecked(e.target.checked);
    }

    return (
        <>
            <Card variant="elevation" elevation={5} sx={{ width: '100%', paddingLeft: "40px", paddingRight: "40px" }} raised>
                <CardHeader title="HOD, Dean, COE, Chief Warden, Director, Associate Director (Research), IQAC Coordinator." subheader="Select Options" sx={{ textAlign: "center" }} />

                <FormGroup sx={{ marginTop: "10px", marginBottom: "20px" }}>
                    <FormControlLabel control={<Checkbox checked={adminstrationOneChecked} onChange={(e) => handleadminstrationOneChecked(e)} />} label="Do you have any positions of HOD, Dean, COE, Chief Warden, Director, Associate Director (Research), IQAC Coordinator?" />
                </FormGroup>
            </Card>

        </>
    );
}

export default Administration1;
