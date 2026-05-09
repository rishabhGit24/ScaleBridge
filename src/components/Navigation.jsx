import { useEffect, useState } from 'react';
import './Navigation.css';

const Navigation = ({ sections, activeSection, onNavigate, isLaptop, visionRef }) => {
    const [showGoBack, setShowGoBack] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [pastVision, setPastVision] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowGoBack(true);
            } else {
                setShowGoBack(false);
            }

            // Show hamburger as soon as user starts scrolling away from vision section
            if (visionRef && visionRef.current && visionRef.current['vision']) {
                const visionEl = visionRef.current['vision'];
                const visionTop = visionEl.getBoundingClientRect().top;
                // Show once the vision section's top has scrolled above the viewport
                setPastVision(visionTop < -50);
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

    // ── MOBILE NAV ──────────────────────────────────────────────
    if (!isLaptop) {
        // Only show hamburger after scrolling past the vision section
        if (!pastVision) return null;

        return (
            <>
                {/* Hamburger button — fixed top-left */}
                <button
                    className="mobile-hamburger"
                    onClick={() => setMobileMenuOpen((prev) => !prev)}
                    aria-label="Open menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Slide-in drawer */}
                {mobileMenuOpen && (
                    <>
                        <div
                            className="mobile-overlay"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                        <div className="mobile-drawer">
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
                )}
            </>
        );
    }

    // ── DESKTOP NAV (unchanged) ──────────────────────────────────
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
