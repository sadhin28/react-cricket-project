# 🏏 BPL-DREAM 11

## 📋 Project Description

BPL-DREAM 11 allows users to choose cricket players within a coin-based budget. The application mimics a fantasy league system, enabling the selection of players, toggling views between available and selected lists, and ensuring logical constraints such as no duplicates and team size limits. The interface is designed to match the provided Figma UI and ensures a seamless user experience.

---

## 🧑‍💻 Technologies Used

- **React.js** – Front-end library for building UI
- **Tailwind CSS** – Utility-first CSS framework for design
- **React-Toastify** – For elegant toast notifications
- **JavaScript (ES6+)** – Logic and interactivity
- **Figma** – For design inspiration

---

## 🌟 Key Features

### 1. **Dynamic Player Selection with Coin Management**
- Users start with zero coins and can earn coins using the **Free Claim Coin button**.
- Players have bidding prices, and can only be selected if enough coins are available.
- Duplicate selections and max team size (6 players) are strictly validated.

### 2. **Toggle Between Available & Selected Players**
- Clean UI buttons let users switch between available and selected players.
- Selected section dynamically displays how many players are chosen.

### 3. **Interactive Notifications and Persistent Newsletter**
- All alerts replaced with **React-Toastify** for better UX.
- 
---

## 🖼️ UI Breakdown

### 🔝 Navbar
- Follows Figma layout
- Displays total user coins dynamically

### 🎯 Banner
- Includes button to increase coins

### 📌 Player Cards
- Show player name, image,About
- "Choose Player" adds them to selection (with validation)

### ✅ Selected Players Section
- One-column cards with player details and remove functionality

### 💌 Newsletter
- Styled form with LocalStorage-based subscription

### 🦶 Footer
- Fully Figma-inspired footer layout

---

## ✅ Validations

- ❗ Prevent duplicate selections
- ⚠️ Max 6-player team rule enforced
- 🚫 Selection disabled if coins are insufficient
- 🔁 Toggle between available and selected players
- 🧹 Remove player from team easily
- 🔔 All alerts use `react-toastify`

---

## 🛠 Getting Started

### Clone and Run

```bash
git clone https://github.com/your-username/bpl-dream11.git
cd bpl-dream11
npm install
npm run dev
