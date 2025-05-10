# 🎯 Captivate - Presentation Platform

Captivate is a modern web application for creating beautiful, branded presentation decks and experiences. Built with **React** and **Tailwind CSS**, this platform helps users create engaging presentations with ease.

## 📌 Features

- 🎨 **Beautiful Presentations** with modern design templates
- 📊 **Analytics Dashboard** for performance tracking
- 🎥 **Livestream Integration** for broadcasting
- 🎯 **Branding Tools** for consistent visual identity
- 📱 **Responsive Design** for all devices
- 🔄 **Real-time Collaboration** features
- 🎯 **All-in-One Platform** for presentation needs

## 🛠️ Technologies Used

- ⚛️ React
- 🎨 Tailwind CSS
- 🚀 Vite
- 📦 npm/yarn
- 🎯 TypeScript
- 🎨 Shadcn UI Components

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

The application uses a consistent color scheme:
- Primary Gradient: `from-[#11CCA8] to-[#4AC5DF]`
- Background: `#0f172a`
- Text Colors: White with varying opacity levels
- Accent Colors: Cyan-400 for highlights

## 👨‍💻 Author
GitHub: wanqiOh

## 📜 License
This project is licensed under the MIT License.

