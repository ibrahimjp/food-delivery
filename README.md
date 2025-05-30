<div align="center">

# 🍽️ FOOD-DELIVERY  
**Delivering Deliciousness, One Click Away**

[![Last Commit](https://img.shields.io/github/last-commit/ibrahimjp/food-delivery?style=flat&logo=git&logoColor=white&color=0080ff)](https://github.com/ibrahimjp/food-delivery)
[![Top Language](https://img.shields.io/github/languages/top/ibrahimjp/food-delivery?style=flat&color=0080ff)](https://github.com/ibrahimjp/food-delivery)
[![Languages Count](https://img.shields.io/github/languages/count/ibrahimjp/food-delivery?style=flat&color=0080ff)](https://github.com/ibrahimjp/food-delivery)

### 🛠️ Built With:
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black)
![Express](https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-F04D35.svg?style=flat&logo=Mongoose&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248.svg?style=flat&logo=MongoDB&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF.svg?style=flat&logo=Stripe&logoColor=white)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B.svg?style=flat&logo=Nodemon&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white)
![dotenv](https://img.shields.io/badge/.ENV-ECD53F.svg?style=flat&logo=dotenv&logoColor=black)
![npm](https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white)

</div>

---

## 📚 Table of Contents

- [📌 Overview](#-overview)
- [🚀 Features](#-features)
- [🖼️ Screenshots](#-screenshots)
- [🏗️ Architecture](#-architecture)
- [⚙️ Getting Started](#-getting-started)
  - [📦 Prerequisites](#-prerequisites)
  - [🔧 Installation](#-installation)
  - [🔐 Environment Variables](#-environment-variables)
  - [▶️ Usage](#-usage)
- [📁 Project Structure](#-project-structure)
- [📡 API Overview](#-api-overview)
- [🧪 Testing](#-testing)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 📌 Overview

**Food-Delivery** is a full-stack MERN application built to simulate a real-world online food ordering experience. It allows customers to browse menus, place orders, and pay online — while admins can manage food items, users, and orders through a secure dashboard.

Perfect for learning full-stack development or bootstrapping a food business MVP!

---

## 🚀 Features

- 🍔 **Robust Backend Architecture** using Express & MongoDB  
- 🔐 **JWT Authentication & Role-Based Access**  
- 🛒 **Real-Time Cart & Order Management**  
- 👨‍🍳 **Admin Dashboard** for full CRUD control  
- 💳 **Stripe Integration** for secure payments  
- 🌐 **Blazing Fast Frontend** with Vite + React  
- 📱 **Mobile Responsive** and PWA-ready  
- 📦 **REST API-first Design**

### User Features
- User authentication (signup/login)
- Browse restaurants and menus
- Place food orders
- Real-time order tracking
- Order history
- User profile management
- Responsive design for all devices

### Restaurant Features
- Restaurant profile management
- Menu management
- Order management
- Real-time order notifications
- Sales analytics

### Mobile Experience
- Smooth scroll-based navigation
  - Header hides on scroll down
  - Header appears on scroll up
  - Smooth transition animations
- Modern mobile layout
  - Hamburger menu on the left
  - Centered brand name
  - Cart and user icons on the right
- Full-screen mobile menu
  - Slide-in animation
  - Large, easy-to-tap menu items
  - Clean, modern styling

---

## 🖼️ Screenshots

![Home Page](./frontend/public/images/websiteImage.png)

🔗 **Live Demo:** [Jamila Food](https://jamilafood.vercel.app/)

---

## 🏗️ Architecture

The project follows a modern MERN stack structure with separation of concerns:

- **Backend**: Express.js server with RESTful API, MongoDB with Mongoose ODM, JWT-based authentication, Stripe payment integration.
- **Frontend**: React app bootstrapped with Vite, Axios for API calls, responsive UI components.
- **State Management**: React Context API or Redux (if implemented).
- **Deployment**: Frontend deployed on Vercel, backend can be deployed on any Node.js supporting environment.

---

## ⚙️ Getting Started

### 📦 Prerequisites

Make sure you have the following installed:

- Node.js ≥ 18.x  
- npm ≥ 9.x  
- MongoDB running locally or use a hosted Atlas cluster  
- Stripe Developer Account (for testing payments)  

---

### 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/ibrahimjp/food-delivery
cd food-delivery

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
