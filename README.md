# French Masterclass - Elite French Educator Landing Page

A stunning, high-converting landing page for an elite French educator, built with modern React and designed for elegance and trust.

![French Masterclass](https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop)

## ✨ Features

- **Modern React** - Functional components with hooks
- **Tailwind CSS** - Utility-first styling with custom color palette
- **Framer Motion** - Smooth scroll animations and transitions
- **Lucide React** - Clean, modern icons
- **Fully Responsive** - Mobile, tablet, and desktop optimized

## 🎨 Design System

### Color Palette
- **Navy Blue** - Primary text and dark accents (`#102a43` to `#0a1929`)
- **Warm Cream** - Backgrounds (`#fefdfb` to `#e3c99c`)
- **Gold** - Accent highlights (`#d4a417`, `#b8860b`)

### Typography
- **Headings** - Playfair Display (serif)
- **Body** - Inter (sans-serif)

## 📄 Page Sections

1. **Navbar** - Sticky navigation with mobile menu
2. **Hero** - Full-screen with Paris background, CTAs, and social proof
3. **Instructor Bio** - Two-column layout with credentials
4. **Course Offerings** - 3 pricing cards (Conversational, DELF Prep, Business French)
5. **Testimonials** - Student success stories with stats
6. **FAQ** - Accordion-style frequently asked questions
7. **Lead Magnet** - French level quiz signup
8. **Footer** - Contact info, social links, booking CTA

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/french-masterclass.git

# Navigate to project directory
cd french-masterclass

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [React 19](https://react.dev/) | UI Framework |
| [Vite](https://vitejs.dev/) | Build Tool |
| [Tailwind CSS 3](https://tailwindcss.com/) | Styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lucide React](https://lucide.dev/) | Icons |

## 📁 Project Structure

```
french-masterclass/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── InstructorBio.jsx
│   │   ├── CourseOfferings.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   ├── LeadMagnet.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🎯 Customization

### Update Content
Edit the component files in `src/components/` to update:
- Instructor name and bio
- Course offerings and pricing
- Testimonials
- FAQ questions
- Contact information

### Update Colors
Modify `tailwind.config.js` to change the color palette:

```javascript
colors: {
  navy: { /* your colors */ },
  cream: { /* your colors */ },
  gold: { /* your colors */ },
}
```

### Update Images
Replace Unsplash URLs in components with your own images.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🔗 External Integrations

- **Calendly** - Booking link in footer
- **Email** - Contact form submissions
- **Social Media** - Instagram, LinkedIn, YouTube links

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

Built with ❤️ for French educators worldwide.

---

**Ready to teach French with elegance?** [Get Started →](#)
