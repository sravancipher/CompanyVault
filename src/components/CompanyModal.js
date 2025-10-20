import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import { useState } from "react";
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  maxWidth: "90%",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 3,
  outline: "none",
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
        <Typography variant="h6" sx={{ mb: 2 }}>
          Reviews
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 1,
            py: 1,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            "& > *": { scrollSnapAlign: "center" },
            "::-webkit-scrollbar": { display: "none" },
          }}
        >
          {company.reviews.map((r, index) => (
            <Card key={index} variant="outlined" sx={{ minWidth: 200, p: 0 }}>
              <CardContent>
                <Stack spacing={0.5}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {r.reviewerName}
                  </Typography>
                  <Rating value={r.rating} precision={0.5} readOnly size="small" />
                  <Typography sx={{ mt: 0.5 }}>{r.comment}</Typography>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Source Input */}
        <Box sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Enter your location"
            variant="outlined"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </Box>

        {/* Map */}
        <Box sx={{ mt: 2 }}>
          <iframe
            title="map"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={mapSrc}
          ></iframe>
        </Box>
      </Box>
    </Modal>
  );
}

export default CompanyModal;
