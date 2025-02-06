import React from "react";
import { useState, useEffect } from "react";
import { FormGroup, TextField, Checkbox, Card, CardContent, Typography, CardHeader, FormControlLabel } from "@mui/material";


const JournalPapers = () => {

    const [journalPaperChecked, setjournalPaperChecked] = useState(false);
    const [numberOfJournalPapers, setnumberOfJournalPapers] = useState();
    const [journalPaperList, setjournalPaperList] = useState([]);

    const handlejournalPaperChecked = (e) => {
        setjournalPaperChecked(e.target.checked)
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

                <FormGroup sx={{ marginTop: "10px", marginBottom: "20px" }}>
                    <FormControlLabel control={<Checkbox checked={journalPaperChecked} onChange={(e) => handlejournalPaperChecked(e)} />} label="Do you have any journal papers or book chapters published in SCI or Scopus-indexed journals?" />
                </FormGroup>

                {journalPaperChecked &&
                    <>
                        <CardContent>
                            <TextField type="number" label="How many journal papers or book chapters published in SCI or Scopus-indexed journals?" fullWidth onChange={(e) => setnumberOfJournalPapers(e.target.value)} />
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
