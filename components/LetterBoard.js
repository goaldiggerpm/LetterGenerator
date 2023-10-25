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
  question: "",
  tone: "",
  style: "",
};

const LetterBoard = () => {
  const [formData, setformData] = useState(defaultValues);
  const [disabledState, setdisabledState] = useState(true);

  const handleOnChange = useCallback((ev) => {
    // console.log("value: ", ev.target.value);
    setformData((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
  }, []);

  const formHandler = () => {
    if (
      formData?.question === "" ||
      formData?.question === null ||
      formData?.question === undefined
    ) {
      setdisabledState(true);
    }
    console.log("input taken");
  };

  useEffect(() => {
    if (
      formData?.question !== "" ||
      formData?.question !== null ||
      formData?.question !== undefined
    ) {
      setdisabledState(false);
    }
    console.log("value: ", formData);
  }, [formData]);

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
                      name="question"
                      value={formData?.question}
                      onChange={handleOnChange}
                    />
                  </FormControl>
                  <SubTitle variant="subtitle1" sx={{ alignSelf: "flex-end" }}>
                    200/300
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

            <TextBox>
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Why do we use it? It is a long established fact that
              a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
              Where does it come from? Contrary to popular belief, Lorem Ipsum
              is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the
              cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
              and Evil) by Cicero, written in 45 BC. This book is a treatise on
              the theory of ethics, very popular during the Renaissance. The
              first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
              from a line in section 1.10.32. The standard chunk of Lorem Ipsum
              used since the 1500s is reproduced below for those interested.
              Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
              by Cicero are also reproduced in their exact original form,
              accompanied by English versions from the 1914 translation by H.
              Rackha
            </TextBox>
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
                startIcon={<SaveIcon />}
                disabled={disabledState}
              >
                Save
              </CustmButton>
              <CustmButton
                variant="contained"
                disableElevation
                btnlen={"20%"}
                startIcon={<ContentCopyIcon />}
                disabled={disabledState}
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
