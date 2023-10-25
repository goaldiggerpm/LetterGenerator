export const useCharCount = (maxLength) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (newValue.length <= maxLength) {
      setValue(newValue);
    }
  };

  return {
    value,
    handleChange,
  };
};
export const useCharCountLimit = (maxLength, event) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (newValue.length <= maxLength) {
      setValue(newValue);
    }
  };

  handleChange();

  return {
    value,
  };
};
