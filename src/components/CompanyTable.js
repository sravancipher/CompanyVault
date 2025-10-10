import React,{useRef, useState} from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Pagination,
  Box,
  TableSortLabel

} from "@mui/material";

export default function CompanyTable({ companies }) {
  const [page,setPage]=useState(1)
  const [sortOrder, setSortOrder] = useState("desc"); // "asc" or "desc"
  
  const handleChange = (event, value) => {
    console.log("value inside handlechange",value);
    setPage(value);
  };
  let h=useRef (null);
  
  if (!companies.length)
    return (
      <Typography ref={h} variant="h6" align="center" sx={{ mt: 3 }}>
        No companies found.
      </Typography>
    );
   const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setPage(1); // when u dot want to reset to first page on sort we can comment this
  };

  const sortedCompanies = [...companies].sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return sortOrder === "asc" ? -1 : 1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });
  const startpage=(page-1)*5;
  const endpage=startpage+5;
  const paginatedCompanies=sortedCompanies.slice(startpage,endpage);
  console.log(paginatedCompanies);
  const totalpages=Math.ceil(companies.length/5);
  console.log(startpage);
  console.log(endpage);

  return (
    <>
    
      
    <TableContainer component={Paper} elevation={4}>
      
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#1976d2" }}>
            {/* <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell> */}
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                <TableSortLabel
                  active={true}
                  direction={sortOrder}
                  onClick={handleSort}
                  sx={{ color: "white" }}
                >
                  Name
                </TableSortLabel>
              </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Location</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Industry</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedCompanies.map((c) => (
            <TableRow key={c.id} hover>
              <TableCell>{c.name}</TableCell>
              <TableCell>{c.location}</TableCell>
              <TableCell>{c.industry}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center", lg: "flex-end" }, // center on small, right on large
        m: 2
      }}
    >
      <Pagination count={totalpages} page={page} onChange={handleChange}/>
    </Box>
    </>
  );
}
