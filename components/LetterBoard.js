"use client";

import React, { useCallback, useEffect, useState } from "react";

import {
  Box,
  Container,
  FormControl,
  Grid,
  Paper,
  Snackbar,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import axios from "axios";

import {
  Label,
  Title,
  SubTitle,
  CustmButton,
  TextBox,
} from "./atoms/FormFields";
import InputMultiline from "./atoms/CustmTextrarea";
import DropButton from "./atoms/DropButton";
import SimpleSnackbar from "./atoms/SnackBar";

const defaultValues = {
  description: "",
  tone: "",
  style: "",
};

const LetterBoard = () => {
  const [formData, setformData] = useState(defaultValues);
  const [disabledState, setdisabledState] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleOnChange = useCallback((ev) => {
    if (ev.target.name === "description") {
      const handleChange = (event) => {
        const newValue = event.target.value;
        return newValue.slice(0, 300);
      };
      setformData((prev) => ({ ...prev, [ev.target.name]: handleChange(ev) }));
    } else {
      setformData((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
    }
  }, []);

  const formHandler = async () => {
    if (
      formData?.description === "" ||
      formData?.description === null ||
      formData?.description === undefined
    ) {
      setdisabledState(true);
    }
    console.log("input taken");
    // e.preventDefault();
    setIsLoading(true);
    try {
      const result = await axios.post("/api", formData);
      console.log("result is: ", result);
      setResult(result.data);
    } catch (err) {
      // setError(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (
      formData?.description !== "" ||
      formData?.description !== null ||
      formData?.description !== undefined
    ) {
      setdisabledState(false);
    }
    // console.log("value: ", formData);
  }, [formData]);

  const handleCopy = () => {
    navigator.clipboard.writeText(result?.data);
  };

  return (
    <Container
      sx={{
        borderRadius: 0,
        height: "62vh",
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
        <Grid item xs={4}>
          <Box>
            <Paper
              variant="outlined"
              sx={{
                height: "60vh",
                bgcolor: "#23adas",
                borderRadius: "0px",
                border: "0px",
              }}
              elevation={1}
            >
              <Grid sx={{ padding: "10px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "24vw",
                    margin: "auto",
                  }}
                >
                  <Title variant={"h4"}>Letter Generator</Title>
                  <SubTitle variant="subtitle1">
                    Generate personalized and professional letters
                  </SubTitle>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    maxWidth: "24vw",
                    margin: "2.4vh auto auto auto",
                  }}
                >
                  <FormControl>
                    <Label>Describe your letter</Label>
                    <InputMultiline
                      name="description"
                      value={formData?.description}
                      onChange={handleOnChange}
                    />
                  </FormControl>
                  <SubTitle variant="subtitle1" sx={{ alignSelf: "flex-end" }}>
                    {(formData?.description).length}/300
                  </SubTitle>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                    marginTop: "4vh",
                  }}
                >
                  <DropButton
                    name="tone"
                    labelname={"tone"}
                    value={formData?.tone}
                    setvalue={handleOnChange}
                    options={[
                      "📖 descriptive",
                      "🕴️ personal",
                      "🎯 direct",
                      "🤝 confident",
                    ]}
                    disabled={disabledState}
                  />
                  <DropButton
                    name="style"
                    labelname={"style"}
                    value={formData?.style}
                    setvalue={handleOnChange}
                    options={["💼 formal", "👕 casual", "😐 neutral"]}
                    disabled={disabledState}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    maxWidth: "24vw",
                    margin: "auto",
                    marginTop: "4vh",
                  }}
                >
                  <CustmButton
                    variant="contained"
                    disableElevation
                    fulllen={true}
                    onClick={() => formHandler()}
                    disabled={disabledState}
                  >
                    Create more
                  </CustmButton>
                </Box>
              </Grid>
            </Paper>
          </Box>
        </Grid>
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
              {/* <CustmButton
                variant="contained"
                disableElevation
                btnlen={"20%"}
                startIcon={<SaveIcon />}
                disabled={disabledState}
              >
                Save
              </CustmButton> */}
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
  );
};

export default LetterBoard;
