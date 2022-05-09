import { Button, Grid, Tab, Tabs } from "@mui/material";
import React from "react";
import { Link, matchPath, useLocation } from "react-router-dom";

export default function HomeNavBlock() {

  const routeMatch = useRouteMatch(['/buy','/rent']);
  const currentTab = routeMatch?.pattern?.path;

    return (
    <Tabs value={currentTab}>
      <Tab label="Buy" value="/buy" to="/buy" component={Link} />
      <Tab label="Rent" value="/rent" to="/rent" component={Link} />
    </Tabs>
  );

  // return (
  //   <Grid container spacing={1} columns={{ xs: 6, sm: 6, md: 12 }}>
  //     <Grid item xs={3} sm={3} md={3}>
  //       <Button variant="contained" href="/rent">
  //         Rent
  //       </Button>
  //     </Grid>
  //     <Grid item xs={3} sm={3} md={3}>
  //       <Button variant="contained" href="/buy">
  //         Buy
  //       </Button>
  //     </Grid>
  //     <Grid item xs={3} sm={3} md={3}>
  //       <Button variant="contained" href="/new">
  //         Newly built
  //       </Button>
  //     </Grid>
  //     <Grid item xs={3} sm={3} md={3}>
  //       <Button variant="contained" href="/business">
  //         For business
  //       </Button>
  //     </Grid>
  //   </Grid>
  // );
}


// const routeMatch = useRouteMatch(['/inbox/:id', '/drafts', '/trash']);
//   const currentTab = routeMatch?.pattern?.path;

//   return (
//     <Tabs value={currentTab}>
//       <Tab label="Inbox" value="/inbox/:id" to="/inbox/1" component={Link} />
//       <Tab label="Drafts" value="/drafts" to="/drafts" component={Link} />
//       <Tab label="Trash" value="/trash" to="/trash" component={Link} />
//     </Tabs>
//   );

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}