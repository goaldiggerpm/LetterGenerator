import * as React from "react";
import { Box, styled } from "@mui/material";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const CstmSnackbar = styled(Snackbar)((props) => ({
  fontWeight: 300,
  color: "#9a9896",
}));
/**
 * An atom component  
 * @param {Boolean} showInfo - manage the state of the component by setting boolean value 
 */
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
      }}
    >
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
