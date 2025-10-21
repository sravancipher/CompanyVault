import * as React from "react";
import {
  Box,
  Drawer,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
} from "@mui/material";

export default function FilterDrawer({
  filters,
  setFilters,
  locations,
  industries,
}) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => setOpen(newOpen);

  const handleChange = (field) => (event, value) => {
    if (
      field === "rating" ||
      field === "revenue" ||
      field === "employeeCount" ||
      field === "foundedYear"
    ) {
      setFilters((prev) => ({ ...prev, [field]: value }));
    } else {
      setFilters((prev) => ({ ...prev, [field]: event.target.value }));
    }
  };

  const handleClear = () => {
    setFilters({
      location: "",
      industry: "",
      rating: [0, 5],
      revenue: [0, 500],
      employeeCount: [0, 1000],
      foundedYear: [1980, 2025],
    });
  };

  return (
    <>
      <Button variant="contained" sx={{ borderRadius: 2 }} onClick={toggleDrawer(true)}>
        Filter
      </Button>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 320, height: "100%", display: "flex", flexDirection: "column" }}>
          
          {/* Header */}
          <Box
            sx={{
              p: 2,
              background: "linear-gradient(135deg,#8bc6ec 0%,#9599e2 100%)",
              borderBottom: "1px solid #ddd",
            }}
          >
            <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
              Filter Companies
            </Typography>
          </Box>

          {/* Content */}
          <Box sx={{ flex: 1, overflowY: "auto", p: 3 }}>
            
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Location</InputLabel>
              <Select
                value={filters.location || ""}
                label="Location"
                onChange={handleChange("location")}
              >
                <MenuItem value="">All</MenuItem>
                {locations.map((loc) => (
                  <MenuItem key={loc} value={loc}>
                    {loc}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Industry</InputLabel>
              <Select
                value={filters.industry || ""}
                label="Industry"
                onChange={handleChange("industry")}
              >
                <MenuItem value="">All</MenuItem>
                {industries.map((ind) => (
                  <MenuItem key={ind} value={ind}>
                    {ind}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Typography gutterBottom sx={{ fontWeight: 500 }}>
              Rating
            </Typography>
            <Slider
              value={filters.rating || [0, 5]}
              onChange={handleChange("rating")}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={5}
              sx={{ mb: 3 }}
            />

            <Typography gutterBottom sx={{ fontWeight: 500 }}>
              Revenue (Cr)
            </Typography>
            <Slider
              value={filters.revenue || [0, 500]}
              onChange={handleChange("revenue")}
              valueLabelDisplay="auto"
              step={10}
              min={0}
              max={500}
              sx={{ mb: 3 }}
            />

            <Typography gutterBottom sx={{ fontWeight: 500 }}>
              Employee Count
            </Typography>
            <Slider
              value={filters.employeeCount || [0, 1000]}
              onChange={handleChange("employeeCount")}
              valueLabelDisplay="auto"
              step={10}
              min={0}
              max={1000}
              sx={{ mb: 3 }}
            />

            <Typography gutterBottom sx={{ fontWeight: 500 }}>
              Founded Year
            </Typography>
            <Slider
              value={filters.foundedYear || [1980, 2025]}
              onChange={handleChange("foundedYear")}
              valueLabelDisplay="auto"
              step={1}
              min={1980}
              max={2025}
              sx={{ mb: 3 }}
            />
          </Box>

          {/* Footer (only Clear) */}
          <Box sx={{ p: 2, borderTop: "1px solid #eee" }}>
            <Button
              fullWidth
              variant="outlined"
              sx={{ borderRadius: 2 }}
              onClick={handleClear}
            >
              Clear Filters
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
