# ScaleBridge Landing Page

A lightweight, modular single-page landing site for ScaleBridge - Finance Transformation Architects.

## Features

- Single-page application with 6 sections
- Smooth fade transitions between sections
- Sticky navigation with hover effects
- Fully responsive design
- Modular component architecture
- Built with React + Vite (lightweight)

## Tech Stack

- React 18
- Vite (fast build tool)
- Pure CSS (no heavy frameworks)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deploy to Vercel

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. Deploy:

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx          # Sticky navigation
│   └── sections/
│       ├── Vision.jsx           # Section 1
│       ├── CompanyInfo.jsx      # Section 2
│       ├── BoardCoFounders.jsx  # Section 3
│       ├── ValueProposition.jsx # Section 4
│       ├── LeanModel.jsx        # Section 5
│       └── Coordinates.jsx      # Section 6
├── App.jsx                      # Main app with transitions
├── main.jsx                     # Entry point
└── index.css                    # Global styles
```

## Color Theme

- Headers: #0D110F
- Company Vision Background: #A49DED
- Who We Are Background: #2C3082
- Main Background: #FFFFFF

## Customization

Each section is a standalone component that can be easily modified, removed, or reordered. Simply edit the `sections` array in `App.jsx`.
