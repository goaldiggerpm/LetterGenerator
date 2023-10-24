import { styled, Typography, Button } from "@mui/material";

// my grey #9a9896

export const Label = styled("label")((props) => ({
  fontWeight: 500,
  fontSize: "0.875rem",
  color: "#344054",
  marginBottom: "5px",
}));

export const Title = styled(Typography)((props) => ({
  fontWeight: 700,
  color: "#344054",
  marginBottom: "5px",
}));

export const SubTitle = styled(Typography)((props) => ({
  fontWeight: 300,
  color: "#9a9896",
  marginBottom: "5px",
}));

export const CustmButton = styled(Button)((props) => ({
  fontWeight: 600,
  color: "#344054",
  fontSize: "0.9rem",
  marginBottom: "5px",
  textTransform: "capitalize",
  border: "0.4px solid #E0E3E7",
  borderRadius: "8px",
  width: `${props.fulllen ? "100%" : props.btnlen}`,

  "&:hover": {
    border: "0.4px solid #3c52b2",
    backgroundColor: "#405efb",
    color: "#fff",
  },
}));

export const TextBox = styled(Typography)((props) => ({
  fontWeight: 300,
  color: "#9a9896",
  marginBottom: "5px",
  overflowY: "scroll",
  height: "50vh",
  border: "0.4px solid #E0E3E7",
  padding: "10px",

  "&:hover": {
    border: "0.4px solid #3c52b2",
  },
}));
