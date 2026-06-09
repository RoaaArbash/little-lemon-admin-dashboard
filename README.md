# 🥗 Gourmet Dietary Dashboard

A premium, highly optimized React web application designed for managing, filtering, and sorting a dynamic healthy food menu in real-time. This project was built to master the core computational concepts of **React Module 1** (Meta Front-End Developer Certification).

---

## ✨ Features & Core Concepts Applied

This dashboard isn't just about a beautiful UI; it implements critical React architectural principles:

* **⚡ Dynamic State Management (`useState`):** Efficiently triggers re-renders whenever the user filters or sorts the menu items, ensuring the DOM stays perfectly synchronized with the data.
* **🎯 Advanced Data Transformation (`filter` & `sort`):**
    * **Diet Mode:** Instantly isolates and filters meals containing less than 400 calories using pure JavaScript logic.
    * **Smart Sorting:** Organizes the menu from the cheapest to the most expensive dishes using safe array cloning (`[...meals]`) to prevent state mutation.
* **🔒 Component Componentization & Props:** Decentralized architecture where the main `App.jsx` handles state calculations and safely dispatches structured payloads to independent `<MealCard />` children components.
* **🛡️ React Reconciliation Optimization (`keys`):** Implements unique, invariant keys (`key={meal.id}`) rather than array indexes. 
    > **Why this matters:** Try typing a specific note (e.g., *"No onions"*) into the card's input field and clicking **Sort by Price**. Thanks to proper key utilization, the input state travels seamlessly with its respective component without causing visual glitches or data mixing.

---

## 🎨 Premium User Experience (UX)

* **Responsive Grid:** Fully adaptable layout using modern CSS Grid that scales beautifully across mobile, tablet, and desktop screens.
* **Micro-interactions:** Smooth animations (`cubic-bezier` transitions) and elevate hover effects on cards and buttons for a high-end application feel.
* **Glassmorphism Accents:** Subtle background gradients and translucent surfaces matching top-tier tech product interfaces.

---

## 🛠️ Tech Stack & Implementation

* **Library:** React.js (Functional Components + Hooks)
* **Styling:** Embedded Encapsulated CSS
* **Language:** JavaScript (ES6+)
* **Version Control:** Git & GitHub

---

## 🚀 How to Run Locally

1. Clone the repository:
   ```bash
   git clone [https://github.com/RoaaArbash/react-gourmet-dashboard.git](https://github.com/RoaaArbash/react-gourmet-dashboard.git)