# Full Stack Job Portal

A feature-rich job portal built with modern web technologies, allowing users to post, search, and apply for jobs seamlessly.

## Tech Stack

- **Frontend:** React.js, Tailwind CSS, ShadCN UI
- **Backend:** Supabase (PostgreSQL, Authentication, Storage)
- **Authentication:** Clerk
- **UI Components:** ShadCN UI

## Features

### User Roles
- **Job Seekers**: Search for jobs, apply for positions, and manage applications.
- **Employers**: Post job listings, review applications, and manage job postings.
- **Admin**: Manage users, job listings, and platform settings.

### Core Functionalities
- **Authentication & Authorization** (Powered by Clerk)
- **Job Listing Management** (Create, Read, Update, Delete Jobs)
- **User Dashboard** (Manage applications & job posts)
- **Search & Filter** (Filter jobs by title, location, salary, etc.)
- **Application Tracking** (Employers can review and manage applications)
- **Responsive Design** (Optimized for mobile & desktop)

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js & npm/yarn
- Supabase account & project setup
- Clerk account for authentication

### Clone the Repository
```sh
git clone https://github.com/yourusername/job-portal.git
cd job-portal
```

### Install Dependencies
```sh
npm install  # or yarn install
```

### Setup Environment Variables
Create a `.env` file in the root directory and configure the following:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_CLERK_SECRET_KEY=your_clerk_secret_key
```

### Start the Development Server
```sh
npm run dev  # or yarn dev
```

## Folder Structure
```
📂 job-portal
├── 📂 src
│   ├── 📂 components  # Reusable UI components
│   ├── 📂 pages       # Page components (Home, JobList, JobDetails, etc.)
│   ├── 📂 hooks       # Custom React hooks
│   ├── 📂 utils       # Helper functions
│   ├── 📂 services    # API calls to Supabase
│   ├── 📂 styles      # Tailwind CSS configuration
│   ├── main.tsx      # Entry point
│   ├── App.tsx       # Main app component
├── 📜 package.json    # Dependencies & scripts
├── 📜 README.md       # Project documentation
```

## Deployment
This project can be deployed on platforms like Vercel, Netlify, or any hosting service supporting React apps.

### Deploy on Vercel
```sh
vercel
```

### Deploy on Netlify
```sh
netlify deploy
```


---
**Happy Coding! 🚀**

