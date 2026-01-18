# ⌨️ TypeCraft

<p align="center">
  <img src="/public/logo-svg.svg" alt="TypeCraft Logo" width="120" />
</p>

<p align="center">
  <strong>A minimal, distraction-free typing speed test tool built for focus and practice.</strong>
</p>

<p align="center">
  🌐 Live Demo:
  <a href="https://typecraft-typing-speed-test.netlify.app/" target="_blank">
    TypeCraft
  </a>
</p>

---

## 📌 About the Project

**TypeCraft** is a clean and focused typing speed test web application designed to help users measure and improve their typing skills without distractions.

Inspired by modern developer tools and minimal UX principles, TypeCraft prioritizes:

- clarity over clutter  
- accuracy over gimmicks  
- focus over features  

This project was built as a **learning-first project**, with strong emphasis on frontend fundamentals, correct typing-test logic, and clean UI architecture.

---

## ✨ Features

- ⏱️ **Custom Test Duration**  
  Choose how long you want to practice.

- 🎯 **Difficulty Levels**  
  - Easy  
  - Medium  
  - Hard  

- ⌨️ **Real-time Typing Feedback**  
  - Correct characters highlighted  
  - Incorrect characters clearly indicated  
  - Extra and missed characters handled accurately  

- 📊 **Detailed Results**
  - Net WPM (accuracy-adjusted speed)
  - Raw WPM
  - Accuracy percentage
  - Character-level statistics

- 🌙 **Minimal Dark UI**
  - Eye-friendly color palette  
  - Inspired by modern typing tools  
  - Designed for long, focused practice sessions  

---

## 🧠 How It Works

1. Select your preferred test settings (duration & difficulty)
2. Click **Start Test**
3. The timer begins on your **first keypress**
4. Type the displayed words as accurately and quickly as possible
5. View detailed results at the end of the test

The typing engine uses **character-level comparison**, ensuring realistic accuracy and speed calculations instead of word-only validation.

---

## 📈 WPM & Accuracy Calculation

- **Raw WPM**  
  `(Total typed characters ÷ 5) ÷ time`

- **Accuracy**  
  `(Correct characters ÷ total typed characters) × 100`

- **Net WPM**  
  `Raw WPM adjusted using accuracy`

This mirrors how real-world typing tests calculate speed and correctness.

---

## 🎯 Why TypeCraft?

TypeCraft was built to deeply understand how real typing tests work —  
from keyboard event handling to viewport-based word rendering —  
without relying on external typing libraries.

The goal was not just to build a typing test,  
but to build it **correctly**, from first principles.

---

## 🎨 Design Philosophy

- Monospace typography for typing content
- Minimal color palette with subtle feedback
- No unnecessary animations or distractions
- UI reacts to state — not manual DOM manipulation

Typing should feel **natural, focused, and intentional**.

---

## 🛠️ Tech Stack

- **React** (Functional Components & Hooks)
- **Vite**
- **CSS** (Custom styling, no UI frameworks)
- **JavaScript (ES6+)**

All typing logic is implemented from scratch for learning and correctness.

---

## 📁 Project Structure (Simplified)

src/
|--- components/ #UI Components
|--- data / categorised word lists 
|--- functions / JS functions for logical implementation
|--- App.csss / Complete Styling of the website 
|--- App.jsx / 


---

---

## 🚧 Project Status

🟢 **Stable — v1.0.0**

Planned future improvements (optional):
- Enhanced mobile responsiveness
- Optional punctuation & numbers mode
- More test customization
- Improved results visualization
- Accessibility improvements

---

## 📚 What I Learned

- Translating Figma designs into real CSS
- Handling keyboard events correctly in React
- Managing complex UI state cleanly
- Writing logic-first UI instead of DOM-driven code
- Understanding why design ≠ implementation 1:1

---

## 🙌 Acknowledgements

- UI/UX inspiration from modern typing tools
- Fonts used:
  - Fira Code (typing content)
  - Fira Sans (UI)
  - Tourney (logo)
- Built with a strong focus on learning and craftsmanship

---

## 📬 Feedback & Contact

Feedback, suggestions, and ideas are always welcome.

<p align="center">
  📬 <strong>Contact me:</strong><br/>
  Email:
  <a href="mailto:06v.parnil@gmail.com">06v.parnil@gmail.com</a> •
  LinkedIn:
  <a href="https://www.linkedin.com/in/parnil-vyawahare-70a1b0287/" target="_blank">
    Parnil Vyawahare
  </a> •
  Portfolio:
  <a href="https://portfolio-parnil-vyawahare.netlify.app/" target="_blank">
    Website
  </a>
</p>

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

<p align="center">
  Built with focus, curiosity, and a lot of keystrokes.
</p>

<p align="center">
  <strong>Made by: Parnil Vyawahare</strong>
</p>
