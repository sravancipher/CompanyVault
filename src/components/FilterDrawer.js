import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Slider from "@mui/material/Slider";

export default function FilterDrawer({
  filters,
  setFilters,
  locations,
  industries
}) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => setOpen(newOpen);

  const handleChange = (field) => (event, value) => {
    if (field === "rating" || field === "revenue" || field === "employeeCount" || field === "foundedYear") {
      setFilters((prev) => ({ ...prev, [field]: value }));
    } else {
      setFilters((prev) => ({ ...prev, [field]: event.target.value }));
    }
  };

  return (
    <>
      <Button variant="outlined" onClick={toggleDrawer(true)}>
        Filter
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} >
        <Box sx={{ width: 300, p: 3 }}>
          <Typography variant="h6" gutterBottom>Filter Companies</Typography>
          <Divider sx={{ mb: 2 }} />

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Location</InputLabel>
            <Select
              value={filters.location || ""}
              label="Location" onChange={handleChange("location")}
            >
              <MenuItem value="">All</MenuItem>
              {locations.map((loc) => (
                <MenuItem key={loc} value={loc}>{loc}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Industry</InputLabel>
            <Select
              value={filters.industry || ""} label="Industry"
              onChange={handleChange("industry")}
            >
              <MenuItem value="">All</MenuItem>
              {industries.map((ind) => (
                <MenuItem key={ind} value={ind}>{ind}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <Typography gutterBottom>Rating</Typography>
          <Slider
            value={filters.rating || [0, 5]} onChange={handleChange("rating")} valueLabelDisplay="auto" step={1}
            marks min={0} max={5} sx={{ mb: 2 }}
          />

          <Typography gutterBottom>Revenue (Cr)</Typography>
          <Slider
            value={filters.revenue || [0, 500]}
            onChange={handleChange("revenue")}
            valueLabelDisplay="auto"
            step={10}
            min={0}
            max={500}
            sx={{ mb: 2 }}
          />

          
          <Typography gutterBottom>Employee Count</Typography>
          <Slider
            value={filters.employeeCount || [0, 1000]}
            onChange={handleChange("employeeCount")}
            valueLabelDisplay="auto"
            step={10}
            min={0}
            max={1000}
            sx={{ mb: 2 }}
          />

          <Typography gutterBottom>Founded Year</Typography>
          <Slider
            value={filters.foundedYear || [1980, 2025]}
            onChange={handleChange("foundedYear")}
            valueLabelDisplay="auto"
            step={1}
            min={1980}
            max={2025}
            sx={{ mb: 2 }}
          />

        </Box>
      </Drawer>
    </>
  );
}
