# RFB – Royal Finance Bank

**Banking with Trust. Growing with You.**

RFB (Royal Finance Bank) is a web-based **Bank Management System (BMS)** developed as a university Software Engineering project. The system is designed to simulate basic banking operations through a modern, user-friendly, and professional interface.

It provides a customer portal where users can access their banking information and perform common banking activities. It also includes an administrative module for managing customer records and monitoring banking activities.

> **Note:** This project is an educational banking simulation. It is not connected to any real bank, financial institution, or payment service. No real money is transferred.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Objectives](#objectives)
- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Current Development Status](#current-development-status)
- [Future Improvements](#future-improvements)
- [Disclaimer](#disclaimer)

---

## Project Overview

The purpose of RFB is to demonstrate how a basic banking system can be designed and developed using Software Engineering principles.

The system is divided into two main modules:

### 1. Customer Portal

The Customer Portal allows customers to:

- Register and log in to their accounts.
- View their account balance.
- Deposit money.
- Withdraw money.
- Transfer funds to another account.
- View their transaction history.
- View and update their personal profile.

### 2. Bank Administration Module

The Bank Administration Module is intended to allow administrators to:

- Log in to the administration portal.
- Manage customer records.
- View customer account information.
- Monitor banking transactions.
- Manage basic banking activities.

---

## Objectives

The main objectives of this project are:

- To develop a user-friendly Bank Management System.
- To simulate basic banking operations.
- To provide separate interfaces for customers and administrators.
- To organize customer, account, and transaction information.
- To apply Software Engineering concepts in a practical project.
- To develop a complete web application with frontend, backend, and database components.

---

## Features

### Customer Features

| Feature | Description |
|---|---|
| User Registration | Allows new customers to create an account. |
| User Login | Provides access to the customer portal. |
| Dashboard | Displays account overview and banking information. |
| Check Balance | Allows customers to view their available balance. |
| Deposit Money | Simulates depositing money into an account. |
| Withdraw Money | Simulates withdrawing money from an account. |
| Transfer Funds | Simulates transferring funds to another account. |
| Transaction History | Displays previous banking transactions. |
| My Profile | Allows customers to view and update personal information. |
| Logout | Allows customers to securely leave the portal. |

### Administrator Features

| Feature | Description |
|---|---|
| Admin Login | Provides access to the administration portal. |
| Customer Management | Allows administrators to manage customer records. |
| Account Information | Allows administrators to view customer account details. |
| Transaction Monitoring | Allows administrators to monitor banking transactions. |

---

## Technologies

The project is planned to use the following technologies:

| Technology | Purpose |
|---|---|
| HTML5 | Creating the structure of web pages. |
| CSS3 | Designing and styling the user interface. |
| JavaScript | Handling frontend interactions and form validation. |
| Python | Developing backend functionality. |
| Flask | Building the backend web application. |
| SQLite | Storing customer, account, and transaction data. |

---

## Project Structure

The project is organized into separate frontend and backend folders to keep the code manageable and organized.

```text
RFB-Royal-Finance-Bank/
│
├── frontend/
│   │
│   ├── index.html
│   │
│   ├── pages/
│   │   ├── login.html
│   │   ├── register.html
│   │   ├── dashboard.html
│   │   ├── deposit.html
│   │   ├── withdraw.html
│   │   ├── transfer.html
│   │   ├── transactions.html
│   │   ├── profile.html
│   │   ├── admin-login.html
│   │   └── admin-dashboard.html
│   │
│   ├── css/
│   │   ├── style.css
│   │   ├── auth.css
│   │   ├── dashboard.css
│   │   └── banking.css
│   │
│   ├── js/
│   │   ├── main.js
│   │   ├── auth.js
│   │   ├── dashboard.js
│   │   ├── deposit.js
│   │   ├── withdraw.js
│   │   ├── transfer.js
│   │   ├── transactions.js
│   │   └── profile.js
│   │
│   └── assets/
│       ├── images/
│       └── icons/
│
└── backend/
    ├── app.py
    ├── database.py
    └── requirements.txt
```

*Note: The structure includes files planned for later development. Some files and backend components may not be implemented yet.*

---

## Getting Started

Follow these steps to run the current frontend version on your computer.

### Requirements

- A computer with Windows, Linux, or macOS.
- Visual Studio Code or another code editor.
- A modern web browser.
- Live Server extension in Visual Studio Code (recommended).

### Installation

**1. Clone the repository**

```bash
git clone YOUR_REPOSITORY_URL
```

**2. Open the project folder**

Open the `RFB-Royal-Finance-Bank` folder in Visual Studio Code.

**3. Run the frontend**

Open `frontend/index.html` and launch it using the Live Server extension.

**4. Explore the application**

Use the website navigation to explore the available customer pages.

> The current frontend is a demonstration version. Backend and database integration are planned for later development.

---

## Current Development Status

The project is being developed in stages.

### Frontend Development

- [x] Homepage
- [x] Customer Login Page
- [x] Customer Registration Page
- [x] Customer Dashboard
- [x] Deposit Money Page
- [x] Withdraw Money Page
- [x] Transfer Funds Page
- [x] Transaction History Page
- [x] Customer Profile Page
- [ ] Admin Login Page
- [ ] Admin Dashboard

### Backend Development

- [ ] Flask Backend
- [ ] Database Configuration
- [ ] Customer Registration and Authentication
- [ ] Account Management
- [ ] Deposit and Withdrawal Operations
- [ ] Fund Transfer Functionality
- [ ] Transaction Management
- [ ] Admin Functionality

### Database Development

- [ ] Customer Table
- [ ] Account Table
- [ ] Transaction Table
- [ ] Admin Table

---

## Future Improvements

The following improvements are planned for future versions:

- Integration of the frontend with the Flask backend.
- Implementation of a database using SQLite.
- Secure customer and administrator authentication.
- Persistent storage of customer and account information.
- Real-time balance updates within the application.
- Proper transaction processing and validation.
- Improved security and error handling.
- Completion of the administration module.

---

## Disclaimer

RFB – Royal Finance Bank is developed strictly for educational purposes as a university Software Engineering project. It is a simulated banking application and does not provide real banking services, process actual payments, or connect to real financial accounts.

---

**Project:** RFB – Royal Finance Bank  
**Project Type:** Software Engineering University Project  
**Application Type:** Web-Based Bank Management System  
