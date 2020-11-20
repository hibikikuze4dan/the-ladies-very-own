import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSecondaryDenizenType,
  getSecondaryEntourageRole,
  setDenizen,
  setEntourageRole,
} from "../../features/choices/choicesSlice";
import {
  getFilteredDenizenChoices,
  getFilteredEntourageChoices,
} from "../../features/data/dataSlice";

const ReasonDialog = ({ type, open, handleClose }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isHybrid = type === "Hybrid";
  const title = isHybrid
    ? "Choose Your Extra Species"
    : "Choose Your Extra Class";
  const label = isHybrid ? "Extra Species" : "Extra Class";
  const values = {
    Versatile: useSelector(getSecondaryEntourageRole),
    Hybrid: useSelector(getSecondaryDenizenType),
  };
  const choices = {
    Versatile: useSelector(getFilteredEntourageChoices),
    Hybrid: useSelector(getFilteredDenizenChoices),
  };
  const handleChange = (event) => {
    if (isHybrid) {
      dispatch(setDenizen({ secondary: event.target.value }));
    } else {
      dispatch(setEntourageRole({ secondary: event.target.value }));
    }
    handleClose(!open);
    return null;
  };

  console.log(choices, type);

  return (
    <Dialog open={open} onClose={() => handleClose(!open)}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <FormControl fullWidth>
          <InputLabel>{label}</InputLabel>
          <Select
            value={values[type]}
            input={<Input />}
            onChange={handleChange}
          >
            <MenuItem value="">--CLEAR--</MenuItem>
            {choices[type]?.map((choice, index) => {
              return (
                <MenuItem key={`menu-iten-${index}`} value={choice.title}>
                  {choice.title}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </DialogContent>
    </Dialog>
  );
};

export default ReasonDialog;
