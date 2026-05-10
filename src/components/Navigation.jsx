import { useEffect, useState } from 'react';
import './Navigation.css';
import { SCROLL_OFFSETS } from '../config/constants';
import locales from '../config/locales.json';

const Navigation = ({ sections, activeSection, onNavigate, isLaptop, visionRef }) => {
    const [showGoBack, setShowGoBack] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [pastVision, setPastVision] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > SCROLL_OFFSETS.HAMBURGER_SHOW) {
                setShowGoBack(true);
            } else {
                setShowGoBack(false);
            }

            if (visionRef && visionRef.current && visionRef.current['vision']) {
                const visionEl = visionRef.current['vision'];
                const visionTop = visionEl.getBoundingClientRect().top;
                setPastVision(visionTop < SCROLL_OFFSETS.VISION_THRESHOLD);
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [visionRef]);

    const handleMobileNav = (sectionId) => {
        onNavigate(sectionId);
        setMobileMenuOpen(false);
    };

    if (!isLaptop) {
        if (!pastVision) return null;

        return (
            <>
                <button
                    className="mobile-hamburger"
                    onClick={() => setMobileMenuOpen((prev) => !prev)}
                    aria-label={locales.navigation.ariaLabels.openMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div
                    className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                />

                <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            className={`mobile-nav-item ${activeSection === section.id ? 'active' : ''}`}
                            onClick={() => handleMobileNav(section.id)}
                        >
                            {section.label}
                        </button>
                    ))}
                </div>
            </>
        );
    }

    return (
        <div className={`navigation-wrapper ${showGoBack ? 'centered' : ''}`}>
            <nav className="navigation">
                <div className="nav-container">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                            onClick={() => onNavigate(section.id)}>
                            {section.label}
                        </button>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
