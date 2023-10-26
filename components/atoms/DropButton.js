import { useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import {
  styled,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";

const CustomSelect = styled(Select)((props) => ({
  fontWeight: 300,
  color: "#9a9896",
  marginBottom: "5px",
  border: "0.4px solid #E0E3E7",
  borderRadius: "8px",

  "&:hover": {
    border: "0.4px solid #405efb",
  },
}));

/**
 * An atom component  
 * @param {String} labelname - label name for the label
 * @param {Array} options - options for items in dropdown
 * @param {String} name - name of the tag
 * @param {value} value - value of the tag 
 */
const DropButton = ({
  setvalue,
  labelname,
  options,
  name,
  value,
  disabled,
}) => {

  return (
    <FormControl variant="standard" sx={{ m: 1, width: 200, minWidth: 120 }}>
      <InputLabel
        id="demo-simple-select-standard-label"
        sx={{
          fontWeight: 500,
          fontSize: "1rem",
          color: "#344054",
          marginBottom: "5px",
          left: "7px",
        }}
      >
        {labelname}
      </InputLabel>
      <CustomSelect
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={value}
        name={name}
        onChange={setvalue}
        label="Val"
        disableUnderline
        IconComponent={KeyboardArrowDownIcon}
        disabled={disabled}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>

        {options.map((val, index) => {
          return (
            <MenuItem key={index} value={val}>
              {val}
            </MenuItem>
          );
        })}
        {/* <MenuItem value={20}>😊 Friendly</MenuItem>
        <MenuItem value={30}>😒 Casual</MenuItem> */}
      </CustomSelect>
    </FormControl>
  );
};

export default DropButton;