import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box    sx={{ color: 'gray', p: 5, mt: 0, textAlign: 'center',alignItems:"center"}}>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Company Vault. All rights reserved.           

        </Typography>   
    </Box>
  );
}
export default Footer;