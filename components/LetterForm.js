"use client";

import React, { useCallback} from "react";

import {
  Box,
  FormControl,
  Grid,
  Paper,
} from "@mui/material";

import {
  Label,
  Title,
  SubTitle,
  CustmButton,
} from "./atoms/FormFields";
import InputMultiline from "./atoms/CustmTextrarea";
import DropButton from "./atoms/DropButton";

/**
 * An molecule component for LetterBoard 
 * @param {Object} theFormData - form data object 
 * @param {Function} setTheFormData - function to set form data
 * @param {Function} action - to call actionable
 * @param {Boolean} theDisabledState - state for disabling actions
 */
const LetterForm = ({ theFormData, setTheFormData, action, theDisabledState }) => {

  // function to set the data on event changes from inputs
  const handleOnChange = useCallback((ev) => {
    if (ev.target.name === "description") {
      const handleChange = (event) => {
        const newValue = event.target.value;
        return newValue.slice(0, 300);
      };
      setTheFormData((prev) => ({
        ...prev,
        [ev.target.name]: handleChange(ev),
      }));
    } else {
      setTheFormData((prev) => ({
        ...prev,
        [ev.target.name]: ev.target.value,
      }));
    }
  }, [setTheFormData]);

  return (
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
                  value={theFormData?.description}
                  onChange={handleOnChange}
                />
              </FormControl>
              <SubTitle variant="subtitle1" sx={{ alignSelf: "flex-end" }}>
                {(theFormData?.description).length}/300
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
                value={theFormData?.tone}
                setvalue={handleOnChange}
                options={[
                  "📖 descriptive",
                  "🕴️ personal",
                  "🎯 direct",
                  "🤝 confident",
                ]}
                disabled={theDisabledState}
              />
              <DropButton
                name="style"
                labelname={"style"}
                value={theFormData?.style}
                setvalue={handleOnChange}
                options={["💼 formal", "👕 casual", "😐 neutral"]}
                disabled={theDisabledState}
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
                onClick={() => action()}
                disabled={theDisabledState}
              >
                Create more
              </CustmButton>
            </Box>
          </Grid>
        </Paper>
      </Box>
    </Grid>
  );
};

export default LetterForm;
