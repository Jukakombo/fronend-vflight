import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Footer4 from "../components/Footer";
import Header3 from "../components/Navbar";
import { List, ListItem, TextField, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import { createRegistration } from "../actions/registration";

const initialState = {
  firstName: "",
  lastName: "",
  correctEmail: "",
  city: "",
  delegate: "",
  country: "",
  amount: "",
  paymentMethode: "",
  whatsApp: "",
};

function Register() {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (!user) {
      navigate("/create-account");
    } else {
      navigate("/seat-selection");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createRegistration({ formData, navigate }));

    setSuccess(true);
    setTimeout(function () {
      setSuccess(false);
    }, 6000); //wait 8 seconds
  };

  return (
    <>
      <Header3 />
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Passenger and seat selection</Typography>
          <Link to="/login">{!user ? "Login" : "Logout"}</Link>
        </div>
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          <List>
            <ListItem>
              <TextField
                name="firstName"
                variant="outlined"
                fullWidth
                label="First Name"
                id="firstName"
                inputProps={{ type: "firstName" }}
                required
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
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
                required
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </ListItem>
            <ListItem>
              <TextField
                name="correctEmail"
                variant="outlined"
                fullWidth
                label="Email "
                id="correctEmail"
                input="text"
                required
                value={formData.correctEmail}
                onChange={(e) =>
                  setFormData({ ...formData, correctEmail: e.target.value })
                }
              />
            </ListItem>

            <ListItem>
              <TextField
                name="country"
                variant="outlined"
                fullWidth
                label="Country "
                id="country"
                inputProps={{ type: "country" }}
                required
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              />
            </ListItem>
            <ListItem>
              <TextField
                name="city"
                variant="outlined"
                fullWidth
                label="City "
                id="city"
                inputProps={{ type: "city" }}
                required
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />
            </ListItem>
            <ListItem>
              <TextField
                name="whatsApp"
                variant="outlined"
                fullWidth
                label="WhatsApp Number / Phone "
                id="whatsApp"
                inputProps={{ type: "whatsApp" }}
                required
                value={formData.whatsApp}
                onChange={(e) =>
                  setFormData({ ...formData, whatsApp: e.target.value })
                }
              />
            </ListItem>
            <ListItem>
              <TextField
                name="delegate"
                variant="outlined"
                fullWidth
                label="Delegate of which country? "
                id="delegate"
                inputProps={{ type: "delegate" }}
                required
                value={formData.delegate}
                onChange={(e) =>
                  setFormData({ ...formData, delegate: e.target.value })
                }
              />
            </ListItem>
            <ListItem>
              <span>Amount $ *</span>
            </ListItem>

            <ListItem>
              <select
                style={{
                  padding: "10px",
                  width: "100%",
                  border: "0.5px solid gray",
                  borderRadius: "5px",
                  backgroundColor: "#F8F8F8",
                }}
                name="amount"
                variant="outlined"
                id="amount"
                type="number"
                required
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
              >
                <option>5</option>
              </select>
            </ListItem>
            <ListItem>
              <span>Payment Methode *</span>
            </ListItem>
            <ListItem>
              <select
                style={{
                  padding: "10px",
                  width: "100%",
                  border: "0.5px solid gray",
                  borderRadius: "5px",
                  backgroundColor: "#F8F8F8",
                }}
                name="paymentMethode"
                id="amount"
                type="text"
                required
                value={formData.paymentMethode}
                onChange={(e) =>
                  setFormData({ ...formData, paymentMethode: e.target.value })
                }
              >
                <option value="PayPal">PayPal</option>
                <option value="Stripe">Stripe</option>
              </select>
            </ListItem>

            <ListItem>{success && <ProgressBar />}</ListItem>
            <ListItem>
              <Button type="submit" fullWidth color="error" variant="contained">
                Register
              </Button>
            </ListItem>
          </List>
        </form>
      </div>
      <Footer4 />
    </>
  );
}

export default Register;
