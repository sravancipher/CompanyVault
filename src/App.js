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
  
  const [filters, setFilters] = React.useState({
  location: "",
  industry: "",
  rating: [0, 5],
  revenue: [0, 500],
  employeeCount: [0, 1000],
  foundedYear: [1980, 2025],
});


  useEffect(() => {
    const originalTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Ready when you are";
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  
  useEffect(() => {
    fetch("https://company-vault.vercel.app/api/companies")
    
    // fetch("http://localhost:5000/companies")
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
  let filtered = companies.filter((c) => {
    const matchesName = c.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = filters.location ? c.location === filters.location : true;
    const matchesIndustry = filters.industry ? c.industry === filters.industry : true;
    const matchesRating = c.rating >= filters.rating[0] && c.rating <= filters.rating[1];
    const matchesRevenue = c.revenue >= filters.revenue[0] && c.revenue <= filters.revenue[1];
    const matchesEmployees = c.employeeCount >= filters.employeeCount[0] && c.employeeCount <= filters.employeeCount[1];
    const matchesFounded = c.foundedYear >= filters.foundedYear[0] && c.foundedYear <= filters.foundedYear[1];

    return matchesName && matchesLocation && matchesIndustry &&
           matchesRating && matchesRevenue && matchesEmployees && matchesFounded;
  });

  setFilteredCompanies(filtered);
}, [searchTerm, filters, companies]);

  const locations = [...new Set(companies.map((c) => c.location))];
  const industries = [...new Set(companies.map((c) => c.industry))];
  

  return (
    <>
    
    <Container maxWidth="xl" sx={{backgroundColor:"#1976d2",borderBottomLeftRadius:8,borderBottomRightRadius:8 }}>
      
          <Typography variant="h4"sx={{fontFamily:  "'Exo 2', sans-serif",display:"flex",color:"white", justifyContent: { xs: "center", lg: "flex-start" },alignItems:"center",pt:1}}><HubIcon sx={{color:"black",fontSize:40,ml:1,mr:1}}/>Company Vault</Typography>
      <Typography variant="subtitle1" sx={{ color: "white", textAlign: { xs: "center", md: "left" }, fontFamily: "'Nunito Sans', sans-serif", mt:0,pl: { md: 13, xs:13 }}}> Filter Fast, Find Everything </Typography>
    </Container>
    <Container sx={{ py: 5 }}>

      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filters={filters}
        setFilters={setFilters}
        locations={locations}
        industries={industries}
        />


      {loading ? (
        <CircularProgress sx={{ display: "block", mx: "auto", mt: 5}} />
      ) : (
        <CompanyTable companies={filteredCompanies} />
      )}
      
    </Container>
      <Container maxWidth="xl" sx={{ mt: "auto" }}>
        <Footer/>
      </Container>
    
    </>
  );
}

export default App;
