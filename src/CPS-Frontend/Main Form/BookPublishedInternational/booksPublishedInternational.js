import React from "react";
import { useState, useEffect } from "react";
import { Radio, RadioGroup, FormGroup, Card, CardHeader, FormControlLabel, Typography, FormControl, TextField } from "@mui/material";

const BooksPublishedInInternational = () => {

    const [industryProjectsChecked, setindustryProjectsChecked] = useState(false);

    const [NumberofIndustryProjects, setNumberofIndustryProjects] = useState();
    console.log(setNumberofIndustryProjects);

    const [bookISBNnumber, setbookISBNnumber] = useState([]);
    console.log(bookISBNnumber);

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

    return (
        <>
            <Card variant="elevation" elevation={5} sx={{ width: '100%', paddingLeft: "40px", paddingRight: "40px", paddingBottom: "20px" }} raised>
                <CardHeader title="Text / Reference book published on relevant
subjects from reputed international
publishers with ISBN" subheader="Select Options" sx={{ textAlign: "center" }} />

                <FormGroup row sx={{ marginTop: "10px", marginBottom: "20px", alignItems: "center", gap: 2, justifyContent: "space-between" }}>
                    <Typography>Do you have any Text / Reference book published on relevant
                        subjects from reputed international
                        publishers with ISBN?</Typography>
                    <RadioGroup row sx={{ gap: 2 }} value={industryProjectsChecked} onChange={(e) => handleaIndustryProjectsChecked(e)}>
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormGroup>

                {(industryProjectsChecked !== "No" && industryProjectsChecked) &&
                    <>
                        <FormControl fullWidth>
                            <TextField label="How many Text / Reference book published in Inteenational publishers with ISBN?" type="number" variant="outlined" fullWidth onChange={(e) => { let value = parseInt(e.target.value, 10); if (value <= 0) { value = 0; } else if (value) { } else { value = isNaN(value); } e.target.value = value; setNumberofIndustryProjects(e.target.value) }} />
                        </FormControl>

                        {(industryProjectsChecked !== "No") && IndustryProjectsNumber.map((_, index) => (
                            <FormControl fullWidth sx={{ marginTop: "20px" }}>
                                <Typography variant="h5" sx={{ marginBottom: "20px", textAlign: "center" }}>Information About Text / Reference Book {index + 1}</Typography>
                                <FormControl fullWidth>
                                    <TextField type="number" label="Enter the ISBN Number of the Text / Reference Book" fullWidth variant="outlined" onChange={(e) => { let value = parseInt(e.target.value, 10); if (value <= 0) { value = 0; } else if (value) { } else { value = isNaN(value); } e.target.value = value; setbookISBNnumber(e.target.value) }} />
                                </FormControl>
                            </FormControl>
                        ))}
                    </>

                }

            </Card >

        </>
    );
}

export default BooksPublishedInInternational;