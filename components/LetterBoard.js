"use client";

import React, { useEffect, useState } from "react";

import { Box, Container, Grid, Paper, CircularProgress } from "@mui/material";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import axios from "axios";

import { Title, CustmButton, TextBox } from "./atoms/FormFields";
import SimpleSnackbar from "./atoms/SnackBar";
import LetterForm from "./LetterForm";

const defaultValues = {
  description: "",
  tone: "",
  style: "",
};

/**
 * An component for Letter Board 
 */
const LetterBoard = () => {
  const [formData, setformData] = useState(defaultValues);
  const [disabledState, setdisabledState] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, seterror] = useState("");
  const [result, setResult] = useState("");

  // function to handle form submission
  const formHandler = async () => {
    if (
      formData?.description === "" ||
      formData?.description === null ||
      formData?.description === undefined
    ) {
      setdisabledState(true);
    }
    setIsLoading(true);
    try {
      const result = await axios.post(`/api`, formData, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      setResult(result.data);
    } catch (err) {
      seterror(err);
    }
    setIsLoading(false);
  };

  // hook for setting disabling state according to form data state or given reponses
  useEffect(() => {
    console.log("formdata is:", formData);
    if (
      formData?.description !== "" ||
      formData?.description !== null ||
      formData?.description !== undefined
    ) {
      setdisabledState(false);
    }
  }, [formData]);

  // function to copy given result in clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(result?.data);
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <CircularProgress />
        </Box>
      ) : null}
      <Container
        sx={{
          borderRadius: 0,
          height: "62vh",
          zIndex: 1,
        }}
      >
        <SimpleSnackbar showInfo={disabledState} />
        <Grid
          container
          spacing={0}
          sx={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: "20px",
            border: "1px solid rgba(0, 0, 0, 0.12)",
            backgroundColor: "#fff",
          }}
        >
          <LetterForm
            theFormData={formData}
            setTheFormData={setformData}
            action={formHandler}
            theDisabledState={disabledState}
          />
          <Grid item xs={8}>
            <Paper
              sx={{
                height: "60vh",
                bgcolor: "#23adas",
                borderRadius: "0px",
                border: "0px",
                padding: "10px",
                boxShadow: "none",
                borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
              }}
            >
              <Title variant={"subtitle1"}>Result</Title>

              <TextBox>{result?.data}</TextBox>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                  justifyContent: "flex-start",
                  marginTop: "1.2vh",
                }}
              >
                <CustmButton
                  variant="contained"
                  disableElevation
                  btnlen={"20%"}
                  startIcon={<ContentCopyIcon />}
                  disabled={disabledState}
                  onClick={() => handleCopy()}
                >
                  Copy
                </CustmButton>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default LetterBoard;
