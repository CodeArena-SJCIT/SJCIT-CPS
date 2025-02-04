import React from "react";
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
import { useState, useEffect } from "react";

const SignInComponent = () => {
  const [SignInButtonShow, setSignInButtonShow] = useState(true);
  const [ShowCircularProgress, setShowCircularProgress] = useState(false);

  return (
    <>
      <TextField
        label={
          <span>
            Institute Email <span style={{ color: "red" }}>*</span>
          </span>
        }
        type="email"
      />
      <TextField
        label={
          <span>
            Password <span style={{ color: "red" }}>*</span>
          </span>
        }
        type="password"
      />

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        {SignInButtonShow && (
          <Button
            size="large"
            variant="contained"
            color="info"
            fullWidth="false"
            onClick={() => {
              setSignInButtonShow(false);
              setShowCircularProgress(true);
            }}
            sx={{ textTransform: "none" }}
          >
            Sign In
          </Button>
        )}
        {ShowCircularProgress && <CircularProgress />}
      </div>
    </>
  );
};

export default SignInComponent;
