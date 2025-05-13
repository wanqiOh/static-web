# 🎯 Captivate - Presentation Platform

Captivate is a modern web application for creating beautiful, branded presentation decks and experiences. Built with **React** and **Tailwind CSS**, this platform helps users create engaging presentations with ease. The application is fully responsive, ensuring a seamless experience across all devices from mobile phones to desktop computers.

## 📌 Features

- 🎨 **Beautiful Presentations** with modern design templates
- 📊 **Analytics Dashboard** for performance tracking
- 🎥 **Livestream Integration** for broadcasting
- 🎯 **Branding Tools** for consistent visual identity
- 📱 **Responsive Design** for all devices
- 🔄 **Real-time Collaboration** features
- 🎯 **All-in-One Platform** for presentation needs
- ✨ **Feature-rich Platform**: Create, customize, and present with powerful tools and beautiful templates.
- 💸 **Flexible Pricing**: Choose a plan that fits your needs, from free to premium options.
- ❓ **Comprehensive FAQ**: Get instant answers to common questions and support topics.

## 🛠️ Technologies Used

- ⚛️ React
- 🎨 Tailwind CSS
- 🚀 Vite
- 📦 npm/yarn
- 🎯 TypeScript
- 🎨 Shadcn UI Components
- 📱 Responsive Design Tools

## 🚀 Installation & Setup

1️⃣ **Clone the Repository**

```bash
git clone https://github.com/yourusername/captivate.git
```

2️⃣ **Navigate to the Project Folder**

```bash
cd captivate
```

3️⃣ **Install Dependencies**

```bash
npm install
# or
yarn install
```

4️⃣ **Start the Development Server**

```bash
npm run dev
# or
yarn dev
```

## 📸 Screenshots

### Features Section

![Features](https://firebasestorage.googleapis.com/v0/b/rentalapp-fa5bd.appspot.com/o/images%2Ffeatures.png?alt=media&token=0d8a7c10-e63d-431f-a525-f3f18d9ef5f3)

### Pricing Section

![Pricing](https://firebasestorage.googleapis.com/v0/b/rentalapp-fa5bd.appspot.com/o/images%2Fpricing.png?alt=media&token=51b9c878-7608-429d-814a-784df907c178)

### FAQ Section

![FAQ](https://firebasestorage.googleapis.com/v0/b/rentalapp-fa5bd.appspot.com/o/images%2Ffaq.png?alt=media&token=62e8861d-f473-4238-a981-b965e94ff24f)

## 🎯 Key Components

### SectionHeader

A reusable component for section headers with customizable alignment and styling.

```jsx
<SectionHeader
  title="Features"
  description="Your description here"
  textAlign="left" // or "center"
/>
```

### FeatureCard

A versatile card component for displaying features with customizable layouts.

```jsx
<FeatureCard
  image={imageSource}
  imageAlt="Description"
  labelWidth={136}
  labelText="FEATURE"
  title="Feature Title"
  description="Feature description"
  imagePosition="top" // or "bottom"
/>
```

### DescriptionImage

A component for displaying content with images and descriptions.

```jsx
<DescriptionImage
  title="Your Title"
  description="Your description"
  src={imageSource}
  alt="Image description"
  sectionPart="text" // or "list"
/>
```

## 🎨 Design System

The application uses a consistent color scheme and responsive design principles:

- Primary Gradient: `from-[#11CCA8] to-[#4AC5DF]`
- Background: `#0f172a`
- Text Colors: White with varying opacity levels
- Accent Colors: Cyan-400 for highlights
- Responsive Typography:
  - Mobile: Base text size 16px
  - Tablet: Base text size 18px
  - Desktop: Base text size 20px
- Spacing System:
  - Mobile: 16px base unit
  - Tablet: 24px base unit
  - Desktop: 32px base unit

## 📱 Responsive Design

### Breakpoints

The application uses Tailwind CSS breakpoints for consistent responsive behavior:

- `sm`: 640px and up (mobile landscape)
- `md`: 768px and up (tablets)
- `lg`: 1024px and up (laptops)
- `xl`: 1280px and up (desktops)
- `2xl`: 1536px and up (large screens)

### Responsive Components

All components are built with mobile-first approach:

- **SectionHeader**: Adapts text alignment and spacing based on screen size
- **FeatureCard**: Switches between grid and stack layouts for different screen sizes
- **DescriptionImage**: Adjusts image size and text layout for optimal viewing
- **Navigation**: Collapses into a hamburger menu on mobile devices

### Testing Responsive Design

To ensure consistent responsive behavior:

1. Use Chrome DevTools Device Toolbar
2. Test on real devices:
   - Mobile phones (iOS and Android)
   - Tablets
   - Laptops
   - Desktop monitors
3. Check common breakpoints:
   - 320px (small mobile)
   - 375px (mobile)
   - 768px (tablet)
   - 1024px (laptop)
   - 1440px (desktop)

## 📱 Responsive Testing Checklist

Before deploying, ensure:

- [ ] All components render correctly on mobile devices
- [ ] Navigation is accessible on all screen sizes
- [ ] Images scale appropriately
- [ ] Text remains readable at all breakpoints
- [ ] Touch targets are at least 44x44px on mobile
- [ ] No horizontal scrolling on any device
- [ ] Forms and inputs are mobile-friendly
- [ ] Interactive elements have appropriate spacing for touch
- [ ] Performance is optimized for mobile networks

## 👨‍💻 Author

GitHub: wanqiOh

## 📜 License

This project is licensed under the MIT License.
