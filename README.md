# Daystar Daycare Administrative Management System

![Daystar Daycare Banner](https://private-user-images.githubusercontent.com/161653709/421239029-c520f74b-6b4c-4367-9303-0754af8a1344.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE2NzgxMzIsIm5iZiI6MTc0MTY3NzgzMiwicGF0aCI6Ii8xNjE2NTM3MDkvNDIxMjM5MDI5LWM1MjBmNzRiLTZiNGMtNDM2Ny05MzAzLTA3NTRhZjhhMTM0NC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxMVQwNzIzNTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02MWZjYmI2NTg0ZGI5ZDhmYzVlNTNiYzQ3NTViMTg5YTgxYTQ2MzNkMWRjMjU0NDMwZDQ0YTg3Mjg2MzViOTQ4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.CgQef2vbnpmPRSoDMOsjyvN7NWwe6PImIW7G5iI_QLc)

## 🚀 Overview
Daystar Daycare is a full-stack administrative management system designed to help daycare centers manage their daily operations efficiently. Built with **Express.js** and **Node.js** on the backend, **Pug** for the frontend templating engine, and **MongoDB** as the database, this system simplifies tasks such as child enrollment, attendance tracking, and staff management. Additionally, it includes **basic authentication** for **admins and baby sitters** and a **doll store** feature.

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Frontend:** Pug (Template Engine), Bootstrap
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** Passport.js (for user authentication - Admins & Baby Sitters)
- **Templating Engine:** Pug
- **CSS Framework:** Bootstrap

## 🎯 Features
- 📌 **Child Enrollment & Records Management**
- 📌 **Attendance Tracking**
- 📌 **Staff Management System (Admins & Baby Sitters)**
- 📌 **Secure Authentication & Role-Based Access**
- 📌 **Doll Store for Daycare Supplies**
- 📌 **Billing & Payment Tracking (Upcoming)**
- 📌 **Admin Dashboard for Insights & Reports**

## 📂 Project Structure
```
📦 daystar-daycare
├── 📁 public               # Static assets (CSS, JS, images)
├── 📁 views                # Pug template files
├── 📁 routes               # Express routes
│   ├── 📄 index.js         # Home and general routes
│   ├── 📄 auth.js          # Authentication routes
│   ├── 📄 admin.js         # Admin dashboard routes
│   ├── 📄 store.js         # Doll store routes
├── 📁 models               # Mongoose models
│   ├── 📄 Child.js         # Child schema
│   ├── 📄 Staff.js         # Staff schema
│   ├── 📄 Attendance.js    # Attendance schema
│   ├── 📄 Product.js       # Doll store schema
├── 📁 config               # Configuration files
│   ├── 📄 database.js      # MongoDB connection
│   ├── 📄 passport.js      # Authentication setup
├── 📁 controllers          # Business logic
│   ├── 📄 adminController.js  # Admin-related logic
│   ├── 📄 authController.js   # Authentication logic
│   ├── 📄 childController.js  # Child-related logic
│   ├── 📄 storeController.js  # Doll store logic
├── 📄 .env                 # Environment variables
├── 📄 server.js            # Main server entry file
├── 📄 package.json         # Dependencies & scripts
└── 📄 README.md            # Project documentation
```

## 🔧 Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/inegohe/Day-star.git
   cd Day-star
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   SESSION_SECRET=your_secret_key
   PORT=3000
   ```

4. **Run the development server:**
   ```sh
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment
To deploy the app:
- Use **Heroku, Render, or DigitalOcean** for the backend.
- Set up **MongoDB Atlas** for a cloud-based database.

## 📸 Screenshots
| Dashboard | Enrollment Page | Attendance Tracking | Doll Store |
|-----------|---------------|---------------------|------------|
| ![Dashboard](https://private-user-images.githubusercontent.com/161653709/421239031-bc047642-dacc-4a45-a360-74a18d5c5e94.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE2NzgxMzIsIm5iZiI6MTc0MTY3NzgzMiwicGF0aCI6Ii8xNjE2NTM3MDkvNDIxMjM5MDMxLWJjMDQ3NjQyLWRhY2MtNGE0NS1hMzYwLTc0YTE4ZDVjNWU5NC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxMVQwNzIzNTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04Y2VmMTA0ZmFlOTdlNWQzN2Q1ZGZhNWI4MGNkZjNmYTllZGZiNGNlMWQwMDBjYzA1NTNkZWViMTc5OGQ4ZDM5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.LjTN2qiVRxP0JIXidlzswYSCDQqjxFhrlhwcfzj8jXg) | ![Enrollment](https://private-user-images.githubusercontent.com/161653709/421239028-1dd4e287-37cd-4398-b807-4b73f0a57177.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE2NzgxMzIsIm5iZiI6MTc0MTY3NzgzMiwicGF0aCI6Ii8xNjE2NTM3MDkvNDIxMjM5MDI4LTFkZDRlMjg3LTM3Y2QtNDM5OC1iODA3LTRiNzNmMGE1NzE3Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxMVQwNzIzNTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03NDk2ODc2ZDMzMThlZDExYmE3YTc1MTQ4NjNjYmQ1NzI5Njg0NWZlYThjZTY5Y2U2OTI4YWRhMjc5ZWFmMTEwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.KH0rqzf7hPWFoTl84s_DflIo_6EUeCJRtueX8otOL0A) | ![Attendance](https://private-user-images.githubusercontent.com/161653709/421239030-e2221eda-4462-428b-b075-34d2adbf2dba.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE2NzgxMzIsIm5iZiI6MTc0MTY3NzgzMiwicGF0aCI6Ii8xNjE2NTM3MDkvNDIxMjM5MDMwLWUyMjIxZWRhLTQ0NjItNDI4Yi1iMDc1LTM0ZDJhZGJmMmRiYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxMVQwNzIzNTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zZDc4ZjI2ZTAxM2IyOTcyZTY0YWNjOTUzMDliYmExY2I3MzM5ZGY2ODI4MDE4Yjg0MGU0MTc0M2ZhZjc1MjBmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.gY0AHP07i7LL2MU5cl3WlELOwgqaQf1u8KxP7u9vTP8) | ![Store](https://private-user-images.githubusercontent.com/161653709/421239033-7378272f-0190-4ad7-8114-7b68e98652e4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE2NzgxMzIsIm5iZiI6MTc0MTY3NzgzMiwicGF0aCI6Ii8xNjE2NTM3MDkvNDIxMjM5MDMzLTczNzgyNzJmLTAxOTAtNGFkNy04MTE0LTdiNjhlOTg2NTJlNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxMVQwNzIzNTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hNjA4MDliMjBlZjBjOTAyNzhhMWUyMjM4ZDk4M2NhYzU1YjFhZTNhZTQ0NDUzOWFlMGYwNDk2OWY3ZGJhN2UzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.y3K33EBzUUP98slwpTdbLULw_1zBPdRQBVWHgOxinHY) |

## 💡 Future Improvements
- 🔹 Payment tracking for enrolled children
- 🔹 Notifications & messaging for parents
- 🔹 Report generation for child progress & finances
- 🔹 Multi-user role-based access system
- 🔹 Advanced filtering & search in the doll store

## 🤝 Contributing
Feel free to fork this repository, submit issues, or create pull requests to enhance the project.

## 📜 License
This project is licensed under the **MIT License**.

---
⭐ If you like this project, give it a **star** on GitHub!

