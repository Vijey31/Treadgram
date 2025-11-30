# TREADGRAM - AI-Powered Cardiovascular & Revenue Intelligence

## Overview

TREADGRAM is a modern, responsive health-tech website for a B2B startup at the intersection of cardiology, fitness, diagnostics, and hospital revenue optimization. The website showcases AI-powered solutions for healthcare operations including RCM automation, wearable biomarker analytics, gym-integrated cardiovascular screening, and hospital OPD efficiency tools.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom TREADGRAM brand theme
- **Routing**: React Router for client-side navigation
- **Design**: Futuristic healthcare + sports performance theme with deep navy backgrounds, electric blue, and signal red accents

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **API Design**: RESTful API with structured error handling

### Brand Colors
- **Primary (Electric Blue)**: hsl(199, 89%, 48%) - Main brand color
- **Accent (Signal Red)**: hsl(0, 84%, 60%) - Call-to-action highlights
- **Background (Deep Navy)**: hsl(220, 26%, 14%) - Dark professional background
- **Fonts**: Space Grotesk (headings), Inter (body text)

### Website Pages
1. **Home** - Hero section, feature cards, "Why TREADGRAM", data pipeline visualization
2. **RCM AI** - Revenue Cycle Management AI capabilities
3. **SmartBiomarkers** - Wearable biomarker analytics (ECG, SpO₂, BP, Activity)
4. **FusionClinic** - Gym-integrated cardiovascular screening clinic
5. **SmartHospital** - OPD efficiency AI agent with mock chat interface
6. **Vision** - Company vision with three pillars and 5-year horizon
7. **About Us** - Team, partnerships, and research information
8. **Contact** - Contact form and company information

### Key Features
- Sticky navigation bar with responsive mobile menu
- Smooth scroll animations and micro-interactions
- Card-based layouts with hover effects
- Glass-morphism design elements
- Responsive design for all screen sizes
- Professional B2B health-tech aesthetic

## Development

### Scripts
- `npm run dev` - Start development server on port 5000
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run db:push` - Push database schema changes

### File Structure
```
client/
├── src/
│   ├── components/
│   │   ├── layout/        # Navbar, Footer, Layout
│   │   └── ui/            # Reusable UI components
│   ├── pages/             # Page components (Home, RCM, etc.)
│   ├── index.css          # Global styles and brand theme
│   └── App.tsx            # Main app with routing
server/
├── index.ts               # Express server entry
├── routes.ts              # API routes
└── vite.ts                # Vite middleware setup
```
