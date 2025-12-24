# Birthday Celebration App

## Overview
A React-based birthday celebration web application featuring animated effects, a photo gallery, music player, and personalized messages. Built with Vite for fast development and optimized production builds.

## Project Structure
```
├── public/           # Static assets
│   ├── images/       # Gallery photos (pic1-6.jpeg)
│   └── music.mp3     # Background music
├── src/
│   ├── components/   # React components
│   │   ├── CelebrationPage.jsx  # Main celebration view
│   │   ├── Confetti.jsx         # Confetti animation
│   │   ├── Countdown.jsx        # Countdown timer
│   │   ├── Effects.jsx          # Visual effects
│   │   ├── Gallery.jsx          # Photo gallery
│   │   ├── Hearts.jsx           # Heart animations
│   │   ├── MessageCard.jsx      # Birthday message card
│   │   └── MusicPlayer.jsx      # Audio player
│   ├── App.jsx       # Main app component
│   └── main.jsx      # Entry point
├── vite.config.js    # Vite configuration (port 5000)
└── package.json      # Dependencies and scripts
```

## Tech Stack
- React 19
- Vite 7
- GSAP (animations)

## Development
Run `npm run dev` to start the development server on port 5000.

## Deployment
Static deployment configured. Build output goes to `dist/` folder.
