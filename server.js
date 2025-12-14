// server.js
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Serve homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Handle reservation form submission
app.post("/reserve", async (req, res) => {
  const { email, flightDate, returnDate, destination } = req.body;

  const today = new Date();
  const flight = new Date(flightDate);
  const returnFlight = returnDate ? new Date(returnDate) : null;

  // Validate dates
  if (flight <= today || (returnFlight && returnFlight <= today)) {
    return res.send(`
      <h2>Reservation Failed</h2>
      <p>Flight dates must be in the future.</p>
    `);
  }

  // Validate destination
  if (!destination || destination.trim() === "") {
    return res.send(`
      <h2>Reservation Failed</h2>
      <p>Destination is required.</p>
    `);
  }

  try {
    // Transporter setup (use Ethereal for testing or Gmail with App Passwords)
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "yourEmail@gmail.com",       
        pass: "your_app_password"           
      }
    });

    // Send confirmation email
    await transporter.sendMail({
      from: "your-email@gmail.com",
      to: email,
      subject: "Airline Reservation Confirmation",
      text: `Thank you for reserving your flight to ${destination} on ${flightDate}${
        returnDate ? " with return on " + returnDate : ""
      }.`
    });

    // Success response
    res.send(`
      <h2>Reservation Successful</h2>
      <p>Thank you for booking your flight to ${destination}! A confirmation email has been sent to ${email}.</p>
    `);
  } catch (error) {
    console.error(error);
    res.send("<h2>Error sending confirmation email.</h2>");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});