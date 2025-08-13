# PGDCS Landing Page Application

## Overview

This is a single-page marketing website for a Post Graduate Diploma in Cyber Security (PGDCS) program. The application serves as a comprehensive information portal and lead generation platform for prospective students. It features detailed program information, course structures, eligibility requirements, career pathways, downloadable resources (brochures and syllabi), and an inquiry form for student inquiries.

The application is built as a full-stack web application with a React frontend and Express.js backend, designed to showcase the PGDCS program and capture student interest through forms and downloads.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing (single-page application)
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with CSS custom properties for theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Structure**: Modular component architecture with separate components for each page section (hero, overview, courses, eligibility, career paths, contact, downloads)

### Backend Architecture
- **Framework**: Express.js with TypeScript for robust API development
- **API Design**: RESTful endpoints for handling inquiries and file downloads
- **Data Validation**: Zod schemas for runtime type validation and data integrity
- **File Generation**: Server-side PDF generation capabilities for brochures and syllabi
- **Email Integration**: Email notification system for inquiry processing (stubbed for development)
- **Development Setup**: Custom Vite integration for seamless full-stack development experience

### Data Storage Solutions
- **Production Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Development Storage**: In-memory storage implementation for local development
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Database Provider**: Neon Database for serverless PostgreSQL hosting
- **Data Models**: Two main entities - inquiries (student contact forms) and downloads (tracking PDF downloads)

### Form Handling and Lead Generation
- **Inquiry System**: Comprehensive contact form with validation for student inquiries
- **Download Tracking**: System to track brochure and syllabus downloads for analytics
- **Form Validation**: Client-side and server-side validation using React Hook Form and Zod
- **User Feedback**: Toast notifications for form submissions and download confirmations

### PDF Generation and Content Management
- **Dynamic PDF Generation**: Server-side PDF creation for program brochures and detailed syllabi
- **Content Structure**: Structured course data with semester-based organization
- **File Delivery**: Secure file download endpoints with proper content headers
- **Asset Management**: Static asset handling through Vite's asset pipeline

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router alternative (Wouter)
- **TypeScript**: Full TypeScript support across frontend and backend
- **Node.js Runtime**: Express.js server with ES modules support

### UI and Styling
- **Radix UI**: Complete set of accessible UI primitives for all interactive components
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for creating variant-based component APIs

### Data Management
- **TanStack Query**: Server state management, caching, and synchronization
- **Drizzle ORM**: Type-safe database operations and schema management
- **Neon Database**: Serverless PostgreSQL database hosting
- **Zod**: Runtime type validation and schema validation

### Development Tools
- **Vite**: Build tool and development server with HMR
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS integration
- **TSX**: TypeScript execution for development server

### Form and Validation
- **React Hook Form**: Form state management and validation
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### Additional Features
- **Date-fns**: Date manipulation and formatting utilities
- **Nanoid**: Unique ID generation for records
- **PDFKit**: PDF generation capabilities (indicated by @types/pdfkit)
- **Connect PG Simple**: PostgreSQL session store for Express

### Development and Deployment
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **Environmental Configuration**: Environment-based configuration for database and services
- **Session Management**: PostgreSQL-backed session storage for production use
- **Multi-Platform Deployment**: Configured for Heroku, Vercel, Netlify, Railway, and Digital Ocean
- **Deployment Files**: Procfile, app.json, vercel.json, netlify.toml for platform-specific deployment
- **Build Process**: Dual-build system for frontend (Vite) and backend (ESBuild) optimization