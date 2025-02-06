import React from "react";
import { useState, useEffect } from "react";
import { Radio, RadioGroup, FormGroup, TextField, Checkbox, Divider, Card, CardContent, Typography, CardHeader, FormControlLabel } from "@mui/material";


const PhdComponent = () => {

    const [phdOptionChecked, setphdOptionChecked] = useState(false);
    const [numberOfStudentCompletedPhd, setnumberOfStudentCompletedPhd] = useState(0);
    const [numberOfStudentsPursuingPhd, setnumberOfStudentsPursuingPhd] = useState();
    const [phdList, setphdList] = useState([]);
    const [phdListPursuing, setphdListPursuing] = useState([]);

    const handleSelectedOptionForphdGuideCompletedStudent = (index, option) => {
        const newPhdList = [...phdList];
        newPhdList[index] = { ...newPhdList[index], phdPrincipalGuide: option }
        setphdList(newPhdList);
    }

    const handleSelectedOptionForphdGuidePursuingStundet = (index, option) => {
        const newPhdList = [...phdListPursuing];
        newPhdList[index] = { ...newPhdList[index], phdPrincipalGuidePursuingStudent: option }
        setphdListPursuing(newPhdList);
    }

    useEffect(() => {
        if (numberOfStudentCompletedPhd) {
            const count = parseInt(numberOfStudentCompletedPhd, 10) || 0;
            setphdList((prevList) => {
                const newList = [...prevList];
                if (newList.length < count) {
                    newList.push(...Array(count - newList.length).fill({ phdPrincipalGuide: "" }));
                } else {
                    newList.length = count;
                }
                return newList;
            });
        }

        if (numberOfStudentsPursuingPhd) {
            const count = parseInt(numberOfStudentsPursuingPhd, 10) || 0;
            setphdListPursuing((prevList) => {
                const newList = [...prevList];
                if (newList.length < count) {
                    newList.push(...Array(count - newList.length).fill({ phdPrincipalGuidePursuingStudent: "" }));
                } else {
                    newList.length = count;
                }
                return newList;
            });
        }

    }, [numberOfStudentCompletedPhd, numberOfStudentsPursuingPhd]);

    const handlePhdOptionChecked = (event) => {
        setphdOptionChecked(event.target.value);
    }

    return (
        <>

            <Card variant="elevation" elevation={5} sx={{ width: '100%', paddingLeft: "40px", paddingRight: "40px" }} raised>
                <CardHeader title="Ph.D. Scholars" subheader="Select Options" sx={{ textAlign: "center" }} />

                <FormGroup row sx={{ marginTop: "10px", marginBottom: "20px", alignItems: "center", gap: 2, justifyContent: "space-between" }}>
                    <Typography>Do you supervise any students pursuing or who have completed a Ph.D.?</Typography>
                    <RadioGroup row value={phdOptionChecked} onChange={(e) => handlePhdOptionChecked(e)}>
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormGroup>

                {(phdOptionChecked !== "No" && phdOptionChecked) &&
                    <>
                        <CardContent>
                            <TextField type="number" label="How many students have been Awarded Ph.D." fullWidth onChange={(e) => { let value = parseInt(e.target.value, 10); if (value < 0 || isNaN(value)) { value = 0; } e.target.value = value; setnumberOfStudentCompletedPhd(e.target.value) }} />

                            {phdList.map((_, index) => (
                                <>
                                    <FormGroup sx={{ marginTop: "40px" }}>
                                        <Typography variant="h5" sx={{ marginBottom: "20px", textAlign: "center" }}>Information About Ph.D. Completed Student {index + 1}</Typography>
                                        <Typography>Were you the only Principal Guide / Main Guide? <span style={{ color: "red" }}>*</span></Typography>
                                        <FormControlLabel control={<Checkbox checked={_.phdPrincipalGuide === "Yes"} onChange={() => handleSelectedOptionForphdGuideCompletedStudent(index, "Yes")} />} label="Yes" />
                                        <FormControlLabel control={<Checkbox checked={_.phdPrincipalGuide === "No"} onChange={() => handleSelectedOptionForphdGuideCompletedStudent(index, "No")} />} label="No" />
                                    </FormGroup>

                                    {
                                        _.phdPrincipalGuide === "No" &&
                                        <FormGroup sx={{ marginTop: "10px" }}>
                                            <TextField type="number" label="How many supervisors / guides were there" />
                                        </FormGroup>
                                    }
                                    <Divider sx={{ marginBottom: "20px", marginTop: '20px' }} />
                                </>

                            ))}

                        </CardContent>

                        <CardContent>
                            <TextField type="number" label="How many Students are Pursuing Ph.D." fullWidth onChange={(e) => { let value = parseInt(e.target.value, 10); if (value < 0 || isNaN(value)) { value = 0; } e.target.value = value; setnumberOfStudentsPursuingPhd(e.target.value) }} />

                            {phdListPursuing.map((_, index) => (
                                <>
                                    <FormGroup sx={{ marginTop: "40px" }}>
                                        <Typography variant="h5" sx={{ marginBottom: "20px", textAlign: "center" }}>Information About Ph.D. Pursuing Student {index + 1}</Typography>
                                        <Typography>Were you the only Principal Guide / Main Guide? <span style={{ color: "red" }}>*</span></Typography>
                                        <FormControlLabel control={<Checkbox checked={_.phdPrincipalGuidePursuingStudent === "Yes"} onChange={() => handleSelectedOptionForphdGuidePursuingStundet(index, "Yes")} />} label="Yes" />
                                        <FormControlLabel control={<Checkbox checked={_.phdPrincipalGuidePursuingStudent === "No"} onChange={() => handleSelectedOptionForphdGuidePursuingStundet(index, "No")} />} label="No" />
                                    </FormGroup>

                                    {
                                        _.phdPrincipalGuidePursuingStudent === "No" &&
                                        <FormGroup sx={{ marginTop: "10px" }}>
                                            <TextField type="number" label="How many supervisors / guides were there" />
                                        </FormGroup>
                                    }
                                    <Divider sx={{ marginBottom: "20px", marginTop: '20px' }} />
                                </>

                            ))}

                        </CardContent>

                    </>
                }

            </Card>

        </>
    );
}

export default PhdComponent;
