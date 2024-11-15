import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React from "react";
import ContactForm from "./components/contact-form";
import EnhancedTable from "./components/contact-table";
// const dotenv=require('dotenv').config()
const App = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="h-full w-full p-6 ">
      <Box sx={{ width: "100%", typography: "body1",  }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider"}}>
          <Tabs value={value} onChange={handleChange}  centered>
            <Tab label="Contact Form" value="1" />
            <Tab label="Contact Table" value="2" />
          </Tabs>
        </Box>
        <Box sx={{ p: 2 }}>
          {value === "1" && <div>
            <ContactForm/>
          </div>}
          {value === "2" && <div>
          <EnhancedTable/>
          </div>}
        </Box>
      </Box>
    </div>
  );
};

export default App;
