import { useEffect, useState } from 'react';
import './Navigation.css';

const Navigation = ({ sections, activeSection, onNavigate }) => {
    const [showGoBack, setShowGoBack] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show "Go back" button when scrolled past first section
            if (window.scrollY > 100) {
                setShowGoBack(true);
            } else {
                setShowGoBack(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleGoBack = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
