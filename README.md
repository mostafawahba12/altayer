# Al Tayer Events - Multi-Page Web Platform

A premium, high-fidelity, and pixel-perfect multi-page website built directly from your Figma design for **Al Tayer Events**.

This project features a clean, responsive layout, smooth animations, and high-performance interactive details, organized in a simplified and flat structure.

---

## 📂 Project Structure

```
altayer/
├── index.html                  # Overview & Interactive Scope Sections (Home Page)
├── blinks.html                 # Blog & Case Studies Page ("Our Blings")
├── vision-flow.html            # Event Planning Journey Timeline ("Vision Flow")
├── contact.html                # Contact Page & Real-Time Booking Form
├── css/
│   ├── style.css               # Main Theme, Color variables, Star animations, & Custom Dotted Typography
│   └── responsive.css          # Mobile-First Media Queries & Collapsed layout states
├── js/
│   └── main.js                 # Global Interactivity (Sticky navbar, observers, toggles)
└── README.md                   # Setup Guide & Documentation
```

---

## 🗺️ Page Mapping & Key Features

### 1. `index.html` (Overview)
- **Sticky Glassmorphic Navbar:** Standard blur filter overlay that increases background density and drops a shadow upon scrolling down. Links automatically highlight their active status based on the current page path.
- **Hero Title & Star Accents:** Employs pixel-perfect dotted background clipping for the `40+ YEARS` text combined with an animated twinkling star (`✦`).
- **Orange Swoosh Graphic:** Inline SVG representing the iconic curved "T" wings from Figma layered seamlessly over a grayscale event crowd background.
- **Interactive Scope Accordion:** 4 expanding panels representing *Activities and Experience*, *Virtual Engagement*, *Insightful Technologies*, and *Imagination Lab*. 
  - On desktop: Cards expand horizontally (`flex-grow` transitions) upon interaction to reveal custom inline vector artwork, styled bullet lists, and pill buttons.
  - On mobile: Transition logic adapts automatically, stacking cards vertically and shifting height properties for fluid usability on touchscreens.

### 2. `blinks.html` (Blinks)
- **Surreal Eye Illustration:** Fully constructed using modular inline SVG layers (detailed botanical green leaves, wild mushrooms, and orange coral structures) that load instantly and performantly without heavy image assets.
- **Filtering Widget:** Responsive tabs to switch instantly between *Case Studies* and *Articles & Blogs*.
- **Live Search & Grid Toggle:** Lightweight javascript filters cards dynamically as you type, with grid-view and list-view toggling controls.

### 3. `vision-flow.html` (Vision Flow)
- **Dynamic Scrolling Timeline:** A vertical layout detailing the 6 stages of event design.
- **Progressive Line Filler:** As the user scrolls, a custom glowing orange tracker line fills down the timeline, highlighting active nodes.

### 4. `contact.html` (Contact Us)
- **Responsive Brief Form:** Inputs mapped cleanly within a Bootstrap grid.
- **Real-Time Validation:** Input boxes shift between interactive green (valid) and red (invalid) states instantly upon blur or text editing.
- **Submission Modal Popup:** A beautiful success popup modal appears upon a valid submission to thank the user and reset fields.

---

## 🛠️ Technology Stack

- **Structure:** HTML5 semantic tags.
- **Framework:** Bootstrap 5.3 (via high-speed CDN for rapid loads).
- **Styling:** Vanilla CSS3 using custom properties (Variables), radial-gradients, and hardware-accelerated animations.
- **Scripts:** Vanilla JavaScript (ES6+) for observers, scroll handlers, toggling logic, and form validations.
- **Icons:** FontAwesome v6 (via CDN).

---

## 🚀 Setup & Local Execution

No build steps are required. To view the website:
1. Double-click **`index.html`** in your browser, or open the folder using a local server extension (e.g. VS Code Live Server).
2. Enjoy smooth scrolling and lag-free transitions!
