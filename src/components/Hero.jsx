import { useState } from "react";
import "./Hero.css";

// The text for each tab is stored in an object, so the page can switch between them.
const content = {
  Personal: {
    title: "PayPal Personal",
    subtitle: "Money made simple for everyone",
    text: "Send money to friends, pay at shops and split bills, all from one account.",
    primaryButton: "Sign Up",
    secondaryButton: "Learn More",
  },
  Business: {
    title: "PayPal Open",
    subtitle: "One platform for your business needs",
    text: "PayPal Open brings your business tools together to help you get paid, get growing, and get ahead.",
    primaryButton: "Sign Up",
    secondaryButton: "Contact Sales",
  },
};

function Hero() {
  // activeTab remembers which tab is selected. We start on "Business".
  const [activeTab, setActiveTab] = useState("Business");

  // Pick the text that matches the selected tab
  const current = content[activeTab];

  return (
    <section className="hero">
      {/* Personal / Business switch */}
      <div className="tabs">
        <button
          className={activeTab === "Personal" ? "tab active" : "tab"}
          onClick={() => setActiveTab("Personal")}
        >
          Personal
        </button>
        <button
          className={activeTab === "Business" ? "tab active" : "tab"}
          onClick={() => setActiveTab("Business")}
        >
          Business
        </button>
      </div>

      <h1 className="hero-title">{current.title}</h1>
      <h2 className="hero-subtitle">{current.subtitle}</h2>
      <p className="hero-text">{current.text}</p>

      <div className="hero-buttons">
        <a href="#" className="hero-btn hero-btn-dark">{current.primaryButton}</a>
        <a href="#" className="hero-btn hero-btn-light">{current.secondaryButton}</a>
      </div>
    </section>
  );
}

export default Hero;