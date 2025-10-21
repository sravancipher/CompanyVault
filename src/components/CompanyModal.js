import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  maxWidth: "90%",
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 3,
  outline: "none",
  height: "auto",
};

function CompanyModal({ open, handleClose, company }) {
  const [source, setSource] = useState("");

  if (!company) return null;

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    source || company.location
  )}+to+${encodeURIComponent(company.location)}&output=embed`;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        {/* Header */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%)",
            p: 2,
            borderRadius: 2,
            mb: 2,
          }}
        >
          <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
            Reviews & Route
          </Typography>
        </Box>

        {/* Reviews */}
        <Box
          sx={{
            display: "flex",
            gap: 1.5,
            py: 1,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            "& > *": { scrollSnapAlign: "center" },
            "::-webkit-scrollbar": { height: "6px" },
            "::-webkit-scrollbar-thumb": { background: "#ccc", borderRadius: "10px" },
          }}
        >
          {company.reviews.map((r, index) => (
            <Card
              key={index}
              variant="outlined" sx={{
                minWidth: 220, p: 0,
                borderRadius: 2, transition: "0.2s",
                "&:hover": { boxShadow: 4, transform: "scale(1.02)" },
              }}
            >
              <CardContent>
                <Stack spacing={0.5}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {r.reviewerName}
                  </Typography>
                  <Rating value={r.rating} precision={0.5} readOnly size="small" />
                  <Typography sx={{ mt: 0.5, fontSize: "0.9rem" }}>
                    {r.comment}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Source Input */}
        <Box sx={{ mt: 3 }}>
          <TextField
            fullWidth label="Enter your location" variant="outlined" value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </Box>

        {/* Map */}
        <Box sx={{ mt: 3 }}>
          <Box
            component="iframe" title="map" width="100%" height="300" loading="lazy"
            allowFullScreen src={mapSrc} sx={{ border: 0, borderRadius: 2 }}
          />
        </Box>
      </Box>
    </Modal>
  );
}

export default CompanyModal;
