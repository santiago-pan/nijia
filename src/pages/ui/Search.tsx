import { Autocomplete, TextField } from "@mui/material";
import React from "react";

export type SearchOption = {
  id: string;
  label: string;
};

export type SearchProps = {
  options: Array<SearchOption>;
};

export default function Search(props: SearchProps) {
  return (
    <Autocomplete<SearchOption, boolean, boolean, boolean>
      sx={{ width: "100%" }}
      fullWidth
      id="search"
      options={props.options}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="City, neighborhood, address, etc" />
      )}
    />
  );
}
