import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { sanityClient } from "./sanityClient";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Database() {
  const [passenger, setPassenger] = useState([]);
  useEffect(() => {
    const query = `*[_type=="vflight"]{
        _createdAt,_id,firstName,lastName, date,departureTime,arrivalTime,to,from,amount
      }`;
    sanityClient.fetch(query).then((response) => setPassenger(response));
  }, []);
  return (
    <>
      <Navbar />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell align="right">Origin</TableCell>
              <TableCell align="right">Destination</TableCell>
              <TableCell align="right">Departure Time</TableCell>
              <TableCell align="right">Arrival Time</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Amount $</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {passenger.map((v) => (
              <TableRow
                key={v._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {v.firstName}
                  {v.LastName}
                </TableCell>
                <TableCell align="right">{v.from}</TableCell>
                <TableCell align="right">{v.to}</TableCell>
                <TableCell align="right">{v.departureTime}</TableCell>
                <TableCell align="right">{v.arrivalTime}</TableCell>
                <TableCell align="right">{v.date}</TableCell>
                <TableCell align="right">{v.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer />
    </>
  );
}
