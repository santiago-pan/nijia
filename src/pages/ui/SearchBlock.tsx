import { Grid } from "@mui/material";
import { taiwanCities } from "../../data/cities";
import { distances } from "../../data/distances";
import { buyPrices } from "../../data/prices";
import Search from "./Search";
import SingleSelect from "./SingleSelect";

export type SearchBlockProps = {
  type:'buy' | 'rent'
};

export default function SearchBlock(props: SearchBlockProps) {
  return (
    <Grid container spacing={1} columns={{ xs: 6, sm: 6, md: 12 }}>
      <Grid item xs={5} sm={5} md={5}>
        <Search options={taiwanCities} />
      </Grid>
      <Grid item xs={1} sm={1} md={1}>
        <SingleSelect items={distances} label={"Km"} />
      </Grid>
      <Grid item xs={3} sm={3} md={3}>
        <SingleSelect items={buyPrices} label={"From"} />
      </Grid>
      <Grid item xs={3} sm={3} md={3}>
        <SingleSelect items={buyPrices} label={"To"} />
      </Grid>
    </Grid>
  );
}
