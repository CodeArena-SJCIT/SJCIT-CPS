import React from "react";
import { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormGroup,
  Card,
  CardHeader,
  FormControlLabel,
  Typography,
} from "@mui/material";

const Administration1 = () => {
  const [adminstrationOneChecked, setadminstrationOneChecked] = useState(false);

  const handleadminstrationOneChecked = (e) => {
    setadminstrationOneChecked(e.target.value);
  };

  return (
    <>
      <Card
        variant="elevation"
        elevation={5}
        sx={{ width: "100%", paddingLeft: "40px", paddingRight: "40px" }}
        raised
      >
        <CardHeader
          title="HOD, Dean, COE, Chief Warden, Director, Associate Director (Research), IQAC Coordinator."
          subheader="Select Options"
          sx={{ textAlign: "center" }}
        />

        <FormGroup
          row
          sx={{
            marginTop: "10px",
            marginBottom: "20px",
            alignItems: "center",
            gap: 2,
            justifyContent: "space-between",
          }}
        >
          <Typography>
            Do you have any positions of HOD, Dean, COE, Chief Warden, Director,
            Associate Director (Research), IQAC Coordinator?
          </Typography>
          <RadioGroup
            row
            sx={{ gap: 2 }}
            value={adminstrationOneChecked}
            onChange={(e) => handleadminstrationOneChecked(e)}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormGroup>
      </Card>
    </>
  );
};

export default Administration1;
