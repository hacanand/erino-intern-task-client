import React, { useState } from "react";

import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Grid2,
} from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";
const VITE_APP_BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;
export default function EditModalForm({ data, setEdited }) {
  const [formData, setFormData] = useState({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phoneNumber: data.phoneNumber,
    company: data.company,
    jobTitle: data.jobTitle,
  });
 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // console.log(formData)
  const handleSubmit = async (event) => {
    // console.log(formData)
    // setSaving(true);
    event.preventDefault();
    try {
      const res = await axios.put(
        `${VITE_APP_BACKEND_URL}/contacts/${data._id}`,
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          company: formData.company,
          jobTitle: formData.jobTitle,
        }
      );
      toast.success(res?.data?.message);
      setEdited(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        company: "",
        jobTitle: "",
      });
    } catch (error) {
      toast.error(error?.data?.message);
      console.log(error);
    }
    
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {/* Contact Form */}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid2 container spacing={2}>
            <Grid2 item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Grid2>
            <Grid2 item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Grid2>
            <Grid2 item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid2>
            <Grid2 item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </Grid2>
            <Grid2 item xs={12}>
              <TextField
                fullWidth
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </Grid2>
            <Grid2 item xs={12}>
              <TextField
                fullWidth
                label="Job Title"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                required
              />
            </Grid2>
            <Grid2 item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                // onClick={handleSubmit}
              >
                Update
              </Button>
            </Grid2>
          </Grid2>
        </form>
      </Box>
    </Container>
  );
}
