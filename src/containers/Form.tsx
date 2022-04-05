import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectCapacity, setCapacity } from "../app/slices/backpackSlice";
import {
  selectDistance,
  selectSeason,
  setDistance,
  setSeason,
} from "../app/slices/hikeSlice";
import { Season } from "../types";

export const Form: React.FC = () => {
  const dispatch = useAppDispatch();
  const capacity = useAppSelector(selectCapacity);
  const distance = useAppSelector(selectDistance);
  const season = useAppSelector(selectSeason);

  return (
    <Box display="flex" justifyContent="space-between" marginBottom="16px">
      <TextField
        name="distance"
        label="Distance"
        placeholder="e.g. 70km"
        type="number"
        variant="outlined"
        sx={{ maxWidth: "200px", width: "33%" }}
        InputProps={{
          endAdornment: <InputAdornment position="end">km</InputAdornment>,
        }}
        onChange={(e) => dispatch(setDistance(Number(e.target.value)))}
        value={distance || ""}
      />
      <FormControl sx={{ maxWidth: "200px", width: "33%", margin: "0 8px" }}>
        <InputLabel id="season-select-label">Season</InputLabel>
        <Select
          name="season"
          labelId="season-select-label"
          label="Season"
          onChange={(e: SelectChangeEvent<Season>) =>
            dispatch(setSeason(e.target.value as Season))
          }
          value={season}
        >
          <MenuItem value="spring">Spring</MenuItem>
          <MenuItem value="summer">Summer</MenuItem>
          <MenuItem value="fall">Fall</MenuItem>
          <MenuItem value="winter">Winter</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ maxWidth: "200px", width: "34%" }}>
        <InputLabel id="capacity-select-label">Backpack Capacity</InputLabel>
        <Select
          name="capacity"
          labelId="capacity-select-label"
          label="Backpack Capacity"
          onChange={(e: SelectChangeEvent<number>) =>
            dispatch(setCapacity(Number(e.target.value)))
          }
          value={capacity}
        >
          <MenuItem value={15}>15 kg</MenuItem>
          <MenuItem value={30}>30 kg</MenuItem>
          <MenuItem value={50}>50 kg</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
