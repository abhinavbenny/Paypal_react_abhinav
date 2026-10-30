# PayPal Homepage Clone (React)

A beginner React project that recreates the top of the PayPal website: the navigation bar and the "PayPal Open" hero section. I built it to practise React components, state and CSS layout.

> **Disclaimer:** This is a student learning project. It is not affiliated with, endorsed by, or connected to PayPal. PayPal's name and logo belong to PayPal, Inc. The site has no real payment or login features.

## Features

- Navigation bar with logo, four dropdown menus (Personal, Business, Partners, Useful Info), and Log In / Sign Up buttons
- Hamburger menu on small screens
- Hero section with a Personal / Business toggle that changes the heading and text
- Large heading, subtitle, short description and two call-to-action buttons
- Responsive layout built with plain CSS (Flexbox and media queries)

## Built with

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- CSS

## Getting started

You need [Node.js](https://nodejs.org/) (LTS version) installed.

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/<your-repo-name>.git

# 2. Go into the project folder
cd <your-repo-name>

# 3. Install the packages
npm install

# 4. Start the development server
npm run dev
```

Open the address shown in the terminal, usually http://localhost:5173.

To make a production build:

```bash
npm run build
```

## Project structure

```
src/
├── main.jsx               # Starts React
├── App.jsx                # Navbar component and the main App
├── App.css                # Styles for the navbar and page
└── components/
    ├── Hero.jsx           # Hero section with the Personal / Business toggle
    └── Hero.css           # Styles for the hero section
```

## What I learned

- Splitting a page into components
- Using `useState` to open menus and switch tabs
- Rendering lists with `.map()`
- Using `import` and `export` to share components
- Building a layout with Flexbox and making it work on phones

## Ideas for next steps

- Add more sections below the hero
- Use React Router so the menu links open real pages
- Close the dropdowns when clicking outside them
- Add a footer

## License

This project is for learning only. Add a license of your choice (for example MIT) if you want others to reuse your code.
