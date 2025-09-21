# replit.md

## Overview

TreadGram is a clinical intelligence web application designed for healthcare professionals. It provides an AI-powered dashboard for managing patients, reports, and medical imaging data. The application features a modern React-based frontend with a clean, medical-themed interface, backed by an Express.js server with PostgreSQL database integration. The system is built to help clinicians make data-driven decisions through analytics, automated report generation, and intelligent anomaly detection in medical imaging.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent design
- **Styling**: Tailwind CSS with custom medical theme using CSS variables for theming
- **State Management**: Redux Toolkit with RTK Query for server state management and caching
- **Routing**: React Router for client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **API Design**: RESTful API with structured error handling and request logging middleware
- **Development**: Hot reload with Vite middleware integration

### Data Storage
- **Primary Database**: PostgreSQL with Neon serverless database hosting
- **Schema Management**: Drizzle Kit for migrations and schema synchronization
- **In-Memory Storage**: MemStorage class as fallback/development storage interface
- **Session Management**: connect-pg-simple for PostgreSQL-backed sessions

### Authentication & Authorization
- **Session-based Authentication**: Uses Express sessions with PostgreSQL storage
- **User Roles**: Role-based access control with doctor/admin roles
- **Default User**: Pre-configured doctor account for development

### Core Data Models
- **Users**: Healthcare professionals with roles and authentication
- **Patients**: Patient demographics, medical IDs, and visit tracking
- **Reports**: AI-generated medical reports with confidence scoring
- **Imaging**: Medical imaging data with anomaly detection flags
- **Analytics**: System metrics and performance tracking

### UI/UX Design Decisions
- **Medical Theme**: Professional healthcare color scheme with primary blues and accent greens
- **Responsive Design**: Mobile-first approach with collapsible sidebar navigation
- **Component Library**: Comprehensive set of reusable UI components following design system principles
- **Data Visualization**: Recharts integration for analytics and trending data
- **Toast Notifications**: User feedback system for actions and errors

## External Dependencies

### Database & Storage
- **@neondatabase/serverless**: Neon PostgreSQL serverless database driver
- **drizzle-orm**: TypeScript ORM for database operations
- **drizzle-kit**: Database migration and schema management tools
- **connect-pg-simple**: PostgreSQL session store for Express

### UI & Styling
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework for styling
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility
- **lucide-react**: Icon library for consistent iconography

### Development & Build Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit integration for development

### Data Fetching & State
- **@reduxjs/toolkit**: Redux Toolkit for state management and RTK Query for data fetching
- **react-redux**: React bindings for Redux
- **react-router-dom**: Client-side routing for React applications
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Schema validation library

### Charting & Visualization
- **recharts**: React charting library for data visualization
- **embla-carousel-react**: Carousel component for image galleries
- **date-fns**: Date manipulation and formatting utilities