import * as React from "react";
import { Input as BaseInput } from "@mui/base/Input";
import { styled } from "@mui/system";

/**
 * An atom component  
 * @param {String} name - name of the input tag 
 * @param {String} value - value for the input tag 
 * @param {Function} onChange - passed function
 * @param {String} maxLength - decide the length of the atom according to given string 
 */
const Input = React.forwardRef(function CustomInput(props, ref) {
  return (
    <BaseInput
      slots={{
        root: RootDiv,
        input: InputElement,
        textarea: TextareaElement,
      }}
      {...props}
      ref={ref}
    />
  );
});

export default function InputMultiline(props) {
  // console.log(props);
  return (
    <Input
      aria-label="Demo input"
      multiline
      placeholder="Type something…"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      maxLength={props.maxLength}
    />
  );
}

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const RootDiv = styled("div")`
  display: flex;
  max-width: 100%;
`;

const InputElement = styled("input")(
  ({ theme }) => `
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  margin: auto;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[500] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

const TextareaElement = styled("textarea", {
  shouldForwardProp: (prop) =>
    !["ownerState", "minRows", "maxRows"].includes(prop.toString()),
})(
  ({ theme }) => `
  width: 24vw;
  height: 30vh;
  max-height: 30vh;
  margin: auto;
  max-height: 200px;
  resize: none;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:hover {
    border-color: #405efb;
  }

  &:focus {
    border-color: #405efb;
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? "#405efb" : "#405efb"
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);
