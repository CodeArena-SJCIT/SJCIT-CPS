import React, { useState } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
  LinearProgress,
  Tab,
  Tabs,
  Box,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import "./sjcit-cps-login.css";
import SignUpComponent from "./Sign Up Component/signupComponent";
import SignInComponent from "./Sign In Component/singnInComponent";

export const Login = () => {
  const [tabValue, setTabValue] = useState(0);
  const [fade, setFade] = useState(true);

  const handleTabValueChange = (event, newValue) => {
    setFade(false);

    setTimeout(() => {
      setTabValue(newValue);
      setFade(true);
    }, 300);
  };

  return (
    <div className="main-login-div">
      <Tabs
        value={tabValue}
        onChange={handleTabValueChange}
        textColor="primary"
        indicatorColor="primary"
        centered
        sx={{ textTransform: "none" }}
      >
        <Tab label="Sign In" sx={{ textTransform: "none" }}></Tab>
        <Tab label="Sign Up" sx={{ textTransform: "none" }}></Tab>
      </Tabs>

      {/* Apply Animation class */}
      <div className={`form-container ${fade ? "fade-in" : "fade-out"}`}>
        {tabValue === 0 ? <SignInComponent /> : <SignUpComponent />}
      </div>
    </div>
  );
};
