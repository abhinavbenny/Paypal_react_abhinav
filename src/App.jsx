import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero.jsx";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Personal",
      links: ["Send payments", "Online shopping", "Personal account"],
    },
    {
      name: "Business",
      links: ["Business account", "Accept payments", "Business solutions"],
    },
    {
      name: "Partners",
      links: ["Partner programs", "Developer partners"],
    },
    {
      name: "Useful Info",
      links: ["Help center", "Security", "Contact us"],
    },
  ];

  return (
    <header className="navbar">
      <div className="nav-left">
        <a href="#" className="paypal-logo" aria-label="Home">
          <svg viewBox="0 0 60 75" aria-hidden="true">
            <path
              d="M18 7H39C51 7 57 14 54 25C52 36 44 42 32 42H24L19 65H6Z"
              fill="#009cde"
              transform="translate(3 3)"
            />
            <path
              d="M13 4H35C47 4 53 11 50 22C47 34 39 40 27 40H21L16 62H3Z"
              fill="#003087"
            />
            <path
              d="M21 18H35C41 18 45 21 45 26C42 33 36 37 27 37H23Z"
              fill="#0070e0"
            />
          </svg>
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <div className="nav-item" key={item.name}>
              <a
                href="#"
                className="nav-link"
                onClick={(event) => {
                  event.preventDefault();
                  if (window.innerWidth <= 850) {
                    setMenuOpen(true);
                    event.currentTarget.nextElementSibling.classList.toggle(
                      "show"
                    );
                  }
                }}
              >
                {item.name}
                <span className="arrow"></span>
              </a>

              <div className="dropdown">
                {item.links.map((link) => (
                  <a href="#" key={link}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      <div className="nav-actions">
        <a href="#" className="btn btn-login">
          Log In
        </a>
        <a href="#" className="btn btn-signup">
          Sign Up
        </a>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </header>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}