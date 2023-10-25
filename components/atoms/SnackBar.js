import * as React from "react";
import { Box, styled } from "@mui/material";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const CstmSnackbar = styled(Snackbar)((props) => ({
  fontWeight: 300,
  color: "#9a9896",
  //   border: "0.4px solid #E0E3E7",
  //   padding: "10px",
  //   backgroundColor: "#405efb",

  //   "&:hover": {
  //     border: "0.4px solid #3c52b2",
  //   },
}));

export default function SimpleSnackbar({ showInfo = false }) {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  React.useEffect(() => {
    setOpen(showInfo);
  }, [showInfo]);

  const action = (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        // backgroundColor: "#405efb",
      }}
    >
      {/* <Button color="primary" size="small" onClick={handleClose}>
        Okay
      </Button> */}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Box>
  );

  return (
    <div>
      {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
      <CstmSnackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Question required"
        action={action}
      />
    </div>
  );
}
