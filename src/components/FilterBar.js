import React from "react";
import { TextField, Grid, Paper } from "@mui/material";
import FilterDrawer from "./FilterDrawer";

export default function FilterBar({
  searchTerm,
  setSearchTerm,
  filters,
  setFilters,
  locations,
  industries
}) {
  return (
    <Paper elevation={3} sx={{ p: 1, mb: 2 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4} size="grow">
          <TextField label="Search by Name" fullWidth variant="outlined" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>
{/* 
        <Grid item xs={12} sm={4} size="grow">
          <TextField select label="Filter by Location" fullWidth value={location} onChange={(e) => setLocation(e.target.value)}
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
          <TextField select label="Filter by Industry" fullWidth value={industry} onChange={(e) => setIndustry(e.target.value)}>
            <MenuItem value="">All</MenuItem>
            {industries.map((ind) => (
              <MenuItem key={ind} value={ind}>
                {ind}
              </MenuItem>
            ))}
          </TextField>
        </Grid> */}

   <Grid item xs={12} sm={4} sx={{ display: "flex", justifyContent: { xs: "flex-start", sm: "flex-end" } }}>
          {/* Use the drawer-based filter component */}
          <FilterDrawer
            filters={filters}
            setFilters={setFilters}
            locations={locations}
            industries={industries}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
