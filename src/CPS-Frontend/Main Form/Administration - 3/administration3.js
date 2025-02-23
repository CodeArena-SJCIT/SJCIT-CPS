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

const Administration3 = () => {
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
          title="Conveners / Members of all functional
committees, Ranking Improvement
committee, Strategic Planning &
Monitoring committee, Members of
Cultural / Sports at the institute level."
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
            Who holds these institute-level roles: Conveners / Members of all
            functional committees, Ranking Improvement committee, Strategic
            Planning & Monitoring committee, Members of Cultural / Sports at the
            institute level.?
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

export default Administration3;
