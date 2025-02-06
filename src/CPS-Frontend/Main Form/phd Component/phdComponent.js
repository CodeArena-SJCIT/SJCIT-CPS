import React from "react";
import { useState, useEffect } from "react";
import { FormGroup, TextField, Checkbox, Divider, Card, CardContent, Typography, CardHeader, FormControlLabel } from "@mui/material";


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
        setphdOptionChecked(event.target.checked);
    }

    return (
        <>

            <Card variant="elevation" elevation={5} sx={{ width: '100%', paddingLeft: "40px", paddingRight: "40px" }} raised>
                <CardHeader title="Ph.D. Scholars" subheader="Select Options" sx={{ textAlign: "center" }} />

                <FormGroup sx={{ marginTop: "10px", marginBottom: "20px" }}>
                    <FormControlLabel control={<Checkbox checked={phdOptionChecked} onChange={(e) => handlePhdOptionChecked(e)} />} label="Are any students under your supervision currently pursuing or have they completed a Ph.D.?" />
                </FormGroup>

                {phdOptionChecked &&
                    <>
                        <CardContent>
                            <TextField type="number" label="How many students have been Awarded Ph.D." fullWidth onChange={(e) => setnumberOfStudentCompletedPhd(e.target.value)} />

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
                            <TextField type="number" label="How many Students are Pursuing Ph.D." fullWidth onChange={(e) => setnumberOfStudentsPursuingPhd(e.target.value)} />

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
