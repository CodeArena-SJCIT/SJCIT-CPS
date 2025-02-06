import React from "react";
import { useState, useEffect } from "react";
import { RadioGroup, Radio, FormGroup, TextField, Checkbox, Card, CardContent, Typography, CardHeader, FormControlLabel } from "@mui/material";


const JournalPapers = () => {

    const [journalPaperChecked, setjournalPaperChecked] = useState(false);
    const [numberOfJournalPapers, setnumberOfJournalPapers] = useState();
    const [journalPaperList, setjournalPaperList] = useState([]);

    const handlejournalPaperChecked = (e) => {
        setjournalPaperChecked(e.target.value)
    }

    const handleSelectedOptionForJournalPaperGuide = (index, option) => {
        const newjournalPaperList = [...journalPaperList];
        newjournalPaperList[index] = { ...newjournalPaperList[index], journalPaperGuideSelectOption: option };
        setjournalPaperList(newjournalPaperList);
    }

    useEffect(() => {
        if (numberOfJournalPapers) {
            const count = parseInt(numberOfJournalPapers, 10) || 0;
            setjournalPaperList((prevList) => {
                const newList = [...prevList];
                if (newList.length < count) {
                    newList.push(...Array(count - newList.length).fill({ journalPaperGuideSelectOption: "" }));
                } else {
                    newList.length = count;
                }
                return newList;
            });
        }
    }, [numberOfJournalPapers]);

    return (
        <>

            <Card variant="elevation" elevation={5} sx={{ width: '100%', paddingLeft: "40px", paddingRight: "40px" }} raised>
                <CardHeader title="Journal Papers / Book chapter in SCI / Scopus" subheader="Select Options" sx={{ textAlign: "center" }} />

                <FormGroup row sx={{ marginTop: "10px", marginBottom: "20px", alignItems: "center", gap: 2, justifyContent: "space-between" }}>
                    <Typography>Do you have publications in SCI or Scopus-indexed journals?</Typography>
                    <RadioGroup row sx={{ gap: 2 }} value={journalPaperChecked} onChange={(e) => handlejournalPaperChecked(e)}>
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormGroup>

                {(journalPaperChecked !== "No" && journalPaperChecked) &&
                    <>
                        <CardContent>
                            <TextField type="number" label="How many journal papers or book chapters published in SCI or Scopus-indexed journals?" fullWidth onChange={(e) => { let value = parseInt(e.target.value, 10); if (value < 0 || isNaN(value)) { value = 0; } e.target.value = value; setnumberOfJournalPapers(e.target.value) }} />
                        </CardContent>

                        {journalPaperList.map((_, index) => (
                            <>
                                <FormGroup sx={{ marginTop: "40px", marginBottom: "20px" }}>
                                    <Typography variant="h5" sx={{ marginBottom: "20px", textAlign: "center" }}>Information About Journal Paper / Book Chapter {index + 1}</Typography>
                                    <Typography>Were you the only Principal Guide / Main Guide? <span style={{ color: "red" }}>*</span></Typography>
                                    <FormControlLabel control={<Checkbox checked={_.journalPaperGuideSelectOption === "Yes"} onChange={() => handleSelectedOptionForJournalPaperGuide(index, "Yes")} />} label="Yes" />
                                    <FormControlLabel control={<Checkbox checked={_.journalPaperGuideSelectOption === "No"} onChange={() => handleSelectedOptionForJournalPaperGuide(index, "No")} />} label="No" />
                                </FormGroup>

                                {_.journalPaperGuideSelectOption === "No" &&
                                    <FormGroup sx={{ marginTop: "10px", marginBottom: "20px" }}>
                                        <TextField type="number" label="How many Authors / Guides were there" />
                                    </FormGroup>
                                }
                            </>
                        ))}
                    </>
                }

            </Card>

        </>
    );
}

export default JournalPapers;
