# 🌌 Nebula AI - Modern SaaS Landing Page

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-19.0.0-blue)
![TypeScript](https://img.shields.io/badge/typescript-5.0.0-blue)

A high-performance, aesthetically stunning landing page template designed for next-generation AI and SaaS platforms. Built with React 19, Tailwind CSS, and Framer Motion, it features complex interactive animations, glassmorphism effects, and a responsive layout.

## ✨ Key Features

- **Interactive Hero Section**: Features a 3D-tilting terminal dashboard that reacts to mouse movement, complete with live code typing simulation and real-time metric gauges.
- **Advanced Animations**:
  - **Parallax Scrolling**: Background elements shift depth as you scroll.
  - **Mouse-Tracking Particles**: A dynamic background system where particles float and react to cursor physics.
  - **Spotlight Effects**: Hover-triggered radial gradients on cards.
  - **Staggered Reveals**: Smooth entry animations for text and grid items.
- **Modern UI Patterns**:
  - **Bento Grid**: Apple-style feature layout.
  - **Infinite Marquee**: Seamless scrolling logo wall for social proof.
  - **Glassmorphism**: Frosted glass effects on navigation and cards.
  - **Pricing Toggle**: Interactive monthly/annual pricing switcher.
- **Fully Responsive**: Flawless experience across mobile, tablet, and desktop devices.
- **Dark Mode Native**: Designed specifically for a premium dark-themed aesthetic.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Quick Start

This project is built as a standard React application.

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/nebula-ai.git
    cd nebula-ai
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm start
    # or
    npm run dev
    ```

4.  Open `http://localhost:3000` (or the port shown in your terminal) to view the app.

## 📂 Project Structure

```
nebula-ai/
├── components/           # UI Components
│   ├── Navbar.tsx        # Responsive header with mobile menu
│   ├── Hero.tsx          # 3D interactive terminal & particle system
│   ├── SocialProof.tsx   # Infinite logo scroll
│   ├── Features.tsx      # Bento grid feature display
│   ├── HowItWorks.tsx    # Step-by-step process visualization
│   ├── Testimonials.tsx  # Customer review cards
│   ├── Pricing.tsx       # Interactive pricing table
│   ├── CTA.tsx           # Final call-to-action with spotlight
│   └── Footer.tsx        # Site footer
├── App.tsx               # Main layout and composition
├── index.html            # Entry HTML with Tailwind config
├── index.tsx             # React entry point
└── README.md             # Project documentation
```

## 🎨 Customization

### Colors
The project uses a custom Tailwind configuration embedded in `index.html`. You can modify the `primary` color palette in the `<script>` tag within `<head>` to match your brand:

```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Change this hex code
    // ...
  }
}
```

### Animations
Animations are primarily handled via `Framer Motion`. Look for `initial`, `animate`, and `transition` props in the components to adjust timing and easing.

### Hero Terminal Text
To change the code being "typed" in the hero section, edit the `CodeLine` components inside `components/Hero.tsx`:

```tsx
<CodeLine line="const yourApp = await YourSDK.deploy();" delay={100} />
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Designed with 💜 for the builders of tomorrow.*
