# ScaleBridge Frontend - Source Code Structure

## Directory Structure

```
src/
├── assets/              # Static assets (images, icons, etc.)
├── components/          # Reusable UI components
│   ├── Navigation.jsx
│   └── Navigation.css
├── config/              # Configuration files
│   ├── constants.js     # Application constants (breakpoints, colors, etc.)
│   └── locales.json     # All text content for internationalization
├── hooks/               # Custom React hooks
│   ├── useResponsive.js
│   ├── useScrollBackground.js
│   └── useSectionObserver.js
├── pages/               # Page-level components (sections)
│   ├── Vision.jsx
│   ├── CompanyInfo.jsx
│   ├── BoardCoFounders.jsx
│   ├── ValueProposition.jsx
│   ├── LeanModel.jsx
│   ├── Coordinates.jsx
│   └── *.css            # Page-specific styles
├── utils/               # Utility functions
│   └── responsive.js
├── App.jsx              # Main application component
├── App.css              # Global application styles
├── main.jsx             # Application entry point
├── index.css            # Global CSS reset and base styles
└── config.js            # API configuration
```

## Key Files

### Configuration

- **`config/constants.js`**: Contains all reusable constants including:
  - Breakpoints for responsive design
  - Scroll offsets and thresholds
  - Color palette
  - Transition durations
  - Dimensions and sizing
  - Z-index layers
  - Observer options
  - API configuration

- **`config/locales.json`**: Centralized text content for all components, organized by section. This enables easy content updates and future internationalization.

### Custom Hooks

- **`hooks/useResponsive.js`**: Manages responsive breakpoint detection
- **`hooks/useScrollBackground.js`**: Handles scroll-based background color changes
- **`hooks/useSectionObserver.js`**: Manages section visibility and animation observers

### Utilities

- **`utils/responsive.js`**: Helper functions for responsive behavior

### Pages

Each page component represents a major section of the website:
- **Vision**: Landing section with company vision and illustrations
- **CompanyInfo**: Company description and mission
- **BoardCoFounders**: Team member profiles
- **ValueProposition**: Value propositions grid
- **LeanModel**: Services and lean model information
- **Coordinates**: Contact form and social links

## Design Principles

1. **Separation of Concerns**: Logic, presentation, and data are clearly separated
2. **Reusability**: Common functionality extracted into hooks and utilities
3. **Maintainability**: Constants and text content centralized for easy updates
4. **Scalability**: Modular structure allows easy addition of new features
5. **Clean Code**: No inline comments, self-documenting code with clear naming

## Making Changes

### Updating Text Content
Edit `config/locales.json` - all text is organized by section.

### Updating Styles
- Global styles: `App.css` or `index.css`
- Component-specific: Corresponding `.css` file in `pages/` or `components/`

### Updating Constants
Edit `config/constants.js` for breakpoints, colors, transitions, etc.

### Adding New Sections
1. Create new component in `pages/`
2. Add text content to `locales.json`
3. Import and add to sections array in `App.jsx`
