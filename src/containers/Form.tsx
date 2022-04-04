import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { Field, Form as FForm } from "formik";
import React from "react";

export const Form: React.FC = () => {
  return (
    <Box
      component={FForm}
      display="flex"
      justifyContent="space-between"
      marginBottom="16px"
    >
      <Field
        as={TextField}
        name="distance"
        label="Distance"
        placeholder="e.g. 70km"
        type="number"
        variant="outlined"
        sx={{ maxWidth: "200px", width: "33%" }}
        InputProps={{
          endAdornment: <InputAdornment position="end">km</InputAdornment>,
        }}
      />
      <FormControl sx={{ maxWidth: "200px", width: "33%", margin: "0 8px" }}>
        <InputLabel id="season-select-label">Season</InputLabel>
        <Field
          as={Select}
          name="season"
          labelId="season-select-label"
          label="Season"
        >
          <MenuItem value="spring">Spring</MenuItem>
          <MenuItem value="summer">Summer</MenuItem>
          <MenuItem value="fall">Fall</MenuItem>
          <MenuItem value="winter">Winter</MenuItem>
        </Field>
      </FormControl>
      <FormControl sx={{ maxWidth: "200px", width: "34%" }}>
        <InputLabel id="capacity-select-label">Backpack Capacity</InputLabel>
        <Field
          as={Select}
          name="capacity"
          labelId="capacity-select-label"
          label="Backpack Capacity"
        >
          <MenuItem value={15}>15 kg</MenuItem>
          <MenuItem value={30}>30 kg</MenuItem>
          <MenuItem value={50}>50 kg</MenuItem>
        </Field>
      </FormControl>
    </Box>
  );
};
