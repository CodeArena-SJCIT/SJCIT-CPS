import React from "react";
import { useState, useEffect } from "react";
import { FormGroup, TextField, Checkbox, Card, CardContent, Typography, CardHeader, FormControlLabel } from "@mui/material";


const ConferencePapers = () => {

    const [conferencePaperChecked, setconferencePaperChecked] = useState(false);
    const [numberOfConferencePapers, setnumberOfConferencePapers] = useState();

    const [conferencePaperList, setconferencePaperList] = useState([]);

    useEffect(() => {
        if (numberOfConferencePapers) {
            const count = parseInt(numberOfConferencePapers, 10) || 0;
            setconferencePaperList((prevList) => {
                const newList = [...prevList];
                if (newList.length < count) {
                    newList.push(...Array(count - newList.length).fill({ conferencePaperMainGuideSelectOption: "" }));
                } else {
                    newList.length = count;
                }
                return newList;
            });
        }
    }, [numberOfConferencePapers]);

    const handleConferencePaperChecked = (e) => {
        setconferencePaperChecked(e.target.checked);
    }

    const handleSelectedOptionForConferencePaperGuide = (index, option) => {
        const newList = [...conferencePaperList];
        newList[index] = { ...newList[index], conferencePaperMainGuideSelectOption: option }
        setconferencePaperList(newList);
    }

    return (
        <>
            <Card variant="elevation" elevation={5} sx={{ width: '100%', paddingLeft: "40px", paddingRight: "40px" }} raised>
                <CardHeader title="Conference papers indexed in SCI / Scopus / Web of Science Conference / any internationally renowned conference" subheader="Select Options" sx={{ textAlign: "center" }} />

                <FormGroup sx={{ marginTop: "10px", marginBottom: "20px" }}>
                    <FormControlLabel control={<Checkbox checked={conferencePaperChecked} onChange={(e) => handleConferencePaperChecked(e)} />} label="Do you have any Conference papers indexed in SCI / Scopus / Web of Science Conference / any internationally renowned conference?" />
                </FormGroup>

                {conferencePaperChecked &&
                    <>
                        <CardContent>
                            <TextField type="number" label="How many journal papers or book chapters published in SCI or Scopus-indexed journals?" fullWidth onChange={(e) => setnumberOfConferencePapers(e.target.value)} />
                        </CardContent>

                        {conferencePaperList.map((_, index) => (
                            <>
                                <FormGroup sx={{ marginTop: "40px", marginBottom: "20px" }}>
                                    <Typography variant="h5" sx={{ marginBottom: "20px", textAlign: "center" }}>Information About Conference Paper / Book Chapter {index + 1}</Typography>
                                    <Typography>Were you the only Principal Guide / Main Guide? <span style={{ color: "red" }}>*</span></Typography>
                                    <FormControlLabel control={<Checkbox checked={_.conferencePaperMainGuideSelectOption === "Yes"} onChange={() => handleSelectedOptionForConferencePaperGuide(index, "Yes")} />} label="Yes" />
                                    <FormControlLabel control={<Checkbox checked={_.conferencePaperMainGuideSelectOption === "No"} onChange={() => handleSelectedOptionForConferencePaperGuide(index, "No")} />} label="No" />
                                </FormGroup>

                                {_.conferencePaperMainGuideSelectOption === "No" &&
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

export default ConferencePapers;
