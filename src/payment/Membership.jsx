import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import { List, ListItem, TextField, Typography, Button } from "@mui/material";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { signup } from "../actions/user";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function Membership() {
  const [formData, setFormData] = useState(initialState);
  const [showProgress, setShowProgress] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signup(formData, navigate));

    setShowProgress(true);
    setTimeout(() => {
      setShowProgress(false);
    }, 8000);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div
          className="w-11/12 m-auto"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography>Creat Account</Typography>
          <Link to="/login">Login</Link>
        </div>
        <form
          style={{
            maxWidth: 800,
            margin: "0 auto",
          }}
          onSubmit={handleSubmit}
        >
          <List>
            <ListItem>Register</ListItem>
            <ListItem>
              <TextField
                name="firstName"
                variant="outlined"
                fullWidth
                label="First Name"
                id="firstName"
                inputProps={{ type: "firstName" }}
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    firstName: e.target.value,
                  })
                }
                required
              />
            </ListItem>
            <ListItem>
              <TextField
                name="lastName"
                variant="outlined"
                fullWidth
                label="Last Name"
                id="lastName"
                inputProps={{ type: "lastName" }}
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    lastName: e.target.value,
                  })
                }
                required
              />
            </ListItem>
            <ListItem>
              <TextField
                name="email"
                variant="outlined"
                fullWidth
                label="Email "
                id="email"
                inputProps={{ type: "email" }}
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                required
              />
            </ListItem>
            <ListItem>
              <TextField
                name="password"
                variant="outlined"
                fullWidth
                label="Password"
                id="password"
                inputProps={{ type: "password" }}
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
                required
              />
            </ListItem>
            <ListItem>
              <TextField
                name="confirmPassword"
                variant="outlined"
                fullWidth
                label="Confirm password"
                id="confirmPassword"
                inputProps={{ type: "password" }}
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    confirmPassword: e.target.value,
                  })
                }
                required
              />
            </ListItem>
            <ListItem>{showProgress && <ProgressBar />}</ListItem>
            <ListItem>
              have an account? &nbsp; <Link to="/login1"> Login</Link>
            </ListItem>
            <ListItem>
              <Button type="submit" fullWidth color="error" variant="contained">
                Register
              </Button>
            </ListItem>
          </List>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Membership;
