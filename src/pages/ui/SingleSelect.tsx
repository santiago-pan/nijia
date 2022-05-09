import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from "@mui/material";
import React from "react";

export type SelectionItem = {
  id: string;
  label: string;
};

export type SingleSelectionProps = {
  label: string;
  items: ReadonlyArray<SelectionItem>;
};

export default function SingleSelect(props: SingleSelectionProps) {
  const [selection, setSelection] = React.useState<SelectionItem | string>('');

  const handleChange = (event: SelectChangeEvent<SelectionItem | string>) => {
    if (event.target.value) {
      setSelection(event.target.value as SelectionItem);
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="single-select-label">{props.label}</InputLabel>
      <Select<SelectionItem | string>
        sx={{ weigh: 111}}
        labelId="single-select-label"
        id="single-select"
        value={selection}
        label={props.label}
        onChange={handleChange}
      >
        {props.items.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
