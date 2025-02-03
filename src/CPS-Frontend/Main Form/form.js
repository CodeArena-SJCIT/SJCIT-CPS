import React from "react";
import { useState, useEffect, useRef } from "react";
import "./form.css";
import { Button, FormGroup, TextField, FormControl, Select, InputLabel, MenuItem, Checkbox, Divider, Card, CardContent, CardMedia, Typography, CardHeader, CardActions, FormControlLabel } from "@mui/material";
import PhdComponent from "./phd Component/phdComponent";
import JournalPapers from "./journal Papers/journalPapers";
import ConferencePapers from "./Conference Papers/conferecePapers";
import ConferenceOrganizer from "./Conference Organizer/conferenceOrg";
import Administration1 from "./Adminstration - 1/adminstration1";

const Form = () => {
    const [checked, setChecked] = useState(false);
    const [numberOfResearchProjects, setnumberOfResearchProjects] = useState();
    const [projects, setProjects] = useState([]);

    const [patentChecked, setPatentChecked] = useState(false);
    const [numberOfPatents, setNumberofPatents] = useState();
    const [patents, setPatents] = useState([]);

    const [consultancyProjectsOption, setconsultancyProjectsOption] = useState(false);

    const amount = ["≥ Rs.25,000 to < Rs. 1 lakh", "≥ Rs.1 lakh to < Rs. 2 lakh", "≥ Rs.2 lakh to < Rs. 5 lakh", "≥ Rs. 5 lakh to < Rs. 10 lakh", "≥ Rs. 10 lakh to < Rs. 20 lakh", "≥ Rs. 20 lakhs"];

    const handleSelectedOptionForResearchProject = (index, option) => {
        setProjects((prevProjects) =>
            prevProjects.map((projects, i) =>
                i === index ? { ...projects, selectedOption: projects.selectedOption === option ? "" : option } : projects
            )
        );
    };

    useEffect(() => {
        if (numberOfResearchProjects) {
            const count = parseInt(numberOfResearchProjects, 10) || 0;
            setProjects(Array(count).fill({ selectedOption: "", projectType: "" }));
        } else {
            setProjects([]);
        }

        if (numberOfPatents) {
            const count = parseInt(numberOfPatents, 10) || 0;
            setPatents(Array(count).fill({ selectedPatentOption: "", patenetType: "", patentState: "" }));
        } else {
            setPatents([]);
        }

    }, [numberOfResearchProjects, numberOfPatents]);


    const handleSoloOrTeamSelectOption = (index, event) => {
        const newProjects = [...projects];
        newProjects[index] = { ...newProjects[index], projectType: event.target.value }
        setProjects(newProjects);
    }

    const handlePatentStateSelect = (index, event) => {
        const newPatents = [...patents];
        newPatents[index] = { ...newPatents[index], patentState: event.target.value }
        setPatents(newPatents);
    }

    const handlePatentTypeSelect = (index, event) => {
        const newPatents = [...patents];
        newPatents[index] = { ...newPatents[index], patenetType: event.target.value }
        setPatents(newPatents);
    }

    const handleSelectedOptionForPatents = (index, option) => {
        setPatents((prevPatents) =>
            prevPatents.map((patents, i) =>
                i === index ? { ...patents, selectedPatentOption: patents.selectedPatentOption === option ? "" : option } : patents
            )
        );
    }

    const handleConsultancyProjectsOption = (event) => {
        setconsultancyProjectsOption(event.target.checked);
    }



    return (
        <>
            <div className="main-form-div">
                <Card variant="elevation" elevation={5} sx={{ width: '100%', paddingLeft: "40px", paddingRight: "40px" }} raised>
                    <CardHeader title="Externally Funded Projects and Patents" subheader="Select Options" sx={{ textAlign: "center" }} />

                    <CardContent>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />} label="Have you done Any Externally Sponsored R&D Projects" />
                        </FormGroup>
                    </CardContent>


                    {checked && <CardContent>
                        <TextField label="How many Externally Sponsored R&D Projects Completed / Ongoing" type="number" variant="outlined" fullWidth onChange={(e) => setnumberOfResearchProjects(e.target.value)} />
                    </CardContent>}

                    {checked && projects.map((_, index) => (

                        <CardContent>
                            <Typography variant="h5" sx={{ marginBottom: "20px", textAlign: "center" }}>Information About Research Project {index + 1}</Typography>
                            <FormControl fullWidth>
                                <InputLabel id="t">Select Funding Amonut for Project {index + 1} <span style={{ color: "red" }}>*</span></InputLabel>
                                <Select labelId="t" id="g" label="Select Funding Amonut for Project">
                                    {amount.map((_, index) => (
                                        <MenuItem key={index} value={_}>{_}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <FormGroup fullWidth sx={{ marginTop: "20px" }}>
                                <FormControl>
                                    <InputLabel id="lk">Was the project carried out solo or as a team? <span style={{ color: "red" }}>*</span></InputLabel>
                                    <Select labelId="lk" id="kl" label="Was the Project Carried out solo or as a team" value={_.projectType} onChange={(e) => handleSoloOrTeamSelectOption(index, e)}>
                                        <MenuItem key={index} value="Solo">Solo</MenuItem>
                                        <MenuItem key={index} value="Team">Team</MenuItem>
                                    </Select>
                                </FormControl>
                            </FormGroup>

                            {_.projectType === "Team" && <FormGroup sx={{ marginTop: "10px" }}>
                                <Typography>Were you the Principal Co-Investigator? <span style={{ color: "red" }}>*</span></Typography>
                                <FormControlLabel control={<Checkbox checked={_.selectedOption === "Yes"} onChange={() => handleSelectedOptionForResearchProject(index, "Yes")} />} label="Yes" />
                                <FormControlLabel control={<Checkbox checked={_.selectedOption === "No"} onChange={() => handleSelectedOptionForResearchProject(index, "No")} />} label="No" />
                            </FormGroup>}
                            {_.selectedOption === "No" && <FormGroup sx={{ marginTop: "10px" }}>
                                <TextField type="number" label="How many members were there in the project" />
                            </FormGroup>}
                            <Divider sx={{ marginTop: "20px", marginBottom: "0px" }} />
                        </CardContent>

                    ))}

                    <CardContent>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox checked={patentChecked} onChange={(e) => setPatentChecked(e.target.checked)} />} label="Have you published any patents or hold ownership of any patents?" />
                        </FormGroup>
                    </CardContent>


                    {patentChecked && <CardContent>
                        <TextField label="How many patents have you published or been granted?" type="number" variant="outlined" fullWidth onChange={(e) => setNumberofPatents(e.target.value)} />
                    </CardContent>}

                    {patentChecked && patents.map((_, index) => (
                        <CardContent>

                            <Typography variant="h5" sx={{ marginBottom: "20px", textAlign: "center" }}>Information About Patent {index + 1}</Typography>
                            <FormControl fullWidth>
                                <InputLabel id="we">Is the Patent Granted or Published</InputLabel>
                                <Select labelId="we" id="w" label="Is the Patent Granted or Published" value={_.patentState} onChange={(e) => handlePatentStateSelect(index, e)}>
                                    <MenuItem key={index} value="Published">Published</MenuItem>
                                    <MenuItem key={index} value="Granted">Granted</MenuItem>
                                </Select>
                            </FormControl>

                            <FormGroup fullWidth sx={{ marginTop: "20px" }}>
                                <FormControl>
                                    <InputLabel id="lkw">Was the Patent carried out was solo or as a team? <span style={{ color: "red" }}>*</span></InputLabel>
                                    <Select labelId="lkw" id="klw" label="Was the Patent Carried out was solo or as a team" value={_.patenetType} onChange={(e) => handlePatentTypeSelect(index, e)}>
                                        <MenuItem key={index} value="Solo">Solo</MenuItem>
                                        <MenuItem key={index} value="Team">Team</MenuItem>
                                    </Select>
                                </FormControl>
                            </FormGroup>

                            {_.patenetType === "Team" &&
                                <FormGroup sx={{ marginTop: "10px" }}>
                                    <Typography>Were you the Principal Inventor? <span style={{ color: "red" }}>*</span></Typography>
                                    <FormControlLabel control={<Checkbox checked={_.selectedPatentOption === "Yes"} onChange={() => handleSelectedOptionForPatents(index, "Yes")} />} label="Yes" />
                                    <FormControlLabel control={<Checkbox checked={_.selectedPatentOption === "No"} onChange={() => handleSelectedOptionForPatents(index, "No")} />} label="No" />
                                </FormGroup>
                            }

                            {_.selectedPatentOption === "No" &&
                                <FormGroup sx={{ marginTop: "10px" }}>
                                    <TextField type="number" label="How many members were there in the Patent Team" />
                                </FormGroup>
                            }

                        </CardContent>
                    ))}

                </Card>

                <Card variant="elevation" elevation={5} sx={{ width: '100%', paddingLeft: "40px", paddingRight: "40px" }} raised>
                    <CardHeader title="Consultancy Projects" subheader="Select Options" sx={{ textAlign: "center" }} />

                    <FormGroup sx={{ marginTop: "10px", marginBottom: "20px" }}>
                        <FormControlLabel control={<Checkbox checked={consultancyProjectsOption} onChange={(e) => handleConsultancyProjectsOption(e)} />} label="Have you done any Consultancy Projects " />
                    </FormGroup>

                    {consultancyProjectsOption &&
                        <CardContent>
                            <TextField type="number" label="Total Amount of Consultacny  Projects you have done (In Lakhs)" fullWidth />
                        </CardContent>
                    }

                </Card>

                <PhdComponent />

                <JournalPapers />

                <ConferencePapers />

                <ConferenceOrganizer />

                <Administration1 />

            </div >
        </>
    );
}

export default Form;