import { List, ListItem, TextField, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, Redirect } from "react-router-dom";
import { signin, signup } from "../actions/user";
import Footer4 from "../components/Footer";
import Header3 from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Login() {
  const [formData, setFormData] = useState(initialState);
  const [showProgress, setShowProgress] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    if (user) {
      navigate("/seat-selection");
    } else {
      <Redirect to="/create-account" />;
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signin(formData, navigate));

    setShowProgress(true);
    setTimeout(() => {
      setShowProgress(false);
    }, 8000);
  };
  return (
    <>
      <Header3 />
      <div className="container">
        <form
          style={{
            maxWidth: 800,
            margin: "0 auto",
          }}
          onSubmit={handleSubmit}
        >
          <List>
            <ListItem>
              <Typography component="p" variant="h6">
                Login
              </Typography>
            </ListItem>
          </List>

          <List>
            <ListItem>
              <TextField
                name="email"
                variant="outlined"
                fullWidth
                label="Email"
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
                label="Password"
                variant="outlined"
                fullWidth
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
            <ListItem>{showProgress && <ProgressBar />}</ListItem>
            <ListItem>
              <Button type="submit" fullWidth variant="contained" color="error">
                Login
              </Button>
            </ListItem>
            {/* <ListItem>
              Don't have an account? &nbsp;{' '}
              <Link to="/createAcount"> Create Account </Link>
            </ListItem> */}
          </List>
        </form>
      </div>
      <Footer4 />
    </>
  );
}

export default Login;
