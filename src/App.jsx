import { useRef, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import BoardCoFounders from './pages/BoardCoFounders';
import CompanyInfo from './pages/CompanyInfo';
import Coordinates from './pages/Coordinates';
import LeanModel from './pages/LeanModel';
import ValueProposition from './pages/ValueProposition';
import Vision from './pages/Vision';
import { COLORS, DIMENSIONS, SCROLL_OFFSETS } from './config/constants';
import locales from './config/locales.json';
import { useResponsive } from './hooks/useResponsive';
import { useScrollBackground } from './hooks/useScrollBackground';
import { useAnimationObserver, useSectionObserver } from './hooks/useSectionObserver';

function App() {
    const [activeSection, setActiveSection] = useState('vision');
    const isLaptop = useResponsive();
    const bgOpacity = useScrollBackground();
    const sectionRefs = useRef({});

    const sections = [
        { id: 'vision', label: locales.app.sections[0].label, component: Vision },
        { id: 'company', label: locales.app.sections[1].label, component: CompanyInfo },
        { id: 'board', label: locales.app.sections[2].label, component: BoardCoFounders },
        { id: 'value', label: locales.app.sections[3].label, component: ValueProposition },
        { id: 'lean', label: locales.app.sections[4].label, component: LeanModel },
        { id: 'contact', label: locales.app.sections[5].label, component: Coordinates }
    ];

    const handleNavigation = (sectionId) => {
        const element = sectionRefs.current[sectionId];
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - SCROLL_OFFSETS.NAVBAR_HEIGHT;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveSection(sectionId);
        }
    };

    useSectionObserver(sectionRefs, setActiveSection);
    useAnimationObserver(sectionRefs);

    return (
        <div className="app" style={{
            backgroundColor: bgOpacity === 0 ? COLORS.PRIMARY_BG : COLORS.SECONDARY_BG,
            maxWidth: isLaptop ? DIMENSIONS.MAX_CONTENT_WIDTH : "100%",
            margin: "0 auto"
        }}>
            <Navigation
                sections={sections}
                activeSection={activeSection}
                onNavigate={handleNavigation}
                isLaptop={isLaptop}
                visionRef={sectionRefs}
            />
            <main className="main-content">
                {sections.map(({ id, component: Component }) => (
                    <section
                        key={id}
                        ref={(el) => (sectionRefs.current[id] = el)}
                        data-section={id}
                        className="section-wrapper"
                    >
                        <Component
                            isLaptop={isLaptop}
                            sections={sections}
                            activeSection={activeSection}
                            onNavigate={handleNavigation}
                        />
                    </section>
                ))}
            </main>
        </div>
    );
}

export default App;
