import React from "react";
import { useState, useEffect } from "react";
import { Radio, RadioGroup, FormGroup, Card, CardHeader, FormControlLabel, Typography, FormControl, Select, MenuItem, InputLabel, TextField } from "@mui/material";

const WorkhopOrganized = () => {

    const [industryProjectsChecked, setindustryProjectsChecked] = useState(false);

    const [NumberofIndustryProjects, setNumberofIndustryProjects] = useState();
    console.log(setNumberofIndustryProjects);

    const IndustryProjectsOption = ["Sucessfully Completed", "On Going", "Not Completed"];

    const [IndustryProjectsNumber, setIndustryProjectsNumber] = useState([]);

    useEffect(() => {
        if (NumberofIndustryProjects) {
            const count = parseInt(NumberofIndustryProjects, 10) || 0;
            setIndustryProjectsNumber((prevList) => {
                const newList = [...prevList];
                if (newList.length < count) {
                    newList.push(...Array(count - newList.length).fill({ industryAttachementsOption: "" }));
                } else {
                    newList.length = count;
                }
                return newList;
            });
        }
    }, [NumberofIndustryProjects]);

    const handleaIndustryProjectsChecked = (e) => {
        setindustryProjectsChecked(e.target.value);
    }

    const handleIndustryAttachementsSelect = (index, event) => {
        const newIndustryProjectsNumber = [...IndustryProjectsNumber];
        newIndustryProjectsNumber[index] = { ...newIndustryProjectsNumber[index], industryAttachementsOption: event.target.value }
        setIndustryProjectsNumber(newIndustryProjectsNumber);
        //console.log(IndustryProjectsNumber[index]);
    }

    return (
        <>
            <Card variant="elevation" elevation={5} sx={{ width: '100%', paddingLeft: "40px", paddingRight: "40px", paddingBottom: "20px" }} raised>
                <CardHeader title="Workshop / FDP / Short term courses of
minimum of 05 working days duration
organized as coordinator / convener or
participated as a resource person." subheader="Select Options" sx={{ textAlign: "center" }} />

                <FormGroup row sx={{ marginTop: "10px", marginBottom: "20px", alignItems: "center", gap: 2, justifyContent: "space-between" }}>
                    <Typography>Have you ever organized as coordinator / convener or
                        participated as a resource person in any Workshop / FDP / Short term courses of
                        minimum of 05 working days duration ?</Typography>
                    <RadioGroup row sx={{ gap: 2 }} value={industryProjectsChecked} onChange={(e) => handleaIndustryProjectsChecked(e)}>
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormGroup>

                {(industryProjectsChecked !== "No" && industryProjectsChecked) &&
                    <>
                        <FormControl fullWidth>
                            <TextField label="How many Workshop / FDP / Short term courses of
minimum of 05 working days duration ...?" type="number" variant="outlined" fullWidth onChange={(e) => { let value = parseInt(e.target.value, 10); if (value <= 0) { value = 0; } else if (value) { } else { value = isNaN(value); } e.target.value = value; setNumberofIndustryProjects(e.target.value) }} />
                        </FormControl>

                        {(industryProjectsChecked !== "No") && IndustryProjectsNumber.map((_, index) => (
                            <FormControl fullWidth sx={{ marginTop: "20px" }}>
                                <Typography variant="h5" sx={{ marginBottom: "20px", textAlign: "center" }}>Information About Workshop / FDP / STC Project {index + 1}</Typography>
                                <FormControl fullWidth>
                                    <InputLabel id="t">Select Options<span style={{ color: "red" }}>*</span></InputLabel>
                                    <Select labelId="t" id="g" label="Select Options" value={_.IndustryProjectsOption} onChange={(e) => handleIndustryAttachementsSelect(index, e)}>
                                        {IndustryProjectsOption.map((_, index) => (
                                            <MenuItem key={index} value={_}>{_}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </FormControl>
                        ))}
                    </>

                }

            </Card >

        </>
    );
}

export default WorkhopOrganized;