import React, { useState, useEffect } from "react";
import { Container, Typography, CircularProgress } from "@mui/material";
import FilterBar from "./components/FilterBar";
import CompanyTable from "./components/CompanyTable";
import HubIcon from '@mui/icons-material/Hub';
import Footer from "./components/Footer";
function App() {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");

  useEffect(() => {
    fetch("https://company-vault.vercel.app/api/companies")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCompanies(data);
        setFilteredCompanies(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    let filtered = companies.filter(
      (c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (location ? c.location === location : true) &&
        (industry ? c.industry === industry : true)
    );
    setFilteredCompanies(filtered);
  }, [searchTerm, location, industry, companies]);

  const locations = [...new Set(companies.map((c) => c.location))];
  const industries = [...new Set(companies.map((c) => c.industry))];

  return (
    <>
    
    <Container maxWidth="xl" sx={{backgroundColor:"#1976d2",borderBottomLeftRadius:10,borderBottomRightRadius:10 }}>
      
      <Typography variant="h4" sx={{fontFamily: "'Rubik', sans-serif",display:"flex",color:"white",justifyContent:"left",alignItems:"center",p:1}}><HubIcon sx={{color:"black",fontSize:40,m:1}}/>Company Vault</Typography>
    </Container>
    <Container sx={{ py: 5 }}>
  

      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        location={location}
        setLocation={setLocation}
        industry={industry}
        setIndustry={setIndustry}
        locations={locations}
        industries={industries}
      />

      {loading ? (
        <CircularProgress sx={{ display: "block", mx: "auto", mt: 5 }} />
      ) : (
        <CompanyTable companies={filteredCompanies} />
      )}
      
    </Container>
    <Container maxWidth="xl">
      <Footer />
    </Container>
    </>
  );
}

export default App;
