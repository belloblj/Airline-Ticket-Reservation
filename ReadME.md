# Airline Ticket Reservation App

## Overview
This project is a simple airline ticket reservation system built with **HTML, CSS, JavaScript, and Node.js (Express)**.  
Users can book one-way or round-trip tickets, select a destination, and receive a confirmation email.

---

##  Features
- Responsive HTML/CSS front-end
- Reservation form with:
  - Email address
  - Flight date
  - Destination (dropdown list of popular cities/airports)
  - Round-trip option with return date
- Client-side validation for email and required fields
- Express server to serve static files and handle form submissions
- Validation to ensure flight dates are in the future
- Confirmation email sent via **Nodemailer**
- Thank-you and error pages returned after submission

---

## 📂 Project Structure
```
airline-reservation/ 
│ 
├── public/ 
│   ├── index.html      # Reservation form 
│   ├── style.css       # Stylesheet 
│   └── script.js       # Client-side logic 
│ 
├── server.js           # Express server 
├── package.json        # Dependencies and scripts 
└── README.md           # Project documentation
```

---

##  Setup Instructions

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd airline-reservation
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure email
In server.js, update the Nodemailer transporter with your email credentials:
```Js
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",       // replace with your Gmail
    pass: "your-app-password"           // replace with your Gmail App Password
  }
});
```


⚠️ Important: Gmail requires an App Password (not your normal password).
Alternatively, use Ethereal Email for safe testing.

### 4. Run the server
```bash
npm start
```

or (for auto-restart during development):

```bash
npm run dev
```

### 5. Open in browser

Visit http://localhost:3000 to access the reservation page.

### Email Testing
- Production: Use Gmail with App Passwords or another SMTP provider.
- Development: Use Ethereal Email for fake accounts and preview links.

### Future Improvements
- Store reservations in a database (e.g., MongoDB or PostgreSQL).
- Add user authentication.
- Expand destination list dynamically from a JSON or API.
- Improve UI with frameworks like Bootstrap or TailwindCSS.

## Author
Bolaji Bello
Software Development Diploma (Bow Valley College) | AWS Certified | Full-stack Developer Apprentice

---
