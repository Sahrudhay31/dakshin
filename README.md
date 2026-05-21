# ✨ Dakshin - South India Tourism Website

[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-blue)](https://your-username.github.io/dakshin-tourism)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple)](https://getbootstrap.com)
[![EmailJS](https://img.shields.io/badge/EmailJS-OTP%20Verification-orange)](https://www.emailjs.com)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

> **Discover the Soul of South India** - A complete tourism platform featuring 30+ destinations, interactive maps, tour packages, and  trip planning.

---

## 🌟 Live Demo

🔗 **Live Website:** [https://your-username.github.io/dakshin-tourism](https://your-username.github.io/dakshin-tourism)

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Technologies Used](#-technologies-used)
- [Installation & Setup](#-installation--setup)
- [Deployment](#-deployment)
- [Email OTP Setup](#-email-otp-setup)
- [Screenshots](#-screenshots)
- [File Descriptions](#-file-descriptions)
- [Customization](#-customization)
- [Troubleshooting](#-troubleshooting)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 Overview

**Dakshin** is a comprehensive travel guide and booking platform for South India, covering 5 states with 6 unique destinations each (30+ total). The website features an interactive map, detailed destination information, tour packages, user authentication with email OTP, secure payment portal, and an AI-powered trip planner.

### 🌍 States Covered

| State | Capital | Best Time | Famous For | Destinations |
|-------|---------|-----------|------------|--------------|
| **Kerala** | Thiruvananthapuram | Oct-Mar | Backwaters, Ayurveda | 6 |
| **Tamil Nadu** | Chennai | Nov-Feb | Temples, Hill Stations | 6 |
| **Karnataka** | Bengaluru | Sep-Mar | Heritage, Coffee | 6 |
| **Telangana** | Hyderabad | Oct-Mar | Biryani, History | 6 |
| **Andhra Pradesh** | Amaravati | Oct-Mar | Beaches, Spirituality | 6 |

---

## ✨ Features

### 🏠 Home Page
-  Full-screen video background (South India visuals)
-  Interactive SimpleMaps integration
-  5 state cards with 6 destinations each
-  Featured destinations section
-  Responsive design for all devices

###  Destinations Page
- ✅ 30+ destinations with detailed info
- ✅ Image carousel for each destination
- ✅ 5+ nearby places with distance & time
- ✅ Google Maps integration
- ✅ Search and filter by category (beach, hill, temple, wildlife)
- ✅ Complete travel info: airport, railway, bus, hotels

### 📦 Tour Packages
- ✅ 5 curated packages (one per state)
- ✅ Day-by-day detailed itineraries
- ✅ Hotel recommendations by budget
- ✅ Local food recommendations
- ✅ Transport details & how to reach
- ✅ Package inclusions & exclusions
- ✅ Direct booking to payment

### 🔐 Authentication System
- ✅ **Email OTP Login** (secure 6-digit OTP)
- ✅ **Email OTP Signup** (email verification required)
- ✅ Password strength checker
- ✅ Username & email validation
- ✅ Session management with localStorage
- ✅ User profile & booking history

### 💳 Payment Portal
- ✅ Secure payment form
- ✅ Multiple payment methods (Card, UPI, Net Banking)
- ✅ Booking summary with dynamic pricing
- ✅ SSL secure badge
- ✅ Booking history saved to user account

### 🤖 Smart Trip Planner
- ✅ AI-powered itinerary generator
- ✅ Select state, duration, budget, travel style
- ✅ Real-time cost calculation
- ✅ Day-by-day personalized itinerary
- ✅ Hotel & food recommendations
- ✅ Save itinerary as text file

### ❓ FAQ Section
- ✅ Accordion-style expandable FAQs
- ✅ Common travel questions answered
- ✅ Responsive design

---

## 📁 Project Structure
dakshin-tourism/
│
├── index.html # Homepage with video background & map
├── destinations.html # 30+ destinations with filter
├── tourpackages.html # 5 tour packages with details
├── login.html # Email OTP login page
├── signup.html # Email OTP registration
├── payment.html # Secure payment portal
├── faqs.html # Frequently asked questions
├── mapdata.js # SimpleMaps configuration (states data)
├── countrymap.js # SimpleMaps library (DO NOT EDIT)
├── .gitignore # Git ignore file
├── README.md # This file
│
├── assets/
│ ├── css/
│ │ └── style.css # Custom styles (Bootstrap overrides)
│ │
│ ├── js/
│ │ ├── main.js # 30+ destinations data & card rendering
│ │ ├── auth.js # Authentication logic (login/signup)
│ │ ├── trip-planner.js # AI itinerary generator
│ │ ├── tourpackages.js # Package data & booking
│ │ └── config.js # EmailJS API keys (ADD YOUR KEYS)
│ │
│ ├── images/
│ │ ├── kerala-backwaters.jpg
│ │ ├── munnar.jpg
│ │ ├── kovalam.jpg
│ │ ├── varkala.jpg
│ │ ├── thekkady.jpg
│ │ ├── wayanad.jpg
│ │ ├── meenakshi.jpg
│ │ ├── ooty.jpg
│ │ ├── marina.jpg
│ │ ├── kodaikanal.jpg
│ │ ├── rameshwaram.jpg
│ │ ├── mahabalipuram.jpg
│ │ ├── hampi.jpg
│ │ ├── coorg.jpg
│ │ ├── mysore.jpg
│ │ ├── bandipur.jpg
│ │ ├── badami.jpg
│ │ ├── gokarna.jpg
│ │ ├── charminar.jpg
│ │ ├── ramappa.jpg
│ │ ├── ramoji.jpg
│ │ ├── birla-mandir.jpg
│ │ ├── golconda.jpg
│ │ ├── hussain.jpg
│ │ ├── tirupati.jpg
│ │ ├── vizag.jpg
│ │ ├── araku.jpg
│ │ ├── srisailam.jpg
│ │ ├── lepakshi.jpg
│ │ ├── gandikota.jpg
│ │ ├── poster.jpg # Video poster/fallback
│ │ └── hero-bg.jpg # Hero background fallback
│ │
│ └── videos/
│ └── south-india.mp4 # Your hero background video
│
└── EmailJS Templates/ # (Documentation only)
├── login-template.html
└── signup-template.html



---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Structure & content |
| **CSS3** | Styling & animations |
| **Bootstrap 5** | Responsive design & components |
| **JavaScript (ES6)** | Interactivity & data handling |
| **SimpleMaps** | Interactive India map |
| **EmailJS** | Email OTP verification |
| **Google Maps API** | Location embedding |
| **Font Awesome 6** | Icons & UI elements |
| **LocalStorage** | User session & data persistence |

---

## 🚀 Installation & Setup

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari)
- Code editor (VS Code recommended)
- Git (for version control)
- EmailJS account (free tier)

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/dakshin-tourism.git
cd dakshin-tourism

# 2. Open in VS Code
code .

# 3. Start local server (Python)
python3 -m http.server 8000
# OR
npx serve .

# 4. Open browser
http://localhost:8000

# 1. Create GitHub repository
# 2. Push your code
git init
git add .
git commit -m "Initial commit: Dakshin Tourism Website"
git branch -M main
git remote add origin https://github.com/yourusername/dakshin-tourism.git
git push -u origin main

# 3. Enable GitHub Pages
# Settings → Pages → Branch: main → / (root) → Save

# 4. Your site is live at:
# https://yourusername.github.io/dakshin-tourism/

#📸 Screenshots
Homepage with Video Background


Destinations Page

Destination Detail Modal


Tour Package Detail

Login 

Payment Portal
