# Nivin MB Portfolio

A modern, visually impressive 3D portfolio website built with React, Three.js, and Tailwind CSS.

## Features

- **Dark-themed Design**: Sleek dark color scheme with vibrant accent colors
- **3D Animations**: Interactive 3D elements using Three.js and React Three Fiber
- **Glass Morphism Effects**: Modern semi-transparent UI elements with blur effects
- **Responsive Design**: Fully responsive layout for all device sizes
- **Interactive UI**: Mouse-follow animations and scroll-triggered elements
- **Project Showcase**: 3D project cards with tilt effect
- **Skills Visualization**: 3D animated skills display
- **Contact Form**: Animated contact form with validation

## Tech Stack

- **React**: Frontend framework
- **Three.js / React Three Fiber**: 3D graphics and animations
- **Framer Motion**: Animations and transitions
- **Tailwind CSS**: Styling
- **Vite**: Build tool

## Prerequisites

- Node.js (v14.0 or higher)
- npm or yarn

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nivin-portfolio.git
   cd nivin-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
# or
yarn build
```

The build files will be located in the `dist` directory.

## Project Structure

```
nivin-portfolio/
├── public/            # Static assets
│   ├── models/        # 3D models
│   │   ├── projects/      # Project images
│   │   └── fonts/         # Custom fonts
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Home.jsx   # Hero section
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Resume.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── ...
│   │   ├── App.jsx        # Main component
│   │   ├── App.css        # Global styles
│   │   ├── index.css      # Tailwind imports
│   │   └── main.jsx       # Entry point
│   ├── tailwind.config.js # Tailwind configuration
│   ├── postcss.config.js  # PostCSS configuration
│   └── package.json
```

## Customization

1. Replace placeholder images in the `public/projects/` directory
2. Update project details in `src/components/Projects.jsx`
3. Update contact information in `src/components/Contact.jsx`
4. Replace placeholder resume download in `src/components/Resume.jsx`

## Credits

- 3D models from [source]
- Icons from React Icons
- Fonts from Google Fonts

## License

This project is licensed under the MIT License - see the LICENSE file for details.
"# portfolio" 
