export const BREAKPOINTS = {
  MOBILE: 767,
  TABLET: 768,
  DESKTOP: 1024,
  LARGE_DESKTOP: 1200,
  XLARGE_DESKTOP: 1400
};

export const SCROLL_OFFSETS = {
  NAVBAR_HEIGHT: 190,
  VISION_THRESHOLD: -50,
  BACKGROUND_CHANGE: 100,
  HAMBURGER_SHOW: 100
};

export const COLORS = {
  PRIMARY_BG: '#ffffff',
  SECONDARY_BG: '#f6fcffb8',
  BLACK: '#000',
  WHITE: '#fff',
  GRAY: '#ccc',
  DARK_TEXT: '#0d110f',
  OVERLAY: 'rgba(0, 0, 0, 0.3)',
  NAV_BG: 'rgba(222, 224, 238, 0.7)',
  NAV_ITEM_BG: 'rgba(255, 255, 255, 0.3)',
  NAV_BORDER: 'rgba(128, 128, 128, 0.2)',
  NAV_BORDER_WHITE: 'rgba(255, 255, 255, 0.3)',
  PURPLE: '#744b9e',
  PURPLE_LIGHT: '#a49ded'
};

export const TRANSITIONS = {
  FAST: '0.2s',
  MEDIUM: '0.3s',
  SLOW: '0.4s',
  VERY_SLOW: '0.5s',
  BACKGROUND: '0.3s ease',
  DRAWER: '0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  SECTION: '1s ease-out',
  ABOUT_EXPAND: '1.2s ease'
};

export const DIMENSIONS = {
  MAX_CONTENT_WIDTH: '70em',
  HAMBURGER_SIZE: 48,
  MOBILE_DRAWER_WIDTH: '75vw',
  MOBILE_DRAWER_MAX_WIDTH: 280,
  NAV_MAX_WIDTH: 955,
  ILLUSTRATION_MOBILE: 80
};

export const Z_INDEX = {
  HAMBURGER: 1100,
  DRAWER: 1060,
  OVERLAY: 1050,
  NAVIGATION: 1000
};

export const ANIMATION_THRESHOLDS = {
  INTERSECTION_RATIOS: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
  MIN_VISIBLE_RATIO: 0.1
};

export const OBSERVER_OPTIONS = {
  SECTION: {
    root: null,
    rootMargin: '-200px 0px -50% 0px',
    threshold: 0
  },
  ANIMATION: {
    root: null,
    rootMargin: '-100px 0px -100px 0px',
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5]
  }
};

export const API_CONFIG = {
  PROD_URL: 'https://scale-bridge-backend.vercel.app/api',
  DEV_URL: 'http://localhost:5000/api'
};

export const ASSET_PATHS = {
  LOGO: '/src/assets/logo.png',
  ILLUSTRATIONS: {
    ILLUS1: '/src/assets/landing-page-illustration/illus1.png',
    ILLUS2: '/src/assets/landing-page-illustration/illus2.png',
    ILLUS3: '/src/assets/landing-page-illustration/illus3.png',
    ILLUS4: '/src/assets/landing-page-illustration/illus4.png'
  },
  PROFILES: {
    PFP1: '/src/assets/profiles/pfp1.png',
    PFP2: '/src/assets/profiles/pfp2.png',
    PFP3: '/src/assets/profiles/pfp3.png',
    PFP4: '/src/assets/profiles/pfp4.png',
    PFP5: '/src/assets/profiles/pfp5.png'
  },
  VALUE_PROPOSITION: {
    VP1: '/src/assets/value-proposition/vp1.png',
    VP2: '/src/assets/value-proposition/vp2.png',
    VP3: '/src/assets/value-proposition/vp3.png',
    VP4: '/src/assets/value-proposition/vp4.png',
    VP5: '/src/assets/value-proposition/vp5.png',
    VP6: '/src/assets/value-proposition/vp6.png'
  },
  LEAN_MODEL: {
    CHART: '/src/assets/Lean Model/chart.png'
  },
  COORDINATES: {
    INSTA_QR: '/src/assets/co-ordinates/insta.png'
  }
};

export const FORM_INITIAL_STATE = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: ''
};

export const HOVER_TIMEOUT = 120;

export const COMPANY_INFO_STYLES = {
  DESKTOP: {
    marginTop: '5em',
    minHeight: '35sem',
    padding: '3em 4em 2em 4em',
    titleMaxWidth: '4.5em',
    titleFontSize: '4em',
    titleFontWeight: '850',
    titlePaddingBottom: '30px',
    descriptionFontSize: '1.4em',
    descriptionFontWeight: '400'
  },
  MOBILE: {
    marginTop: '-14em'
  }
};

export const COORDINATES_STYLES = {
  MOBILE: {
    marginBottom: '6em'
  },
  DESKTOP: {
    titleFontSize: '4em',
    titleFontWeight: '850'
  }
};
