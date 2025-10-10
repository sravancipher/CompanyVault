import React from "react";
import { TextField, MenuItem, Grid, Paper } from "@mui/material";
export default function FilterBar({
  searchTerm,
  setSearchTerm,
  location,
  setLocation,
  industry,
  setIndustry,
  locations,
  industries
}) {
  return (
    <Paper elevation={4} sx={{ p: 2, mb: 3 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4} size="grow">
          <TextField
            label="Search by Name"
            fullWidth
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={4} size="grow">
          <TextField
            select
            label="Filter by Location"
            fullWidth
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            {locations.map((loc) => (
              <MenuItem key={loc} value={loc}>
                {loc}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} sm={4} size="grow">
          <TextField
            select
            label="Filter by Industry"
            fullWidth
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            {industries.map((ind) => (
              <MenuItem key={ind} value={ind}>
                {ind}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </Paper>
  );
}
